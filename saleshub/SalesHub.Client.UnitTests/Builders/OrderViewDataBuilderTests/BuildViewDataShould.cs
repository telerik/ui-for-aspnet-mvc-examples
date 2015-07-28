using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using NUnit.Framework;
using SalesHub.Client.Builders;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;
using Telerik.JustMock;

namespace SalesHub.Client.UnitTests.Builders.OrderViewDataBuilderTests
{
    [TestFixture]
    public class BuildViewDataShould
    {
        private IOriginRepository _mockOriginRepository;
        private IDestinationRepository _mockDestinationRepository;
        private IPackageTypeSelectListBuilder _mockPackageTypeSelectListBuilder;

        [TestFixtureSetUp]
        public void SetUp()
        {
            _mockOriginRepository = Mock.Create<IOriginRepository>();
            _mockDestinationRepository = Mock.Create<IDestinationRepository>();
            _mockPackageTypeSelectListBuilder = Mock.Create<IPackageTypeSelectListBuilder>();
        }

        [TestCase]
        public void BuildsAListOfNameValueObjectsBasedOnOrigins()
        {
            var viewDataDictionary = new ViewDataDictionary();
            var order = new Order();
            
            var origins = new List<string>
            {
                "Test Origin 1",
                "Test Origin 2"
            };

            Mock.Arrange(() => _mockOriginRepository.GetAllOrigins()).Returns(origins.AsQueryable()).OccursOnce();
            Mock.Arrange(() => _mockDestinationRepository.GetAllDestinations()).Returns(new string[0].AsQueryable());

            var builder = new OrderViewDataBuilder(_mockOriginRepository, _mockDestinationRepository, _mockPackageTypeSelectListBuilder);

            builder.BuildViewData(viewDataDictionary, order);

            Mock.AssertAll(_mockOriginRepository);
            var result = viewDataDictionary["Origins"];
            Assert.IsNotNull(result);
            var resultList = ((IEnumerable<dynamic>) result).ToList();
            Assert.AreEqual(2, resultList.Count());

            Assert.AreEqual("Test Origin 1", resultList[0].Name);
            Assert.AreEqual("Test Origin 1", resultList[0].Value);
            
            Assert.AreEqual("Test Origin 2", resultList[1].Name);
            Assert.AreEqual("Test Origin 2", resultList[1].Value);
        }

        [TestCase]
        public void SetTheCustomerKeyInTheViewData()
        {
            var viewDataDictionary = new ViewDataDictionary();
            var order = new Order
                {
                    Customer = new Customer
                        {
                            CustomerId = 120
                        }
                };

            Mock.Arrange(() => _mockOriginRepository.GetAllOrigins()).Returns(new string[0].AsQueryable());
            Mock.Arrange(() => _mockDestinationRepository.GetAllDestinations()).Returns(new string[0].AsQueryable());

            var builder = new OrderViewDataBuilder(_mockOriginRepository, _mockDestinationRepository,
                                                   _mockPackageTypeSelectListBuilder);

            builder.BuildViewData(viewDataDictionary, order);

            Customer customer = (Customer) viewDataDictionary["Customer"];
            Assert.AreEqual(order.Customer, customer);
        }

        [TestCase]
        public void SetPackageTypeKeyInTheViewData()
        {
            var viewDataDictionary = new ViewDataDictionary();
            var order = new Order();
            var packageTypes = new List<SelectListItem>
                {
                    new SelectListItem
                        {
                            Text = "Test Item",
                            Value = "Test Value"
                        }
                };

            Mock.Arrange(() => _mockOriginRepository.GetAllOrigins()).Returns(new string[0].AsQueryable());
            Mock.Arrange(() => _mockDestinationRepository.GetAllDestinations()).Returns(new string[0].AsQueryable());
            Mock.Arrange(() => _mockPackageTypeSelectListBuilder.BuildSelectList()).Returns(packageTypes).OccursOnce();

            var builder = new OrderViewDataBuilder(_mockOriginRepository, _mockDestinationRepository,
                                                   _mockPackageTypeSelectListBuilder);

            builder.BuildViewData(viewDataDictionary, order);

            var result = (IList<SelectListItem>) viewDataDictionary["PackageTypes"];

            Mock.AssertAll(_mockPackageTypeSelectListBuilder);

            Assert.AreEqual(packageTypes, result);
        }

        [TestCase]
        public void SetDestinationsKeyInTheViewData()
        {
            var viewDataDictionary = new ViewDataDictionary();
            var order = new Order();

            var destinations = new List<string> {"Test Destination"};

            Mock.Arrange(() => _mockOriginRepository.GetAllOrigins()).Returns(new string[0].AsQueryable());
            Mock.Arrange(() => _mockDestinationRepository.GetAllDestinations()).Returns(destinations.AsQueryable()).OccursOnce();
            Mock.Arrange(() => _mockPackageTypeSelectListBuilder.BuildSelectList()).Returns(new List<SelectListItem>());

            var builder = new OrderViewDataBuilder(_mockOriginRepository, _mockDestinationRepository,
                                                   _mockPackageTypeSelectListBuilder);

            builder.BuildViewData(viewDataDictionary, order);

            var result = ((IEnumerable<dynamic>) viewDataDictionary["Destinations"]).ToList();

            Mock.AssertAll(_mockDestinationRepository);

            Assert.AreEqual("Test Destination", result[0].Name);
            Assert.AreEqual("Test Destination", result[0].Value);
        }
    }
}
