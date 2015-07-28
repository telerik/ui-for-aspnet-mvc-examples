using System;
using System.Linq;
using System.Web.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using SalesHub.Client.ViewModels.Api;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Client.Api
{
    [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
    public class OrderNotesController : Controller
    {
        private readonly IOrderNotesRepository _orderNotesRepository;
        private readonly IUserRepository _userRepository;

        public OrderNotesController(IOrderNotesRepository orderNotesRepository, IUserRepository userRepository)
        {
            _orderNotesRepository = orderNotesRepository;
            _userRepository = userRepository;
        }

        public JsonResult GetOrderNotesForOrder(int id, [DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            IQueryable<OrderNote> orderNotes = _orderNotesRepository.GetOrderNotesForOrder(id);

            return Json(orderNotes.ToDataSourceResult(dataSourceRequest, on => new OrderNoteViewModel
            {
                Note = on.Note,
                PostedDate = on.PostedDate,
                Author = on.User.FullName
            }), JsonRequestBehavior.AllowGet);
        }

        [HttpPut]
        public JsonResult CreateOrderNote(int id, OrderNoteViewModel orderNoteViewModel, [DataSourceRequest] DataSourceRequest dataSourceRequest)
        {
            // TODO: Use the current windows identity instead of hard coding.
            User user = _userRepository.GetUserById(1);

            OrderNote orderNote = new OrderNote
            {
                Note = orderNoteViewModel.Note,
                PostedDate = DateTime.UtcNow,
                UserId = user.UserId,
                OrderId = id
            };

            orderNoteViewModel.Author = user.FullName;

            _orderNotesRepository.Add(orderNote);
            _orderNotesRepository.SaveChanges();

            orderNoteViewModel.OrderNoteId = orderNote.OrderNoteId;

            var resultData = new[] {orderNoteViewModel};
            return Json(resultData.AsQueryable().ToDataSourceResult(dataSourceRequest));
        }
    }
}
