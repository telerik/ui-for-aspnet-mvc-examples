using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Mvc;
using Telerik.Examples.Mvc.Areas.ChatAccessFiles.Models;

namespace Telerik.Examples.Mvc.Areas.ChatAccessFiles.Controllers
{
    public class HomeController : Controller
    {
        private const string ChatUploadsSessionKey = "ChatUploadedFiles";

        private IDictionary<string, ChatUploadedFile> GetSessionFiles()
        {
            var files = Session[ChatUploadsSessionKey] as IDictionary<string, ChatUploadedFile>;
            if (files == null)
            {
                files = new Dictionary<string, ChatUploadedFile>();
                Session[ChatUploadsSessionKey] = files;
            }
            return files;
        }

        public ActionResult Index()
        {
            var data = new List<ChatMessage>()
            {
                new ChatMessage {
                    Id = "1",
                    AuthorId = "2",
                    AuthorName = "Peter Smith",
                    AuthorImageUrl = "https://demos.telerik.com/aspnet-mvc/content/web/Customers/GOURL.jpg",
                    AuthorImageAltText = "Peter's profile picture",
                    Text = "Use the paperclip button in the message input area to attach files, and the file action menu to download or delete them.",
                    TimeStamp = DateTime.Now
                },
                new ChatMessage {
                    Id = "2",
                    AuthorId = "2",
                    AuthorName = "Peter Smith",
                    AuthorImageUrl = "https://demos.telerik.com/aspnet-mvc/content/web/Customers/GOURL.jpg",
                    AuthorImageAltText = "Peter's profile picture",
                    Text = "Go ahead and upload your first file. Once uploaded, I will receive it with a download link so both of us can access it.",
                    TimeStamp = DateTime.Now
                }
            };
            return View(data);
        }

        [HttpPost]
        public ActionResult SaveFile(HttpPostedFileBase file)
        {
            if (file == null || file.ContentLength == 0)
            {
                return Json(new { success = false, message = "No file uploaded." });
            }

            var fileName = Path.GetFileName(file.FileName);
            var fileId = Guid.NewGuid().ToString("N");

            // The file bytes are stored in session rather than on the physical file system.
            // In a real-world application you would persist the file to a database, cloud storage, etc.
            byte[] fileBytes;
            using (var ms = new MemoryStream())
            {
                file.InputStream.CopyTo(ms);
                fileBytes = ms.ToArray();
            }

            var uploadedFile = new ChatUploadedFile
            {
                FileId = fileId,
                FileName = fileName,
                ContentType = file.ContentType,
                Size = file.ContentLength,
                Data = fileBytes
            };

            var sessionFiles = GetSessionFiles();
            sessionFiles[fileId] = uploadedFile;

            var fileUrl = Url.Action("DownloadFile", "Home", new { fileId = fileId }, Request.Url.Scheme);

            return Json(new
            {
                success = true,
                url = fileUrl,
                name = fileName,
                size = file.ContentLength,
                extension = Path.GetExtension(fileName)
            });
        }

        public ActionResult DownloadFile(string fileId)
        {
            if (string.IsNullOrEmpty(fileId))
            {
                return HttpNotFound();
            }

            var sessionFiles = GetSessionFiles();

            ChatUploadedFile uploadedFile;
            if (!sessionFiles.TryGetValue(fileId, out uploadedFile))
            {
                return HttpNotFound();
            }

            return File(uploadedFile.Data, uploadedFile.ContentType, uploadedFile.FileName);
        }
    }
}
