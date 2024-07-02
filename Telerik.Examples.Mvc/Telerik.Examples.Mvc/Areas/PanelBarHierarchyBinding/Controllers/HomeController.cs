using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Telerik.Examples.Mvc.Areas.PanelBarHierarchyBinding.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            IEnumerable<TreeViewItemModel> Items = new List<TreeViewItemModel>
                {
                    new TreeViewItemModel
                    {
                        Text = "Furniture",
                        Items = new List<TreeViewItemModel>
                        {
                            new TreeViewItemModel()
                            {
                                Text = "Tables & Chairs"
                            },
                            new TreeViewItemModel
                            {
                                 Text = "Sofas"
                            },
                            new TreeViewItemModel
                            {
                                 Text = "Occasional Furniture"
                            }
                        }
                    },
                    new TreeViewItemModel
                    {
                        Text = "Decor",
                        Items = new List<TreeViewItemModel>
                        {
                            new TreeViewItemModel()
                            {
                                Text = "Bed Linen"
                            },
                            new TreeViewItemModel
                            {
                                 Text = "Curtains & Blinds"
                            },
                            new TreeViewItemModel
                            {
                                 Text = "Carpets"
                            }
                        }
                    }
                };
            return View(Items);
        }
    }
}