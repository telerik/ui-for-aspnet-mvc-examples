using ChangingThemesOnTheClient.Models;
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;

namespace ChangingThemesOnTheClient.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }
        public ActionResult GetThemes()
        {
            var themes = new List<Theme>()
            {
                new Theme() { ThemeId = "default-v2", Name = "Default-v2" },
                new Theme() { ThemeId = "bootstrap-v4", Name = "Bootstrap v4" },
                new Theme() { ThemeId = "material-v2", Name = "Material-v2" },
                new Theme() { ThemeId = "default", Name = "Default" },
                new Theme() { ThemeId = "material", Name = "Material" },
                new Theme() { ThemeId = "moonlight", Name = "Moonlight" },
                new Theme() { ThemeId = "uniform", Name = "Uniform" },
                new Theme() { ThemeId = "bootstrap", Name = "Bootstrap v3" },
                new Theme() { ThemeId = "highcontrast", Name = "High Contrast" },
                new Theme() { ThemeId = "metroblack", Name = "Metro Black" },
                new Theme() { ThemeId = "silver", Name = "Sliver" },
                new Theme() { ThemeId = "blueopal", Name = "Blue Opal" },
                new Theme() { ThemeId = "flat", Name = "Flat" },
                new Theme() { ThemeId = "metro", Name = "Metro" },
                new Theme() { ThemeId = "office365", Name = "Office 365" },
                new Theme() { ThemeId = "black", Name = "Black" },
                new Theme() { ThemeId = "fiori", Name = "Fiori" },
                new Theme() { ThemeId = "materialblack", Name = "Material black" },
                new Theme() { ThemeId = "nova", Name = "Nova" },
            };
            return Json(themes,JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult SetTheme(string selection)
        {
            HttpCookie cookie = Request.Cookies.Get("theme");
            if(cookie == null)
            {
                cookie = new HttpCookie("theme", selection) { Expires = DateTime.Now.AddMinutes(10) };
            }
            else
            {
                cookie.Value = selection;
            }

            HttpContext.Response.AppendCookie(cookie);
            var returnUrl = Request.Headers["Referer"].ToString();
            return Json(new { result = "Redirect", url = returnUrl });
        }
    }
}
