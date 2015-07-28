using System.Linq;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface ISuggestedValueRepository
    {
        IQueryable<SuggestedValue> GetAllSuggestedValues();
    }
}