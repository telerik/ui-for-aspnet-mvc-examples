using Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Mpxj.Services;
using System.IO;

namespace Telerik.Examples.Mvc.Areas.GanttImportExportUsingMpxj.Controllers
{
    public class HomeController : Controller
    {
        private GanttTaskService taskService;
        private GanttDependencyService dependencyService;
        private GanttResourceService resourceService;
        private GanttAssignmentService assignmentService;
        private FileWriteService fileWriteService;

        private string readPath;

        public HomeController()
        {
            this.readPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/SDLC.mpp");

            this.taskService = new GanttTaskService();
            this.dependencyService = new GanttDependencyService();
            this.resourceService = new GanttResourceService();
            this.assignmentService = new GanttAssignmentService();
            this.fileWriteService = new FileWriteService();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SaveFile(GanttDataContainer data)
        {
            var fileName = "exported_file.xml";
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);

            this.fileWriteService.SaveData(data, path);

            return new HttpStatusCodeResult(200);
        }

        public ActionResult ExportFile()
        {
            var fileName = "exported_file.xml";
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);

            var stream = new MemoryStream();

            using (FileStream file = new FileStream(path, FileMode.Open, FileAccess.Read))
            {
                string mimeType = MimeMapping.GetMimeMapping(fileName);
                file.CopyTo(stream);

                return File(stream.ToArray(), mimeType, fileName);
            }
        }

        public ActionResult UploadFile(IEnumerable<HttpPostedFileBase> files)
        {
            string fileName = "";

            if (files != null)
            {
                foreach (var file in files)
                {
                    fileName = Path.GetFileName(file.FileName);
                    var physicalPath = Path.Combine(Server.MapPath("~/App_Data"), fileName);

                    file.SaveAs(physicalPath);
                }
            }

            return Json(new { fileName = fileName });
        }

        public ActionResult ReadTasks([DataSourceRequest] DataSourceRequest request, string fileName)
        {
            string path;

            if (!string.IsNullOrEmpty(fileName))
            {
                path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);
            }
            else
            {
                path = this.readPath;
            }

            var modelTasks = this.taskService.ReadTasks(path);

            return Json(modelTasks.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadDependencies([DataSourceRequest] DataSourceRequest request, string fileName)
        {
            string path;

            if (!string.IsNullOrEmpty(fileName))
            {
                path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);
            }
            else
            {
                path = this.readPath;
            }

            var dependencies = this.dependencyService.ReadDependencies(path);

            return Json(dependencies.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadResources(string fileName)
        {
            string path;

            if (!string.IsNullOrEmpty(fileName))
            {
                path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);
            }
            else
            {
                path = this.readPath;
            }

            var resources = this.resourceService.ReadResources(path);

            return Json(resources, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadAssignments([DataSourceRequest] DataSourceRequest request, string fileName)
        {
            string path;

            if (!string.IsNullOrEmpty(fileName))
            {
                path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data/" + fileName);
            }
            else
            {
                path = this.readPath;
            }

            var assignments = this.assignmentService.ReadAssignments(path);

            return Json(assignments.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }
    }
}