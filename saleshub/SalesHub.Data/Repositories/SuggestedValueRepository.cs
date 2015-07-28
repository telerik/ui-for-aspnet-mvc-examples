using System.Collections.Generic;
using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class SuggestedValueRepository : ISuggestedValueRepository
    {
        public IQueryable<SuggestedValue> GetAllSuggestedValues()
        {
            return new List<SuggestedValue> {
                new SuggestedValue {
                    Value = "Cash against documents"
                },
                new SuggestedValue {
                    Value = "Cash against documents, payment immediate"
                }
            }.AsQueryable();
        }
    }
}
