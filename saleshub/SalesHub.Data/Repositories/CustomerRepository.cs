using System.Collections.Generic;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public CustomerRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public Customer GetCustomerById(int id)
        {
            return _salesHubDbContext.Customers.SingleOrDefault(x => x.CustomerId == id);
        }

        public IList<Customer> GetCustomersForSellingCompany(int sellingCompanyId)
        {
            return _salesHubDbContext.Customers.Where(x => x.SellingCompany.SellingCompanyId == sellingCompanyId).ToList();
        }
    }
}