using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Telerik.Examples.Mvc.Areas.MenuSecurityTrimming.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        //
        // GET: /Account/Login
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Login(string email, string password, string returnUrl)
        {
            // For demo purposes, accept any non-empty credentials
            if (!string.IsNullOrEmpty(email) && !string.IsNullOrEmpty(password))
            {
                FormsAuthentication.SetAuthCookie(email, false);

                if (Url.IsLocalUrl(returnUrl))
                {
                    return Redirect(returnUrl);
                }
                return RedirectToAction("Index", "Home");
            }

            ModelState.AddModelError("", "Invalid login attempt.");
            return View();
        }

        //
        // POST: /Account/LogOff
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}