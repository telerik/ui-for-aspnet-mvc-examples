using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using ForeignKeyColumnDemo.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using ForeignKeyColumnDemo.Convertors;
using System.Drawing;
using System.Web.Hosting;

namespace ForeignKeyColumnDemo.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult ForeignKeyColumn_Read([DataSourceRequest] DataSourceRequest request)
        {
            var allOrders = from orders in orderList
                         select new Order{
                            OrderID = orders.OrderID,
                            OrderDate = orders.OrderDate,
                            EmployeeId = orders.EmployeeId,
                            OrderDescription = orders.OrderDescription,
                            Image = orders.Image
                         };

            return Json(allOrders.ToDataSourceResult(request));
        }

        public ActionResult ForeignKeyColumn_Delete([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                var target = orderList.Where(o => o.OrderID == order.OrderID).FirstOrDefault();

                if (target != null)
                {
                    orderList.Remove(target);
                }
            
            }

            return Json(ModelState.ToDataSourceResult());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult ForeignKeyColumn_Update([DataSourceRequest] DataSourceRequest request, Order order)
        {
            if (order != null && ModelState.IsValid)
            {
                
                var target = orderList.Where(o => o.OrderID == order.OrderID).FirstOrDefault();

                if (target != null)
                {
                    int targetIndex = orderList.IndexOf(target);
                    orderList[targetIndex].OrderDate = order.OrderDate;
                    orderList[targetIndex].EmployeeId = order.EmployeeId;
                    orderList[targetIndex].OrderDescription = order.OrderDescription;
                }
            }

            return Json(ModelState.ToDataSourceResult());
        }

        public ActionResult ForeignKeyColumn_Create([DataSourceRequest] DataSourceRequest request, Order order)
        {
                order.OrderID = orderList[orderList.Count - 1].OrderID + 1;
                orderList.Add(order);
            
                return Json(new[] { order }.ToDataSourceResult(request, ModelState));
        }

        //return image from byte array
        public ActionResult RenderPhoto(int photoId)
        {
            byte[] photo = FetchPhotoFromDb(photoId);
            return File(photo, "image/png");
        }


        //read files
        private static List<byte[]> readFiles(List<byte[]> byteImages)
        {
            //get file paths - can be stored in DB
            string[] filePaths = Directory.GetFiles(HostingEnvironment.MapPath("~/Content/icons/"));

            foreach (string filePath in filePaths)
            {
                using (Image currentImage = Image.FromFile(filePath))
                {
                    byteImages.Add(ImageToByteArrayConverter.imageToByteArray(currentImage));
                }                                
            }

            return byteImages;
        }

        private static byte[] FetchPhotoFromDb(int photoId)
        {
            //fetch image from database
            return byteImages[photoId];
        }

        public static List<byte[]> byteImages = readFiles(new List<byte[]>());

        public static List<Order> orderList = new List<Order> { 
                new Order {OrderID = 1, OrderDate = new DateTime(2012,8,1),Image = FetchPhotoFromDb(0), OrderDescription = "Order Food" },
                new Order {OrderID = 2, OrderDate = new DateTime(2012,8,1),Image = FetchPhotoFromDb(1), OrderDescription = "Order Office Materials" },
                new Order {OrderID = 3, OrderDate = new DateTime(2012,8,2),Image = FetchPhotoFromDb(2), OrderDescription = "Order Production Materials" },
                new Order {OrderID = 4, OrderDate = new DateTime(2012,8,3),Image = FetchPhotoFromDb(3), OrderDescription = "Order Food" },
                new Order {OrderID = 5, OrderDate = new DateTime(2012,8,4),Image = FetchPhotoFromDb(4), OrderDescription = "Order Production Materials" },
                new Order {OrderID = 6, OrderDate = new DateTime(2012,8,5),Image = FetchPhotoFromDb(5), OrderDescription = "Order Production Materials" },
                new Order {OrderID = 7, OrderDate = new DateTime(2012,8,5),Image = FetchPhotoFromDb(6), OrderDescription = "Order Food" },
                new Order {OrderID = 8, OrderDate = new DateTime(2012,8,6),Image = FetchPhotoFromDb(7), OrderDescription = "Order Food" },
                new Order {OrderID = 9, OrderDate = new DateTime(2012,8,6),Image = FetchPhotoFromDb(8), OrderDescription = "Order Office Materials" },
            };
    }
}
