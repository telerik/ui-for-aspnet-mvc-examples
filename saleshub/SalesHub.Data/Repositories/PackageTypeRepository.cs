using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class PackageTypeRepository : IPackageTypeRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public PackageTypeRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public IQueryable<PackageType> GetAllPackageTypes()
        {
            return _salesHubDbContext.PackageTypes;
        }
    }
}