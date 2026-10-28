using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Net;
using Telerik.Documents.Flow.FormatProviders.Docx;
using Telerik.Documents.Flow.FormatProviders.Html;
using Telerik.Documents.Flow.Model;

namespace Telerik.Examples.Mvc.Areas.EditorImportExport.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult ExportDocx(string content)
        {
            HtmlFormatProvider htmlProvider = new HtmlFormatProvider();
            RadFlowDocument htmlDocument = htmlProvider.Import(content, new TimeSpan(0, 1, 0));

            DocxFormatProvider docxProvider = new DocxFormatProvider();
            using (Stream output = System.IO.File.OpenWrite(Server.MapPath("~/App_Data/Sample.docx")))
            {
                docxProvider.Export(htmlDocument, output, new TimeSpan(0, 1, 0));
            }

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [HttpPost]
        public ActionResult ImportDocx()
        {
            RadFlowDocument flowDocument;
            DocxFormatProvider docxProvider = new DocxFormatProvider();

            using (Stream input = System.IO.File.OpenRead(Server.MapPath("~/App_Data/Sample.docx")))
            {
                flowDocument = docxProvider.Import(input, new TimeSpan(0,1,0));
            }

            HtmlFormatProvider htmlProvider = new HtmlFormatProvider();

            htmlProvider.ExportSettings.DocumentExportLevel = DocumentExportLevel.Fragment;
            htmlProvider.ExportSettings.StylesExportMode = StylesExportMode.Inline;

            string html = htmlProvider.Export(flowDocument, new TimeSpan(0, 1, 0));

            return Content(html);
        }
    }
}