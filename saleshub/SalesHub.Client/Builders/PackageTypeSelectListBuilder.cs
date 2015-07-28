using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Builders
{
    public class PackageTypeSelectListBuilder : IPackageTypeSelectListBuilder
    {
        private readonly IPackageTypeRepository _packageTypeRepository;

        public PackageTypeSelectListBuilder(IPackageTypeRepository packageTypeRepository)
        {
            _packageTypeRepository = packageTypeRepository;
        }

        public IList<SelectListItem> BuildSelectList()
        {
            return _packageTypeRepository.GetAllPackageTypes().ToList().Select(x => new SelectListItem
                {
                    Value = x.PackageTypeId.ToString(),
                    Text = x.Name
                }).ToList();
        }
    }
}