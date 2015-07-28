using System.Collections.Generic;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface ICurrencyTypeRepository
    {
        IList<CurrencyType> GetAllCurrencyTypes();
    }
}