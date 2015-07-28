using System.Collections.Generic;
using System.Linq;
using SalesHub.Client.ViewModels;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Builders
{
    public class SellingCompanyTreeViewBuilder : ISellingCompanyTreeViewBuilder
    {
        private readonly ICustomerRepository _customerRepository;

        public SellingCompanyTreeViewBuilder(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public SellingCompanyTreeViewRoot BuildTreeViewForUser(User user)
        {
            var sellingCompaniesForUser = user.SellingCompanies;

            var treeViewRoot = new SellingCompanyTreeViewRoot
            {
                Items = new List<SellingCompanyTreeViewItem>()
            };

            foreach (var sellingCompany in sellingCompaniesForUser)
            {
                treeViewRoot.Items.Add(BuildTreeViewForCompany(sellingCompany));
            }

            return treeViewRoot;
        }

        private SellingCompanyTreeViewItem BuildTreeViewForCompany(SellingCompany sellingCompany)
        {
            var treeViewItem = new SellingCompanyTreeViewItem
                {
                    Text = sellingCompany.CompanyName,
                    Expanded = true,
                    Items = new List<SellingCompanyTreeViewItem>()
                };

            var customersForCompany = _customerRepository.GetCustomersForSellingCompany(sellingCompany.SellingCompanyId)
                .GroupBy(c => c.Region)
                .OrderBy(c => c.Key);

            foreach (var grouping in customersForCompany)
            {
                treeViewItem.Items.Add(BuildTreeViewItemForCustomerGrouping(sellingCompany, grouping.Key, grouping.ToList()));
            }
            return treeViewItem;
        }

        private SellingCompanyTreeViewItem BuildTreeViewItemForCustomerGrouping(SellingCompany sellingCompany, string groupName,
                                                                                IEnumerable<Customer> customers)
        {
            var treeViewItem = new SellingCompanyTreeViewItem
                {
                    Text = groupName,
                    Items = new List<SellingCompanyTreeViewItem>()
                };

            foreach (var customer in customers)
            {
                treeViewItem.Items.Add(new SellingCompanyTreeViewItem
                {
                    CustomerId = customer.CustomerId,
                    Text = customer.CustomerName
                });
            }

            return treeViewItem;
        }
    }
}