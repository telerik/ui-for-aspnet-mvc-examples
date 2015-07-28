using System.Linq;

namespace SalesHub.Core.Repositories
{
    public interface IOriginRepository
    {
        IQueryable<string> GetAllOrigins();
    }
}