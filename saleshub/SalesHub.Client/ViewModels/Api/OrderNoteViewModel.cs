using System;
using System.ComponentModel.DataAnnotations;

namespace SalesHub.Client.ViewModels.Api
{
    public class OrderNoteViewModel
    {
        public int OrderNoteId { get; set; }
        public string Author { get; set; }

        [Required]
        public string Note { get; set; }

        public DateTime PostedDate { get; set; }
    }
}