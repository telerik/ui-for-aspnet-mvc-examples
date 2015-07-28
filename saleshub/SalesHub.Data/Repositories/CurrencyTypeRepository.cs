using System.Collections.Generic;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class CurrencyTypeRepository : ICurrencyTypeRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public CurrencyTypeRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public IList<CurrencyType> GetAllCurrencyTypes()
        {
            return _salesHubDbContext.CurrencyTypes.ToList();
        }
    }
}