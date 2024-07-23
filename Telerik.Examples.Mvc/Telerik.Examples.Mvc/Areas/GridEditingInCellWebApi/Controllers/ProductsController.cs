using System.Linq;
using System.Web.Http;
using Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System.Net.Http;
using System.Data.Entity.Infrastructure;
using System.Net;
using System;

namespace Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Controllers
{
    public class ProductController : ApiController
    {
        private NorthwindEntities db;

        public ProductController()
        {
            db = new NorthwindEntities();
        }
        protected override void Dispose(bool disposing)
        {
            db.Dispose();

            base.Dispose(disposing);
        }

        // GET api/product
        public DataSourceResult Get([System.Web.Http.ModelBinding.ModelBinder(typeof(WebApiDataSourceRequestModelBinder))]DataSourceRequest request)
        {
            return db.Products.Select(p => new ProductViewModel
            {
                ProductID = p.ProductID,
                ProductName = p.ProductName,
                UnitPrice = p.UnitPrice ?? 0,
                Discontinued = p.Discontinued,
                UnitsInStock = p.UnitsInStock ?? 0
            }).ToDataSourceResult(request);
        }
        
        // POST api/product
        public HttpResponseMessage Post(ProductsRequest request)
        {
            if (ModelState.IsValid)
            {
                var products = db.AddProducts(request);
                
                var response = Request.CreateResponse(HttpStatusCode.Created, new DataSourceResult { Data =  products });
                response.Headers.Location = new Uri(Url.Link("DefaultApi", null));
                return response;
            }
            else
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(error => error.ErrorMessage);

                return Request.CreateResponse(HttpStatusCode.BadRequest, errors);
            }
        }

        // PUT api/product/5
        public HttpResponseMessage Put(ProductsRequest request) // the ProductsRequest is required in order the list of Product to be correctly bind from the request
        {
            if (ModelState.IsValid)
            {
                try
                {
                    db.UpdateProducts(request); 
                }
                catch (DbUpdateConcurrencyException)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(error => error.ErrorMessage);
                return Request.CreateResponse(HttpStatusCode.BadRequest, errors);
            }
        }

        // DELETE api/product/5
        public HttpResponseMessage Delete(ProductsRequest request)
        {
            try
            {
                db.RemoveProducts(request);
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, new DataSourceResult { Data = request.Models });
        }

        private bool ProductExists(int key)
        {
            return db.Products.Count(e => e.ProductID == key) > 0;
        }
    }
}
