using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace KendoUIMVC5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DataTable products = Products();
            

            return View(products);
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            DataTable products = Products();
            
            if (request.Aggregates.Any())
            {
                request.Aggregates.Each(agg =>
                    {
                        agg.Aggregates.Each(a =>
                            {
                                a.MemberType = products.Columns[agg.Member].DataType;
                            });
                    });
            }

            return Json(products.ToDataSourceResult(request));
        }

        public ActionResult Update([DataSourceRequest] DataSourceRequest request, int ProductID, string ProductName, int SupplierID, 
                int CategoryID, string QuantityPerUnit, double UnitPrice, int UnitsInstock, int UnitsOnOrder, int ReorderLevel, bool Discontinued)
        {
            //your database save logic
            return Json(new object());
        }

        private DataTable Products()
        {
            var connection = ConfigurationManager.ConnectionStrings["NorthwindEntities"].ConnectionString;
            using (var dataAdapter = new SqlDataAdapter("SELECT * from Products", connection))
            {
                var dataTable = new DataTable();

                dataAdapter.Fill(dataTable);
                dataAdapter.FillSchema(dataTable, SchemaType.Mapped);
                return dataTable;
            }
        }
    }
}
