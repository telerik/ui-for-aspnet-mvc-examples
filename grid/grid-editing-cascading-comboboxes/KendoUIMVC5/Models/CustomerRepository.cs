using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class CustomerRepository
    {
        public static CustomerRepository Repository = new CustomerRepository();

        public IEnumerable<Customer> Customers
        {
            get
            {
                IEnumerable<Customer> result = (IEnumerable<Customer>)HttpContext.Current.Session["Customers"];

                if (result == null)
                {
                    HttpContext.Current.Session["Customers"] = result = GenerateCustomers();
                }

                return result;
            }
        }

        private IEnumerable<Customer> GenerateCustomers()
        {
            var list = new List<Customer>();

            for (var i = 1; i < 6; i++)
            {
                list.Add(new Customer
                {
                    CustomerId = i,
                    CustomerName = "Customer" + i
                });
            }

            return list;
        }
    }
}