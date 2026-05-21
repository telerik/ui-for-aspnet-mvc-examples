using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.MenuSecurityTrimming.Controllers
{
    [Authorize]
    public class ManageController : Controller
    {
        //
        // GET: /Manage/Index
        public ActionResult Index()
        {
            return View();
        }
    }
}