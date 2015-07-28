using System.Web.Mvc;
using SalesHub.Core.Models;

namespace SalesHub.Client.Builders
{
    public interface IOrderViewDataBuilder
    {
        void BuildViewData(ViewDataDictionary viewDataDictionary, Order order);
    }
}