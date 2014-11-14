using System.ComponentModel.DataAnnotations;

namespace KendoUIMVC5.Models
{
    public class Product
    {
        [ScaffoldColumn(false)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}