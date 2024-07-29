using Telerik.Examples.Mvc.Areas.ODataWebApiWrappers.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Microsoft.AspNet.OData;

namespace Telerik.Examples.Mvc.Areas.ODataWebApiWrappers.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using OdataTest.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Employee>("Employees");
    builder.EntitySet<Employee>("Employees"); 
    config.Routes.MapODataRoute("odata", "odata", builder.GetEdmModel());
    */

    public class ODataWebApiWrappersEmployeesController : ODataController
    {
        private ODataWebApiWrappersEntities db = new ODataWebApiWrappersEntities();

        // GET: odata/ODataWebApiWrappersEmployees
        [EnableQuery]
        public IQueryable<ODataWebApiWrappersEmployee> GetEmployees()
        {
            return db.Employees;
        }

        // PUT: odata/ODataWebApiWrappersEmployees(5)
        public IHttpActionResult Put([FromODataUri] int key, ODataWebApiWrappersEmployee employee)
        {   
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != employee.EmployeeID)
            {
                return BadRequest();
            }

            db.Employees.Attach(employee);
            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(employee);
        }

        private bool EmployeeExists(int key)
        {
            return db.Employees.Count(e => e.EmployeeID == key) > 0;
        }
    }
}
