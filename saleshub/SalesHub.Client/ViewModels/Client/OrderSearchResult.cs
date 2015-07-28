using System;
using System.Linq;

namespace SalesHub.Client.ViewModels.Client
{
    public class OrderSearchResult
    {
        public int OrderId { get; set; }
        public string OrderNumber { get; set; }
        public string SellingCompany { get; set; }
        public string Customer { get; set; }
    }
} 