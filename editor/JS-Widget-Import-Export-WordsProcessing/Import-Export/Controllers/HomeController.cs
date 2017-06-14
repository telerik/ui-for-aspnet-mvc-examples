using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Telerik.Windows.Documents.Flow.FormatProviders.Docx;
using Telerik.Windows.Documents.Flow.FormatProviders.Html;
using Telerik.Windows.Documents.Flow.Model;

namespace Import_Export.Controllers
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
            RadFlowDocument htmlDocument = htmlProvider.Import(content);

            DocxFormatProvider docxProvider = new DocxFormatProvider();
            using (Stream output = System.IO.File.OpenWrite(Server.MapPath("~/App_Data/Sample.docx")))
            {
                docxProvider.Export(htmlDocument, output);
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
                flowDocument = docxProvider.Import(input);
            }

            HtmlFormatProvider htmlProvider = new HtmlFormatProvider();

            htmlProvider.ExportSettings.DocumentExportLevel = DocumentExportLevel.Fragment;
            htmlProvider.ExportSettings.StylesExportMode = StylesExportMode.Inline;

            string html = htmlProvider.Export(flowDocument);

            return Content(html);
        }
    }
}