using Telerik.Examples.Mvc.Areas.GridDateTimeOffset.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;

namespace Telerik.Examples.Mvc.Areas.GridDateTimeOffset.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMapper mapper;
        private readonly CarsService service = new CarsService();
        public static IEnumerable<Car> cars;

        public HomeController()
        {
            if (mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MappingProfile());
                });
                mapper = mappingConfig.CreateMapper();
            }

            if (cars == null)
            {
                cars = service.GetAllCars();
            }
        }

        public ActionResult Index()
        {
            return View(mapper.Map<CarViewModel>(cars.FirstOrDefault()));
        }

        public ActionResult AllCars([DataSourceRequest] DataSourceRequest request)
        {
            var result = cars.Select(car => mapper.Map<CarViewModel>(car));
            return Json(result.ToDataSourceResult(request));
        }
    }
}