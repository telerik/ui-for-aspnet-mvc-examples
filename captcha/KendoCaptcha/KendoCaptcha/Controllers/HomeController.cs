using KendoCaptcha.Models;
using System;
using System.Collections.Generic;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Telerik.Web.Captcha;

namespace KendoCaptcha.Controllers
{
    public class HomeController : Controller
    {
        private const string contentFolderRoot = "~/Content/";
        private string CaptchaPath = Path.Combine(contentFolderRoot, "Captcha");

        public ActionResult Index()
        {
            GenerateNewCaptcha();
            return View(new UserViewModel());
        }

        [HttpPost]
        public ActionResult Save(UserViewModel user, CaptchaInputModel captchaModel)
        {
            if (string.IsNullOrEmpty(captchaModel.CaptchaID))
            {
                GenerateNewCaptcha();
            }
            else
            {
                string text = GetCaptchaText(captchaModel.CaptchaID);

                if (text == captchaModel.Captcha.ToUpperInvariant())
                {
                    ModelState.Clear();
                    GenerateNewCaptcha();
                }
            }

            return View("Index", user);
        }

        public ActionResult Reset_Events()
        {
            CaptchaImage newCaptcha = SetCaptchaImage();

            return Json(new CaptchaInputModel
            {
                Captcha = Url.Content("~/Content/Captcha/" + newCaptcha.UniqueId + ".png"),
                CaptchaID = newCaptcha.UniqueId
            }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Validate_Events(CaptchaInputModel model)
        {
            string text = GetCaptchaText(model.CaptchaID);

            return Json(text == model.Captcha.ToUpperInvariant(), JsonRequestBehavior.AllowGet);
        }

        private void GenerateNewCaptcha()
        {
            CaptchaImage captchaImage = SetCaptchaImage();

            ViewData["Captcha"] = Url.Content("~/Content/Captcha/" + captchaImage.UniqueId + ".png");
            ViewData["CaptchaID"] = captchaImage.UniqueId;
        }

        private string GetCaptchaText(string captchaId)
        {
            string text = (string)Session["captcha_" + captchaId];

            return text;
        }

        private CaptchaImage SetCaptchaImage()
        {
            CaptchaImage newCaptcha = CaptchaHelper.GetNewCaptcha();

            MemoryStream audio = CaptchaHelper.SpeakText(newCaptcha);
            using (FileStream file = new FileStream(Path.Combine(Server.MapPath("~/Content/Captcha"), newCaptcha.UniqueId + ".wav"), FileMode.Create, FileAccess.Write))
            {
                audio.WriteTo(file);
            }

            var image = CaptchaHelper.RenderCaptcha(newCaptcha);
            image.Save(Path.Combine(Server.MapPath("~/Content/Captcha"), newCaptcha.UniqueId + ".png"), ImageFormat.Png);

            Session["captcha_" + newCaptcha.UniqueId] = newCaptcha.Text;

            return newCaptcha;
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
