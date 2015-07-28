using System.Collections.Generic;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface ICustomerRepository
    {
        Customer GetCustomerById(int id);
        IList<Customer> GetCustomersForSellingCompany(int sellingCompanyId);
    }
}