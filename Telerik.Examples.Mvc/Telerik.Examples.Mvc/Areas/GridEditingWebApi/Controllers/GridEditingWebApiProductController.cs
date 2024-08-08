using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Telerik.Examples.Mvc.Areas.GridEditingInCellWebApi.Models;

namespace Telerik.Examples.Mvc.Areas.GridEditingWebApi.Models
{
    public class GridEditingWebApiProductController : ApiController
    {
        private GridEditingWebApiEntities db;

        public GridEditingWebApiProductController()
        {
            db = new GridEditingWebApiEntities();
        }

        // GET api/GridEditingWebApiProduct
        public DataSourceResult GetProducts([System.Web.Http.ModelBinding.ModelBinder(typeof(WebApiDataSourceRequestModelBinder))]DataSourceRequest request)
        {
            return db.Products.ToDataSourceResult(request);
        }

        // GET api/GridEditingWebApiProduct/5
        public GridEditingWebApiProduct GetProduct(int id)
        {
            GridEditingWebApiProduct product = db.Products.Find(id);
            if (product == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return product;
        }

        // PUT api/GridEditingWebApiProduct/PutProduct/5
        public HttpResponseMessage PutProduct(int id, GridEditingWebApiProduct product)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != product.ProductID)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/GridEditingWebApiProduct/PostProduct
        public HttpResponseMessage PostProduct(GridEditingWebApiProduct product)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();

                DataSourceResult result = new DataSourceResult
                {
                    Data = new[] { product },
                    Total = 1
                };
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, result);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = product.ProductID }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/GridEditingWebApiProduct/DeleteProduct/5
        public HttpResponseMessage DeleteProduct(int id)
        {
            GridEditingWebApiProduct product = db.Products.Find(id);
            if (product == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Products.Remove(product);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, product);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}