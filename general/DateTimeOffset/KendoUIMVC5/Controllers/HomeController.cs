using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoUIMVC5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        private static IMapper mapper;
        private readonly CarsService service = new CarsService();

        public HomeController()
        {
            if(mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MappingProfile());
                });
                mapper = mappingConfig.CreateMapper();
            }
        }

        public ActionResult Index()
        {
            return View(mapper.Map<CarViewModel>(service.GetAllCars().FirstOrDefault()));
        }

        public ActionResult AllCars([DataSourceRequest] DataSourceRequest request)
        {
            return Json(service.GetAllCars().ToDataSourceResult(request, car => mapper.Map<CarViewModel>(car)));
        }
    }
}
