using SalesHub.Core.Models;
using SalesHub.Core.Repositories;
using System.Data.Entity;

namespace SalesHub.Data
{
    public class SalesHubDbContext : DbContext, ISalesHubDbContext
    {
        public IDbSet<User> Users { get; set; }
        public IDbSet<SellingCompany> SellingCompanies { get; set; }
        public IDbSet<Customer> Customers { get; set; }
        public IDbSet<Order> Orders { get; set; }
        public IDbSet<OrderDetail> OrderDetails { get; set; }
        public IDbSet<PaymentTerm> PaymentTerms { get; set; }
        public IDbSet<PaymentTermType> PaymentTermTypes { get; set; }
        public IDbSet<CurrencyType> CurrencyTypes { get; set; }
        public IDbSet<OrderNote> OrderNotes { get; set; }
        public IDbSet<PackageType> PackageTypes { get; set; }

        public void DisableProxies()
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public void TruncateData()
        {
            this.Database.ExecuteSqlCommand(@"
                UPDATE Orders SET PaymentTerm1_PaymentTermId = NULL
                UPDATE Orders SET PaymentTerm2_PaymentTermId = NULL;
                DELETE FROM dbo.UserSellingCompanies
                DELETE FROM dbo.OrderNotes
                DBCC CHECKIDENT ('dbo.OrderNotes', RESEED, 0);
                DELETE FROM dbo.OrderDetails
                DBCC CHECKIDENT ('dbo.OrderDetails', RESEED, 0);
                DELETE FROM dbo.PaymentTerms
                DBCC CHECKIDENT ('dbo.PaymentTerms', RESEED, 0);
                DELETE FROM dbo.PaymentTermTypes
                DBCC CHECKIDENT ('dbo.PaymentTermTypes', RESEED, 0);
                DELETE FROM dbo.Orders
                DBCC CHECKIDENT ('dbo.Orders', RESEED, 0);
                DELETE FROM dbo.Customers
                DBCC CHECKIDENT ('dbo.Customers', RESEED, 0);
                DELETE FROM dbo.SellingCompanies
                DBCC CHECKIDENT ('dbo.SellingCompanies', RESEED, 0);
                DELETE FROM dbo.Users
                DBCC CHECKIDENT ('dbo.Users', RESEED, 0);
                DELETE FROM dbo.CurrencyTypes
                DBCC CHECKIDENT ('dbo.CurrencyTypes', RESEED, 0);
                DELETE FROM dbo.PackageTypes
                DBCC CHECKIDENT ('dbo.PackageTypes', RESEED, 0);
            ");
        }
    }
}