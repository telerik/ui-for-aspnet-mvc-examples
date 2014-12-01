using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using KendoGridBatchEditing.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;

namespace KendoGridBatchEditing.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
        {
            using (var northwind = new NorthwindEntities())
            {
                IQueryable<Product> products = northwind.Products;
                DataSourceResult result = products.ToDataSourceResult(request);
                return Json(result);
            }
        }

        public ActionResult Products_Create([DataSourceRequest]DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<ProductViewModel> products)
        {
            // Will keep the inserted entitites here. Used to return the result later.
            var entities = new List<Product>();
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    foreach (var product in products)
                    {
                        // Create a new Product entity and set its properties from the posted ProductViewModel
                        var entity = new Product
                        {
                            ProductName = product.ProductName,
                            UnitsInStock = product.UnitsInStock
                        };
                        // Add the entity
                        northwind.Products.Add(entity);
                        // Store the entity for later use
                        entities.Add(entity);
                    }
                    // Insert the entities in the database
                    northwind.SaveChanges();
                }
            }
            // Return the inserted entities. The grid needs the generated ProductID. Also return any validation errors.
            return Json(entities.ToDataSourceResult(request, ModelState, product => new ProductViewModel
            {
                ProductID = product.ProductID,
                ProductName = product.ProductName,
                UnitsInStock = product.UnitsInStock
            }));
        }

        public ActionResult Products_Update([DataSourceRequest]DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<ProductViewModel> products)
        {
            // Will keep the updated entitites here. Used to return the result later.
            var entities = new List<Product>();
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    foreach (var product in products)
                    {
                        // Create a new Product entity and set its properties from the posted ProductViewModel
                        var entity = new Product
                        {
                            ProductID = product.ProductID,
                            ProductName = product.ProductName,
                            UnitsInStock = product.UnitsInStock
                        };
                        // Store the entity for later use
                        entities.Add(entity);
                        // Attach the entity
                        northwind.Products.Attach(entity);
                        // Change its state to Modified so Entity Framework can update the existing product instead of creating a new one
                        northwind.Entry(entity).State = EntityState.Modified;
                        // Or use ObjectStateManager if using a previous version of Entity Framework
                        // northwind.ObjectStateManager.ChangeObjectState(entity, EntityState.Modified);
                    }
                    // Update the entities in the database
                    northwind.SaveChanges();
                }
            }
            // Return the updated entities. Also return any validation errors.
            return Json(entities.ToDataSourceResult(request, ModelState, product => new ProductViewModel
            {
                ProductID = product.ProductID,
                ProductName = product.ProductName,
                UnitsInStock = product.UnitsInStock
            }));
        }

        public ActionResult Products_Destroy([DataSourceRequest]DataSourceRequest request, [Bind(Prefix = "models")]IEnumerable<ProductViewModel> products)
        {
            // Will keep the destroyed entitites here. Used to return the result later.
            var entities = new List<Product>();
            if (ModelState.IsValid)
            {
                using (var northwind = new NorthwindEntities())
                {
                    foreach (var product in products)
                    {
                        // Create a new Product entity and set its properties from the posted ProductViewModel
                        var entity = new Product
                        {
                            ProductID = product.ProductID,
                            ProductName = product.ProductName,
                            UnitsInStock = product.UnitsInStock
                        };
                        // Store the entity for later use
                        entities.Add(entity);
                        // Attach the entity
                        northwind.Products.Attach(entity);
                        // Delete the entity
                        northwind.Products.Remove(entity);
                        // Or use DeleteObject if using a previous versoin of Entity Framework
                        // northwind.Products.DeleteObject(entity);
                    }
                    // Delete the entity in the database
                    northwind.SaveChanges();
                }
            }
            // Return the destroyed entities. Also return any validation errors.
            return Json(entities.ToDataSourceResult(request, ModelState, product => new ProductViewModel
            {
                ProductID = product.ProductID,
                ProductName = product.ProductName,
                UnitsInStock = product.UnitsInStock
            }));
        }
    }
}
