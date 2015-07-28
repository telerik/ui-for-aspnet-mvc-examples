using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using SalesHub.Client.Builders;
using SalesHub.Core.Models;

namespace SalesHub.Client.UnitTests.Builders.CurrencyTypeSelectListBuilderTests
{
    [TestFixture]
    public class BuildSelectListItemsForCurrencyTypesShould
    {
        [TestCase]
        public void ReturnAnEmptyListIfThereWereNoCurrencyTypes()
        {
            var currencyTypes = new List<CurrencyType>();

            var selectListBuilder = new CurrencyTypeSelectListBuilder();

            var result = selectListBuilder.BuildSelectListItemsForCurrencyTypes(currencyTypes);

            Assert.IsEmpty(result);
        }

        [TestCase]
        public void ReturnAListOfSelectListItemsBasedOnTheCurrencyTypes()
        {
            var currencyTypes = new List<CurrencyType>
                {
                    new CurrencyType
                        {
                            CurrencyName = "Test 1",
                            CurrencyTypeId = 1
                        },
                    new CurrencyType
                        {
                            CurrencyName = "Test 2",
                            CurrencyTypeId = 2
                        }
                };

            var selectListBuilder = new CurrencyTypeSelectListBuilder();

            var result = selectListBuilder.BuildSelectListItemsForCurrencyTypes(currencyTypes).ToList();

            Assert.AreEqual(currencyTypes.Count, result.Count);
            Assert.AreEqual(currencyTypes[0].CurrencyName, result[0].Text);
            Assert.AreEqual(currencyTypes[0].CurrencyTypeId.ToString(), result[0].Value);
            Assert.AreEqual(currencyTypes[1].CurrencyName, result[1].Text);
            Assert.AreEqual(currencyTypes[1].CurrencyTypeId.ToString(), result[1].Value);
        }
    }
}