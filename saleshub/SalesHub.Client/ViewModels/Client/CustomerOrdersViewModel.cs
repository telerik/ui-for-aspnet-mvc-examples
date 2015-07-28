using System.Collections.Generic;
using SalesHub.Client.ViewModels.Api;

namespace SalesHub.Client.ViewModels.Client
{
    public class CustomerOrdersViewModel
    {
        public int Total { get; set; }

        public IEnumerable<CustomerOrderViewModel> Data { get; set; }
    }
}