using SalesHub.Core.Models;
using System.Data.Entity;

namespace SalesHub.Core.Repositories
{
    public interface ISalesHubDbContext
    {
        void DisableProxies();

        IDbSet<User> Users { get; set; }

        IDbSet<SellingCompany> SellingCompanies { get; set; }

        IDbSet<Customer> Customers { get; set; }
        IDbSet<Order> Orders { get; set; }
        IDbSet<OrderDetail> OrderDetails { get; set; }
        IDbSet<PaymentTerm> PaymentTerms { get; set; }
        IDbSet<PaymentTermType> PaymentTermTypes { get; set; }
        IDbSet<CurrencyType> CurrencyTypes { get; set; }
        IDbSet<OrderNote> OrderNotes { get; set; }
        IDbSet<PackageType> PackageTypes { get; set; }

        int SaveChanges();
    }
}