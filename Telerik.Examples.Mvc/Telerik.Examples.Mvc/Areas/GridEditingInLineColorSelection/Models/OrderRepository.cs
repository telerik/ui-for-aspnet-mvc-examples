using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingInLineColorSelection.Models
{
    public class OrderRepository
    {
        //static data 
        private static List<PaintOrder> orderList = new List<PaintOrder> {
                new PaintOrder {PaintOrderID = 1, Date = new DateTime(2012,8,1), PaintColor = "#d63737", Description = "Car Paint" },
                new PaintOrder {PaintOrderID = 2, Date = new DateTime(2012,8,1), PaintColor = "#a44c4c", Description = "Latex Paint" },
                new PaintOrder {PaintOrderID = 3, Date = new DateTime(2012,8,2), PaintColor = "#d45757", Description = "Car Paint" },
                new PaintOrder {PaintOrderID = 4, Date = new DateTime(2012,8,3), PaintColor = "#095859", Description = "Car Paint" },
                new PaintOrder {PaintOrderID = 5, Date = new DateTime(2012,8,4), PaintColor = "#ff05ee", Description = "Latex Paint" },
                new PaintOrder {PaintOrderID = 6, Date = new DateTime(2012,8,5), PaintColor = "#37b929", Description = "Latex Paint" },
                new PaintOrder {PaintOrderID = 7, Date = new DateTime(2012,8,5), PaintColor = "#fbff0d", Description = "Boat Paint" },
                new PaintOrder {PaintOrderID = 8, Date = new DateTime(2012,8,6), PaintColor = "#0dffef", Description = "Wood Paint" },
                new PaintOrder {PaintOrderID = 9, Date = new DateTime(2012,8,6), PaintColor = "#000000", Description = "Latex Paint" },
                new PaintOrder {PaintOrderID = 10, Date = new DateTime(2012,8,7), PaintColor = "#7600fc", Description = "Latex Paint" },
                new PaintOrder {PaintOrderID = 11, Date = new DateTime(2013,2,7), PaintColor = "#520052", Description = "Latex Paint" },
            };

        public static IList<PaintOrder> GetAll()
        {
            IList<PaintOrder> result = (IList<PaintOrder>)HttpContext.Current.Session["Orders"];

            if (result == null)
            {
                //read from dataBase
                HttpContext.Current.Session["PaintOrders"] = result =
                    (from order in orderList
                     select new PaintOrder
                     {
                         PaintOrderID = order.PaintOrderID,
                         Date = order.Date,
                         Description = order.Description,
                         PaintColor = order.PaintColor
                     }).ToList();
            }

            return result;
        }

        public static PaintOrder One(Func<PaintOrder, bool> predicate)
        {
            return GetAll().Where(predicate).FirstOrDefault();
        }

        public static void Insert(PaintOrder order)
        {
            order.PaintOrderID = GetAll().OrderByDescending(p => p.PaintOrderID).First().PaintOrderID + 1;

            GetAll().Insert(0, order);
        }

        public static void Update(PaintOrder order)
        {
            PaintOrder target = One(o => o.PaintOrderID == order.PaintOrderID);
            if (target != null)
            {
                target.PaintOrderID = order.PaintOrderID;
                target.Date = order.Date;
                target.Description = order.Description;
                target.PaintColor = order.PaintColor;
            }
        }

        public static void Remove(PaintOrder order)
        {
            PaintOrder target = One(o => o.PaintOrderID == order.PaintOrderID);
            if (target != null)
            {
                GetAll().Remove(target);
            }
        }
    }
}