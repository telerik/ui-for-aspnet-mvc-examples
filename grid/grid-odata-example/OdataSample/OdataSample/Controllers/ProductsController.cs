using AutoMapper;
using OdataSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.OData;

namespace OdataSample.Controllers
{
    public class ProductsController : ODataController
    {
        NorthwindEntities db = new NorthwindEntities();

        [EnableQuery]
        public IHttpActionResult Get()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Product, ProductDTO>();
            });

            var mapper = config.CreateMapper();

            return Ok(db.Products);
        }

        public async Task<IHttpActionResult> Post(Product dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Products.Add(dto);
            await db.SaveChangesAsync();
            return Created(dto);
        }

        public async Task<IHttpActionResult> Put([FromODataUri] int key, [FromBody] Product entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (key != entity.ProductID)
            {
                return BadRequest("The key from the url must match the key of the entity in the body");
            }

            var originalProduct = await db.Products.FindAsync(key);

            if (originalProduct == null)
            {
                return NotFound();
            }
            else
            {

                db.Entry(originalProduct).CurrentValues.SetValues(entity);
                await db.SaveChangesAsync();
            }

            return Updated(entity);
        }

        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Product> patch)
        {
            object id;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (patch.TryGetPropertyValue("Id", out id) && (int)id != key)
            {
                return BadRequest("The key from the url must match the key of the entity in the body");
            }

            Product originalEntity = await db.Products.FindAsync(key);

            if (originalEntity == null)
            {
                return NotFound();
            }
            else
            {
                patch.Patch(originalEntity);
                await db.SaveChangesAsync();
            }

            return Updated(originalEntity);
        }


        public async Task<IHttpActionResult> Delete([FromODataUri]int key)
        {
            Product entity = await db.Products.FindAsync(key);

            if (entity == null)
            {
                return NotFound();
            }
            else
            {
                db.Products.Remove(entity);
                await db.SaveChangesAsync();
                return StatusCode(HttpStatusCode.NoContent);
            }
        }


        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}