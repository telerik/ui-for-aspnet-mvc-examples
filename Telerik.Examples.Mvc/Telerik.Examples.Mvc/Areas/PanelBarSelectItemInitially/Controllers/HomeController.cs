using Telerik.Examples.Mvc.Areas.PanelBarSelectItemInitially.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.PanelBarSelectItemInitially.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
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
    }
}