using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;
using SalesHub.Data.Repositories;

namespace SalesHub.Data
{
    public class SalesHubDbInitializer : CreateDatabaseIfNotExists<SalesHubDbContext>
    {
        private readonly Random _random = new Random();
        private readonly IOriginRepository _originRepository = new OriginRepository();

        public void Reseed(SalesHubDbContext context)
        {
            this.Seed(context);
        }

        protected override void Seed(SalesHubDbContext context)
        {
            base.Seed(context);

            User user = new User
            {
                UserId = 1,
                UserName = "test",
                FullName = "John Smith",
                PhoneNumber = "Something",
                EmailAddress = "test@test.com"
            };

            SellingCompany sellingCompany = new SellingCompany
            {
                CompanyName = "Goods Selling Company",
                Abbreviation = "GSC",
                ManagedBy = new List<User>
                {
                    user
                }
            };

            CurrencyType currencyType = new CurrencyType
                {
                    CurrencyName = "USD"
                };
            context.CurrencyTypes.Add(currencyType);

            context.SellingCompanies.Add(sellingCompany);

            user.SellingCompanies = new List<SellingCompany> { sellingCompany };
            context.Users.Add(user);

            context.SaveChanges();

            GeneratePackageTypes(context);
            GeneratePaymentTermTypes(context);

            context.SaveChanges();

            GenerateCustomersForCompany(sellingCompany, context);

            context.SaveChanges();
        }
  
        private void GeneratePaymentTermTypes(SalesHubDbContext context)
        {
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 1, Name = "After Arrival" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 2, Name = "After Arrival & Inspection" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 3, Name = "After B/L Date" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 4, Name = "After Invoice Date" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 5, Name = "Against Packing" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 6, Name = "Against Receipt of Documents" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 7, Name = "Inter-company" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 8, Name = "On Due Date" });
            context.PaymentTermTypes.Add(new PaymentTermType { PaymentTermTypeId = 9, Name = "Prepayment" });
        }

        private void GenerateCustomersForCompany(SellingCompany sellingCompany, SalesHubDbContext context)
        {
            Tuple<string, string>[] customerSeedData = new[]
            {
                new Tuple<string, string>("Blauer See Delikatessen", "Europe"),
                new Tuple<string, string>("Bottom-Dollar Markets", "North America"),
                new Tuple<string, string>("Chop-suey Chinese", "North America"),
                new Tuple<string, string>("Godos Cocina Típica", "South America"),
                new Tuple<string, string>("Lazy K Kountry Store", "North America"),
                new Tuple<string, string>("Let's Stop N Shop", "North America"),
                new Tuple<string, string>("Santé Gourmet", "Europe"),
                new Tuple<string, string>("Save-a-lot Markets", "North America"),
                new Tuple<string, string>("Suprêmes délices", "Europe"),
                new Tuple<string, string>("The Big Cheese", "North America"),
                new Tuple<string, string>("The Cracker Box", "North America"),
                new Tuple<string, string>("Okudacho Sushi", "Asia"),
                new Tuple<string, string>("Oyucho Japanese Cuisine", "Asia"),
                new Tuple<string, string>("LuLu Hypermarket", "Middle East")
            };

            var customers = new List<Customer>();
            foreach (var customerData in customerSeedData)
            {
                var customer = new Customer
                {
                    CustomerName = customerData.Item1,
                    Region = customerData.Item2,
                    SellingCompany = sellingCompany,
                    Orders = new List<Order>()
                };

                customers.Add(customer);
                context.Customers.Add(customer);
            }
            context.SaveChanges();

            var orders = new List<Order>();
            foreach (var customer in customers)
            {
                orders.AddRange(GenerateOrdersForCustomer(customer, context));
            }
            context.SaveChanges();

            var origins = _originRepository.GetAllOrigins().ToList();
            foreach (var order in orders)
            {
                var orderDetails = GenerateOrderDetailsForOrder(order, context, origins);

                order.ContractAmount = orderDetails.Sum(od => od.PricePerUnitOfWeight * od.Units);
                order.ContractWeight = orderDetails.Sum(od => od.Units * od.UnitWeight);
            }
            context.SaveChanges();
        }

        private IEnumerable<Order> GenerateOrdersForCustomer(Customer customer, SalesHubDbContext context)
        {
            int orderCount = _random.Next(10, 20);

            for (int i = 0; i < orderCount; ++i)
            {
                var paymentTerm = new PaymentTerm
                {
                    SplitPercentage = 1m,
                    PaymentTermType = context.PaymentTermTypes.First()
                };

                context.PaymentTerms.Add(paymentTerm);

                var order = new Order
                {
                    ContractAmount = _random.Next(100, 1000000),
                    ContractWeight = _random.Next(10, 1000000),
                    ContractCurrencyTypeId = 0,
                    Customer = customer,
                    PaymentTerm1 = paymentTerm,
                    IsActive = true,
                    UnitOfWeight = customer.Region == "North America" ? UnitOfWeight.Pounds : UnitOfWeight.Kilograms,
                    OrderDate = DateTime.Today,
                    OrderNumber = "Order - " + i,
                };

                customer.Orders.Add(order);
                context.Orders.Add(order);

                yield return order;
            }
        }

        private List<OrderDetail> GenerateOrderDetailsForOrder(Order order, SalesHubDbContext context, IList<string> origins)
        {
            var orderDetails = new List<OrderDetail>();
            var numToGenerate = _random.Next(2, 10);
            int originIndex = _random.Next(0, origins.Count);
            for (int i = 0; i < numToGenerate; i++)
            {
                var orderDetail = new OrderDetail
                {
                    Origin = origins[originIndex],
                    PricePerUnitOfWeight = _random.Next(4, 100),
                    CropYear = _random.Next(2002, 2013),
                    Destination = "",
                    LotNumber = "",
                    OrderId = order.OrderId,
                    PackageTypeId = _random.Next(1, context.PackageTypes.Count()),
                    UnitWeight = _random.Next(10, 20),
                    Units = _random.Next(2000, 6000),
                    ValueDate = DateTime.Now.AddDays(_random.Next(2, 19))
                };
                orderDetail.NetWeight = orderDetail.UnitWeight * orderDetail.Units;
                orderDetails.Add(orderDetail);
                context.OrderDetails.Add(orderDetail);
            }
            return orderDetails;
        }

        private void GeneratePackageTypes(SalesHubDbContext context)
        {
            context.PackageTypes.Add(new PackageType { PackageTypeId = 1, Name = "Cases" });
            context.PackageTypes.Add(new PackageType {PackageTypeId = 2, Name = "Bales"});
            context.PackageTypes.Add(new PackageType {PackageTypeId = 3, Name = "Hogsheads"});
            context.PackageTypes.Add(new PackageType { PackageTypeId = 4, Name = "Bags" });
            context.SaveChanges();
        }
    }
}
