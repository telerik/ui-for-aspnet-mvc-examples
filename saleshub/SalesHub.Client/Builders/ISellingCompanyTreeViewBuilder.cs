using SalesHub.Client.ViewModels;
using SalesHub.Core.Models;

namespace SalesHub.Client.Builders
{
    public interface ISellingCompanyTreeViewBuilder
    {
        SellingCompanyTreeViewRoot BuildTreeViewForUser(User user);
    }
}