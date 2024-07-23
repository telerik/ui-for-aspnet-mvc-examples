using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models
{
    public static class DbExtensions
    {
        public static IQueryable<ProductViewModel> GetProducts(this NorthwindEntities db)
        {
            return db.Products.Select(p => new ProductViewModel
            {
                ProductID = p.ProductID,
                ProductName = p.ProductName,
                UnitPrice = p.UnitPrice ?? 0,
                Discontinued = p.Discontinued,
                UnitsInStock = p.UnitsInStock ?? 0
            });
        }

        public static ProductViewModel GetProduct(this NorthwindEntities db, int id)
        {
            return db.GetProducts().FirstOrDefault(x => x.ProductID == id);
        }

        public static IEnumerable<ProductViewModel> AddProducts(this NorthwindEntities db, ProductsRequest request)
        {
            foreach (var product in request.Models)
            {
                db.AddProduct(product);                
            }

            return request.Models;
        }

        public static void AddProduct(this NorthwindEntities db, ProductViewModel product)
        {
            var entity = product.ToProduct();

            db.Products.Add(entity);
            db.SaveChanges();

            product.ProductID = entity.ProductID;
        }

        public static void UpdateProducts(this NorthwindEntities db, ProductsRequest request)
        {
            foreach (var product in request.Models)
            {
                db.UpdateProduct(product);                
            }
        }

        public static void UpdateProduct(this NorthwindEntities db, ProductViewModel product)
        {
            var entity = product.ToProduct();

            entity.ProductID = product.ProductID;

            db.Products.Attach(entity);
            db.Entry(entity).State = EntityState.Modified;
            db.SaveChanges();
        }

        public static void RemoveProducts(this NorthwindEntities db, ProductsRequest request)
        {
            foreach (var product in request.Models)
            {
                db.RemoveProduct(product.ProductID);
            }
        }

        public static void RemoveProduct(this NorthwindEntities db, int id)
        {
            var entity = new Product();

            entity.ProductID = id;

            db.Products.Attach(entity);
            db.Products.Remove(entity);

            db.SaveChanges();
        }

        private static Product ToProduct(this ProductViewModel viewModel)
        {
            return new Product
            {
                ProductName = viewModel.ProductName,
                UnitPrice = viewModel.UnitPrice,
                UnitsInStock = (short)viewModel.UnitsInStock,
                Discontinued = viewModel.Discontinued,
            };

        }
    }
}