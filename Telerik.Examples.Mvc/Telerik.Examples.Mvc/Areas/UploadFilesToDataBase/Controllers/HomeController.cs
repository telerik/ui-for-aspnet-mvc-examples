using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Data.Entity.SqlServer;
using Telerik.Examples.Mvc.Areas.UploadFilesToDataBase.Models;

namespace Telerik.Examples.Mvc.Areas.UploadFilesToDataBase.Controllers
{
    public class HomeController : Controller
    {
        private static bool _initialized;

        public ActionResult Index()
        {
            EnsureTableExists();
            return View();
        }

        public ActionResult FilesRead([DataSourceRequest] DataSourceRequest request)
        {
            EnsureTableExists();
            UserFilesEntities db = new UserFilesEntities();

            var userFiles = db.UserFile.Select(f => new UserFileViewModel()
            {
                Id = f.Id,
                Name = f.Name,
                DataLength = SqlFunctions.DataLength(f.Data)
            });

            return Json(userFiles.ToDataSourceResult(request));
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult FilesDestroy([DataSourceRequest] DataSourceRequest request, UserFileViewModel file)
        {
            if (file != null)
            {
                UserFilesEntities db = new UserFilesEntities();
                db.UserFile.Remove(db.UserFile.FirstOrDefault(f => f.Id == file.Id));

                db.SaveChanges();
            }

            return Json(new[] { file }.ToDataSourceResult(request, ModelState));
        }

        public ActionResult Save(IEnumerable<HttpPostedFileBase> files)
        {
            if (files != null)
            {
                UserFilesEntities db = new UserFilesEntities();

                foreach (var file in files)
                {
                    db.UserFile.Add(new UserFile()
                    {
                        Name = Path.GetFileName(file.FileName),
                        Data = GetFilesBytes(file)
                    });
                }

                db.SaveChanges();
            }

            // Return an empty string to signify success
            return Content("");
        }

        public ActionResult Download(int id)
        {
            UserFilesEntities db = new UserFilesEntities();

            var file = db.UserFile.FirstOrDefault(f => f.Id == id);

            return File(file.Data.ToArray(), "application/octet-stream", file.Name);
        }

        public static byte[] GetFilesBytes(HttpPostedFileBase file)
        {
            MemoryStream target = new MemoryStream();

            file.InputStream.CopyTo(target);

            return target.ToArray();
        }

        private void EnsureTableExists()
        {
            if (_initialized) return;

            using (var db = new UserFilesEntities())
            {
                db.Database.ExecuteSqlCommand(@"
                    IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'UserFile')
                    BEGIN
                        CREATE TABLE [dbo].[UserFile](
                            [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                            [Name] NVARCHAR(255) NULL,
                            [Data] VARBINARY(MAX) NULL
                        )
                    END");
            }

            _initialized = true;
        }
    }
}