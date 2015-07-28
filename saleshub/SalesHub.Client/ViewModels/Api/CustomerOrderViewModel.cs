using System;
using System.Linq;

namespace SalesHub.Client.ViewModels.Api
{
    public class CustomerOrderViewModel
    {
        public int OrderId { get; set; }
        public decimal Weight { get; set; }
        public decimal Value { get; set; }
        public string OrderNumber { get; set; }
        public bool IsActive { get; set; }
        public DateTime OrderDate { get; set; }
        public bool IsInKilograms { get; set; }
    }
}