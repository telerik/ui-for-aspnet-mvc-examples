using Kendo.Mvc.UI;
using pre_select_panelbar_item.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PanelBarHierarchyBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult LocalData()
		{
			ViewBag.ItemToSelect = "Second";

			List<LocalPanelBarItem> pbItems = new List<LocalPanelBarItem>() {
					new LocalPanelBarItem
					{
						MenuName="First",
						MenuUrl = "firstUrl",
						ChildItems = new List<LocalPanelBarItem>() {
								new LocalPanelBarItem
								{
									MenuName="Child one of 1",
									MenuUrl = "thirdUrl",
									IsPreSelected = true
								},
								new LocalPanelBarItem
								{
									MenuName="Child two of 1",
									MenuUrl = "fourthUrl"
								}
							}
					},
					new LocalPanelBarItem
					{
						MenuName="Second",
						MenuUrl = "secondUrl"
					},
				};

			ViewBag.MyPanelBarItems = pbItems;

			return View();
		}

		public ActionResult RemoteData()
		{
			ViewBag.ItemToSelect = "Second";
			return View();
		}

		public JsonResult ReadMenu(int? MenuId)
		{
			if (!MenuId.HasValue)
			{
				List<RemoteDataPanelBarItem> rootItems = new List<RemoteDataPanelBarItem>() {
					new RemoteDataPanelBarItem
					{
						MenuHasChild=true,
						MenuId=1,
						MenuName="First",
						MenuParentId=null,
						MenuUrl = "firstUrl"
					},
					new RemoteDataPanelBarItem
					{
						MenuHasChild=false,
						MenuId=2,
						MenuName="Second",
						MenuParentId=null,
						MenuUrl = "secondUrl"
					},
				};

				return Json(rootItems, JsonRequestBehavior.AllowGet);

			}
			else
			{
				List<RemoteDataPanelBarItem> childItems = new List<RemoteDataPanelBarItem>() {
					new RemoteDataPanelBarItem
					{
						MenuHasChild=false,
						MenuId=3,
						MenuName="Child one of " + MenuId,
						MenuParentId=1,
						MenuUrl = "thirdUrl"
					},
					new RemoteDataPanelBarItem
					{
						MenuHasChild=false,
						MenuId=4,
						MenuName="Child two of " + MenuId,
						MenuParentId=1,
						MenuUrl = "fourthUrl"
					}
				};

				return Json(childItems, JsonRequestBehavior.AllowGet);
			}
		}

	}
}
