The steps below describe how you can bind the Grid to OData v4 and enable editing.


1. Enable **Batch()** mode and set **Type** to "odata-v4". Also ensure to set Custom() mode and server operations. 

    ###### Example

    ```
    .DataSource(dataSource => dataSource
        .Custom()
        .Batch(true)
        .Type("odata-v4")
        .PageSize(20)
        .ServerPaging(true)
        .ServerSorting(true)
    )
    ```

1. Configure the Schema with the handlers for CRUD operations. 

    ###### Example

    ```
    .DataSource(dataSource => dataSource
        .Custom()
        .Batch(true)
        .Type("odata-v4")
        .Schema(schema => schema
            .Model(m =>
            {
                m.Id(t => t.ProductID);
                m.Field(t => t.ProductID).Editable(false);
                m.Field(t => t.ProductName);
                m.Field(t => t.QuantityPerUnit);
                m.Field(t => t.UnitPrice);
                m.Field(t => t.UnitsInStock);
                m.Field(t => t.UnitsOnOrder);
                m.Field(t => t.Discontinued);
            }))
        .Transport(t =>
        {
            t.Read(new { url = new Kendo.Mvc.ClientHandlerDescriptor() { HandlerName = "read" } });
            t.Update(new { url = new Kendo.Mvc.ClientHandlerDescriptor() { HandlerName = "update" } });
            t.Create(new { url = new Kendo.Mvc.ClientHandlerDescriptor() { HandlerName = "create" } });
            t.Destroy(new { url = new Kendo.Mvc.ClientHandlerDescriptor() { HandlerName = "destroy" } });
            t.Batch(new { url = new Kendo.Mvc.ClientHandlerDescriptor() { HandlerName = "batch" } });
        })
        .PageSize(20)
        .ServerPaging(true)
        .ServerSorting(true)
    )
    ```

1. The handlers will call the respective method in the service:

    ###### Example

    ```
    function batch() {
        return "http://localhost:54339/odata/$batch";
    }
    function read() {
        return "http://localhost:54339/odata/Products";
    }
    function update(dataItem) {
        return "http://localhost:54339/odata/Products(" + dataItem.ProductID + ")";
    }
    function create(dataItem) {
        delete dataItem.ProductID;
        dataItem.Tags = [];
        return "http://localhost:54339/odata/Products";
    }
    function destroy(dataItem) {
        return "http://localhost:54339/odata/Products(" + dataItem.ProductID + ")";
    }
    ```

1. The service used in the example is available below.

    ###### Example

    ```
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
    ```
