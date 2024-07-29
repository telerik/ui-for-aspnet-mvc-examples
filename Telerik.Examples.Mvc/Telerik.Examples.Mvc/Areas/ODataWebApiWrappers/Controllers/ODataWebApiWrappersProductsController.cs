using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Threading.Tasks;
using Telerik.Examples.Mvc.Areas.ODataWebApiWrappers.Models;
using Microsoft.AspNet.OData;

namespace Telerik.Examples.Mvc.Areas.ODataWebApiWrappers.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using OdataTest.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Product>("Products");
    builder.EntitySet<Employee>("Categories"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */

    public class ODataWebApiWrappersProductsController : ODataController
    {
        private ODataWebApiWrappersEntities db = new ODataWebApiWrappersEntities();

        // GET: odata/ODataWebApiWrappersProducts
        [EnableQuery]
        public IQueryable<ODataWebApiWrappersProduct> GetProducts()
        {
            return db.Products;
        }

        // PUT: odata/ODataWebApiWrappersProducts(5)
        public IHttpActionResult Put([FromODataUri] int key, ODataWebApiWrappersProduct product)
        {   
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != product.ProductID)
            {
                return BadRequest();
            }

            db.Products.Attach(product);
            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(product);
        }

        public IHttpActionResult Post(ODataWebApiWrappersProduct product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Products.Add(product);
            //db.SaveChanges();
            return Created(product);
        }

        private bool ProductExists(int key)
        {
            return db.Products.Count(e => e.ProductID == key) > 0;
        }
    }
}
