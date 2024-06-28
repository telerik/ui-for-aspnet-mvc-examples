using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Newtonsoft.Json;

namespace Telerik.Examples.Mvc.Areas.GridBindingDataTable.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DataTable products = Products();

            return View(products);
        }

        public ActionResult Read([DataSourceRequest] DataSourceRequest request)
        {
            DataTable products = Products();
            
            return Json(products.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update([DataSourceRequest] DataSourceRequest request, int ProductID, string ProductName, int SupplierID,
                int CategoryID, string QuantityPerUnit, double UnitPrice, int UnitsInstock, int UnitsOnOrder, int ReorderLevel, bool Discontinued)
        {
            //your database save logic
            return Json(new object());
        }

        private DataTable Products()
        {
            var connection = ConfigurationManager.ConnectionStrings["GridBindingDataTableEntities"].ConnectionString;
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