using System.Linq;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class DestinationRepository : IDestinationRepository
    {
        public IQueryable<string> GetAllDestinations()
        {
            return new[]
                {
                    "Advance, NC (USA)",
                    "Alexandria (Egypt)",
                    "Alger (Algeria)",
                    "Altadis Spain (Spain)",
                    "Altamira (Mexico)",
                    "Andina (England)",
                    "Baltimore (USA)"
                }.AsQueryable();
        }
    }
}