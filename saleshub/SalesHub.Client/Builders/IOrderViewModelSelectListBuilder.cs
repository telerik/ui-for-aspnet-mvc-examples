using SalesHub.Client.ViewModels.Client;

namespace SalesHub.Client.Builders
{
    public interface IOrderViewModelSelectListBuilder
    {
        void BuildSelectListsForOrderViewModel(OrderViewModel orderViewModel);
    }
}