using System;
using NUnit.Framework;
using SalesHub.Client.Converters;
using SalesHub.Core.Models;

namespace SalesHub.Client.UnitTests.Converters.OrderViewModelConverterTests
{
    [TestFixture]
    public class ConvertShould
    {
        [TestCase]
        public void CopyThePropertiesFromTheOrderIntoTheViewModel()
        {
            Order order = new Order
                {
                    OrderId = 100,
                    OrderNumber = "Test Order",
                    ContractWeight = 100m,
                    ContractAmount = 100m,
                    OrderDate = DateTime.Now,
                    IsActive = true,
                    ContractCurrencyTypeId = 10,
                    CustomerId = 12,
                    PaymentTerm1 = new PaymentTerm(),
                    PaymentTerm2 = new PaymentTerm(),
                    PaymentTermsOverride = "Test override",
                    IntentComments = "Intent comment",
                    InvoiceComments = "Invoice comment",
                    FooterComments = "Footer comment",
                    HeaderComments = "Header comment"
                };

            OrderViewModelConverter converter = new OrderViewModelConverter();

            var result = converter.Convert(order);

            Assert.IsNotNull(result);
            Assert.AreEqual(order.OrderId, result.OrderId);
            Assert.AreEqual(order.OrderNumber, result.OrderNumber);
            Assert.AreEqual(order.ContractAmount, result.ContractAmount);
            Assert.AreEqual(order.ContractWeight, result.ContractWeight);
            Assert.AreEqual(order.OrderDate, result.OrderDate);
            Assert.AreEqual(order.IsActive, result.IsActive);
            Assert.AreEqual(order.ContractCurrencyTypeId, result.CurrencyTypeId);
            Assert.AreEqual(order.CustomerId, result.CustomerId);
            Assert.AreEqual(order.PaymentTermsOverride, result.PaymentTermsOverride);
            Assert.AreEqual(order.PaymentTerm1, result.PaymentTerm1.PaymentTerm);
            Assert.AreEqual(order.PaymentTerm2, result.PaymentTerm2.PaymentTerm);
            Assert.AreEqual(order.IntentComments, result.IntentComments);
            Assert.AreEqual(order.InvoiceComments, result.InvoiceComments);
            Assert.AreEqual(order.FooterComments, result.FooterComments);
            Assert.AreEqual(order.HeaderComments, result.HeaderComments);
        }
    }
}