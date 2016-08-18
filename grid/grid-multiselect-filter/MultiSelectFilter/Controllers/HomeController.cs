using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using MultiSelectFilter.Models;
using Kendo.Mvc;

namespace MultiSelectFilter.Controllers
{
    public class HomeController : Controller
    {
        static List<ViewModel> data;
        static HomeController()
        {
            data = new List<ViewModel>()
            {
                new ViewModel
                {
                      ID = 1,
                      Tags = new List<string>() 
                      {
                          "Tag1", "Tag2"
                      }
                },
                new ViewModel
                {
                      ID = 2,
                      Tags = new List<string>() 
                      {
                          "Tag2", "Tag3"
                      }
                },
                new ViewModel
                {
                      ID = 3,
                      Tags = new List<string>() 
                      {
                          "Tag3"
                      }
                }
            };            
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        private void GetMultiSelectFilter(IList<IFilterDescriptor> filters, List<object> result, String member)
        {
            for (int i = filters.Count - 1; i >= 0; i--)
            {
                var filter = filters[i];
                if (filter is CompositeFilterDescriptor)
                {
                    GetMultiSelectFilter(((CompositeFilterDescriptor)filter).FilterDescriptors, result, member);
                }
                else if (((FilterDescriptor)filter).Member == member) 
                {
                    filters.Remove(filter);
                    result.Add(((FilterDescriptor)filter).Value);
                }
            }
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            List<object> tagFilters = new List<object>();
            GetMultiSelectFilter(request.Filters, tagFilters, "Tags");
            IQueryable<ViewModel> result = data.AsQueryable();
            if (tagFilters.Any())
            {
                result = result.Where(d => d.Tags.Any(t => tagFilters.Contains(t)));
            }

            return Json(result.ToDataSourceResult(request));
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
