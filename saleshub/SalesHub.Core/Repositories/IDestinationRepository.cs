using System.Linq;

namespace SalesHub.Core.Repositories
{
    public interface IDestinationRepository
    {
        IQueryable<string> GetAllDestinations();
    }
}