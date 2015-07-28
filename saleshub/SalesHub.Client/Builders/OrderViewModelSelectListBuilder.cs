using SalesHub.Client.ViewModels.Client;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Builders
{
    public class OrderViewModelSelectListBuilder : IOrderViewModelSelectListBuilder
    {
        private readonly IPaymentTermTypeRepository _paymentTermTypeRepository;
        private readonly ICurrencyTypeRepository _currencyTypeRepository;
        private readonly IPackageTypeRepository _packageTypeRepository;
        private readonly ICurrencyTypeSelectListBuilder _currencyTypeSelectListBuilder;
        private readonly IPaymentTermTypeSelectListBuilder _paymentTermTypeSelectListBuilder;
        private readonly ICreditTermDurationSelectListBuilder _creditTermDurationSelectListBuilder;
        private readonly ISplitPercentagesSelectListBuilder _splitPercentagesSelectListBuilder;

        public OrderViewModelSelectListBuilder(IPaymentTermTypeRepository paymentTermTypeRepository,
                                               ICurrencyTypeRepository currencyTypeRepository,
                                               IPackageTypeRepository packageTypeRepository,
                                               ICurrencyTypeSelectListBuilder currencyTypeSelectListBuilder,
                                               IPaymentTermTypeSelectListBuilder paymentTermTypeSelectListBuilder,
                                               ICreditTermDurationSelectListBuilder creditTermDurationSelectListBuilder,
                                               ISplitPercentagesSelectListBuilder splitPercentagesSelectListBuilder)
        {
            _paymentTermTypeRepository = paymentTermTypeRepository;
            _currencyTypeRepository = currencyTypeRepository;
            _packageTypeRepository = packageTypeRepository;
            _currencyTypeSelectListBuilder = currencyTypeSelectListBuilder;
            _paymentTermTypeSelectListBuilder = paymentTermTypeSelectListBuilder;
            _creditTermDurationSelectListBuilder = creditTermDurationSelectListBuilder;
            _splitPercentagesSelectListBuilder = splitPercentagesSelectListBuilder;
        }

        public void BuildSelectListsForOrderViewModel(OrderViewModel orderViewModel)
        {
            var creditTermDurations = _creditTermDurationSelectListBuilder.BuildSelectList();
            var paymentTermTypes = _paymentTermTypeSelectListBuilder.BuildSelectList(_paymentTermTypeRepository.GetAllPaymentTermTypes());
            var splitPercentages = _splitPercentagesSelectListBuilder.BuildSelectList();

            orderViewModel.CurrencyTypesSelectList = _currencyTypeSelectListBuilder.BuildSelectListItemsForCurrencyTypes(_currencyTypeRepository.GetAllCurrencyTypes());
            orderViewModel.PaymentTerm1.PaymentTermTypes = paymentTermTypes;
            orderViewModel.PaymentTerm2.PaymentTermTypes = paymentTermTypes;
            orderViewModel.PaymentTerm1.CreditTermDurations = creditTermDurations;
            orderViewModel.PaymentTerm2.CreditTermDurations = creditTermDurations;
            orderViewModel.PaymentTerm1.SplitPercentages = splitPercentages;
            orderViewModel.PaymentTerm2.SplitPercentages = splitPercentages;
        }
    }
}