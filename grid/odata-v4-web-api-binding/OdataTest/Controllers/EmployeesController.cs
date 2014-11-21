using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Query;
using OdataTest.Models;

namespace OdataTest.Controllers
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

    public class EmployeesController : ODataController
    {
        private NorthwindEntities db = new NorthwindEntities();

        // GET: odata/Employees
        [EnableQuery]
        public IQueryable<Employee> GetEmployees()
        {
            return db.Employees;
        }

        // PUT: odata/Employees(5)
        public IHttpActionResult Put([FromODataUri] int key, Employee test)
        {   
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Employee Employee = db.Employees.Find(key);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (key != Employee.EmployeeID)
            {
                return BadRequest();
            }

            db.Entry(Employee).State = EntityState.Modified;

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

            return Updated(Employee);
        }

        private bool EmployeeExists(int key)
        {
            return db.Employees.Count(e => e.EmployeeID == key) > 0;
        }
    }
}
