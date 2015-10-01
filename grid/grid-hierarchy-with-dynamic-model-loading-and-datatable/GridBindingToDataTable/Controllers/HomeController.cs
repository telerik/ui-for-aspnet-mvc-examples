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

namespace GridBindingToDataTable.Controllers
{
    public class CustomDataSourceRequestModelBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            DataSourceRequestModelBinder originalBinder = new DataSourceRequestModelBinder();

            DataSourceRequest originalRequest =  (DataSourceRequest)originalBinder.BindModel(controllerContext, bindingContext);
            CustomDataSourceRequest request = new CustomDataSourceRequest() {
                Aggregates = originalRequest.Aggregates,
                Filters = originalRequest.Filters,
                Groups = originalRequest.Groups,
                PageSize = originalRequest.PageSize,
                Page = originalRequest.Page,
                Sorts = originalRequest.Sorts
            };

            string tableName;
            string parentFieldName;
            string parentFieldValue;

            if (TryGetValue(bindingContext, "tableName", out tableName))
            {
                request.TableName = tableName;
            }

            if (TryGetValue(bindingContext, "parentFieldName", out parentFieldName))
            {
                request.ParentFieldName = parentFieldName;
            }

            if (TryGetValue(bindingContext, "parentFieldValue", out parentFieldValue))
            {
                request.ParentFieldValue = parentFieldValue;
            }

            return request;
        }

        public string Prefix { get; set; }

        private bool TryGetValue<T>(ModelBindingContext bindingContext, string key, out T result)
        {
            if (Prefix.HasValue())
            {
                key = Prefix + "-" + key;
            }

            var value = bindingContext.ValueProvider.GetValue(key);

            if (value == null)
            {
                result = default(T);

                return false;
            }

            result = (T)value.ConvertTo(typeof(T));

            return true;
        }
    }

    public class CustomDataSourceRequestAttribute : DataSourceRequestAttribute
    {
        public override IModelBinder GetBinder()
        {
            return new CustomDataSourceRequestModelBinder() { Prefix = Prefix };
        }
    }

    public class CustomDataSourceRequest : DataSourceRequest
    {
        public CustomDataSourceRequest()
            :base()
        {
        
        }

        public string TableName { get; set; }
        public string ParentFieldName { get; set; }
        public string ParentFieldValue { get; set; }
    }

    public class HomeController : Controller
    {
        public ActionResult Index(string tableName)
        {
            tableName = string.IsNullOrEmpty(tableName) ? "Employees" : tableName; 

            ViewData["Table"] = DynamicTable(tableName, null, null);
            ViewData["ParentChildRelations"] = GetTableParentChildRelations();
            ViewData["childrenTableName"] = GetTableParentChildRelations().Where(pair => pair.Key == tableName).Select(pair => pair.Value).FirstOrDefault();

            return View(model: tableName);
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult DetailTemplate(string tableName, string parentFieldName, string parentFieldValue)
        {
            ViewData["parentFieldValue"] = parentFieldValue;
            ViewData["parentFieldName"] = parentFieldName;
            ViewData["tableName"] = tableName;

            DataTable data = DynamicTable(string.IsNullOrEmpty(tableName) ? tableName : tableName, parentFieldName, parentFieldValue);

            return PartialView(data);
        }


        public ActionResult Read([CustomDataSourceRequest] CustomDataSourceRequest request)
        {
            DataTable orders = DynamicTable(request.TableName, request.ParentFieldName, request.ParentFieldValue);

            if (request.Aggregates.Any())
            {
                request.Aggregates.Each(agg =>
                    {
                        agg.Aggregates.Each(a =>
                            {
                                a.MemberType = orders.Columns[agg.Member].DataType;
                            });
                    });
            }

            return Json(orders.ToDataSourceResult(request));
        }

        private DataTable DynamicTable(string tableName, string parentFieldName, string parentFieldValue)
        {
            //Secure SQL connection strings - current implementation is for test purposes only.
            var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                var command = new SqlCommand();
                command.Connection = connection;
                command.CommandText = string.Format("SELECT * from {0}", tableName);
                if (!string.IsNullOrEmpty(parentFieldName)) 
                {
                    command.CommandText += " WHERE " + parentFieldName + " = @parentFieldValue";
                    command.Parameters.Add(new SqlParameter("parentFieldValue", parentFieldValue));
                }

                using (var dataAdapter = new SqlDataAdapter(command))
                {
                    var dataTable = new DataTable();

                    dataAdapter.Fill(dataTable);
                    dataAdapter.FillSchema(dataTable, SchemaType.Mapped);
                    return dataTable;
                }
            }

        }

        private List<KeyValuePair<string, string>> GetTableParentChildRelations()
        {
             return new List<KeyValuePair<string, string>>() {
                new KeyValuePair<string,string>("Employees", "Orders"),
                new KeyValuePair<string,string>("Categories", "Products")
            };
        }
    }
}
