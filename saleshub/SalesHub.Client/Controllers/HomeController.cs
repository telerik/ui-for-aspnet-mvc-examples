using SalesHub.Client.Builders;
using SalesHub.Client.ViewModels.Client;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;
using System.Web.Mvc;

namespace SalesHub.Client.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly ISellingCompanyTreeViewBuilder _sellingCompanyTreeViewBuilder;

        public HomeController(IUserRepository userRepository, ISellingCompanyTreeViewBuilder sellingCompanyTreeViewBuilder)
        {
            _userRepository = userRepository;
            _sellingCompanyTreeViewBuilder = sellingCompanyTreeViewBuilder;
        }

        public ActionResult Index()
        {
            User user = _userRepository.GetUserByName("test");
            var viewModel = new IndexViewModel
                {
                    TreeViewRoot = _sellingCompanyTreeViewBuilder.BuildTreeViewForUser(user)
                };

            return View("Index", viewModel);
        }
    }
}
