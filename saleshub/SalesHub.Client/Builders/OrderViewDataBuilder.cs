using System.Linq;
using System.Web.Mvc;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Builders
{
    public class OrderViewDataBuilder : IOrderViewDataBuilder
    {
        private readonly IOriginRepository _originRepository;
        private readonly IDestinationRepository _destinationRepository;
        private readonly IPackageTypeSelectListBuilder _packageTypeSelectListBuilder;

        public OrderViewDataBuilder(IOriginRepository originRepository,
                                    IDestinationRepository destinationRepository,
                                    IPackageTypeSelectListBuilder packageTypeSelectListBuilder)
        {
            _originRepository = originRepository;
            _destinationRepository = destinationRepository;
            _packageTypeSelectListBuilder = packageTypeSelectListBuilder;
        }

        public void BuildViewData(ViewDataDictionary viewDataDictionary, Order order)
        {
            viewDataDictionary.Add("Origins", _originRepository.GetAllOrigins().Select(o => new { Name = o, Value = o }));
            viewDataDictionary.Add("Customer", order.Customer);
            viewDataDictionary.Add("PackageTypes", _packageTypeSelectListBuilder.BuildSelectList());
            viewDataDictionary.Add("Destinations", _destinationRepository.GetAllDestinations().Select(d => new { Name = d, Value = d }));
        }
    }
}