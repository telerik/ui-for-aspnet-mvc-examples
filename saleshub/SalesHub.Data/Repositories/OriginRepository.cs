using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class OriginRepository : IOriginRepository
    {
        public IQueryable<string> GetAllOrigins()
        {
            return new[] {
                "France",
                "Germany",
                "USA",
                "Spain"
            }.AsQueryable();
        }
    }
}
