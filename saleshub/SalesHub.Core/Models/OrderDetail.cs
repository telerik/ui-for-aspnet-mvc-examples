using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DataAnnotationsExtensions;

namespace SalesHub.Core.Models
{
    public class OrderDetail
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderDetailId { get; set; }

        public string Origin { get; set; }

        [Min(0)]
        public decimal NetWeight { get; set; }

        [Min(0)]
        public decimal UnitWeight { get; set; }

        [Min(0)]
        public int Units { get; set; }

        [Min(0)]
        public decimal PricePerUnitOfWeight { get; set; }

        public string Destination { get; set; }

        public string LotNumber { get; set; }

        public int? CropYear { get; set; }

        public int PackageTypeId { get; set; }
        public virtual PackageType PackageType { get; set; }

        [Required]
        public DateTime ValueDate { get; set; }

        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}