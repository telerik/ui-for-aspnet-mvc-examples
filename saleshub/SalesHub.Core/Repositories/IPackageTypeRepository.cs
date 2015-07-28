using System.Linq;
using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IPackageTypeRepository
    {
        IQueryable<PackageType> GetAllPackageTypes();
    }
}