using System.ComponentModel.DataAnnotations;

namespace Telerik.Examples.Mvc.Areas.GridEditingPopUpServerValidation.Models
{
    public class Product
    {
        [ScaffoldColumn(false)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}