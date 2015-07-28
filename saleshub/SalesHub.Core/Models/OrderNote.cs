using System;
using System.Linq;

namespace SalesHub.Core.Models
{
    public class OrderNote
    {
        public int OrderNoteId { get; set; }

        public string Note { get; set; }

        public DateTime PostedDate { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }

        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
