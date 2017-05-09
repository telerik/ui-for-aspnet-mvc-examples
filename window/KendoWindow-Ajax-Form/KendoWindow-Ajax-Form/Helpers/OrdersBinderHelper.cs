using KendoWindow_Ajax_Form.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Xml.Serialization;

namespace KendoWindow_Ajax_Form.Helpers
{
    public class OrdersBinderHelper
    {
        public static IEnumerable<OrderViewModel> RetrunListOfOrders()
        {
            string xmlData = HttpContext.Current.Server.MapPath("~/App_Data/OrdersData.xml");
            DataSet ds = new DataSet();
            ds.ReadXml(xmlData);
            var result = new List<OrderViewModel>();
            result = (from rows in ds.Tables[0].AsEnumerable()
                        select new OrderViewModel
                        {
                            OrderID = Convert.ToInt32(rows[0].ToString()),
                            CustomerID = rows[1].ToString(),
                            ContactName = rows[2].ToString(),
                            OrderDate = DateTime.Parse(rows[3].ToString()),
                            ShippedDate = DateTime.Parse(rows[4].ToString())

                        }).ToList();
            return result;
        }

        public static void AddOrder(OrderViewModel order)
        {
            var list = RetrunListOfOrders().ToList();
            list.Add(order);

            WriteListOfOrders(list);
        }

        public static IEnumerable<OrderViewModel> WriteListOfOrders(IEnumerable<OrderViewModel> orders)
        { 
            DataSet ds = ToDataTable(orders);
            ds.WriteXml(HttpContext.Current.Server.MapPath("~/App_Data/OrdersData.xml"));


            return RetrunListOfOrders();
        }

        public static DataSet ToDataTable(IEnumerable<OrderViewModel> items)
        {
            var ds = new DataSet();
            var tb = new DataTable(typeof(OrderViewModel).Name);

            PropertyInfo[] props = typeof(OrderViewModel).GetProperties(BindingFlags.Public | BindingFlags.Instance);

            foreach (var prop in props)
            {
                tb.Columns.Add(prop.Name, prop.PropertyType);
            }

            foreach (var item in items)
            {
                var values = new object[props.Length];
                for (var i = 0; i < props.Length; i++)
                {
                    values[i] = props[i].GetValue(item, null);
                }

                tb.Rows.Add(values);
            }

            ds.Tables.Add(tb);

            return ds;
        }
    }
}