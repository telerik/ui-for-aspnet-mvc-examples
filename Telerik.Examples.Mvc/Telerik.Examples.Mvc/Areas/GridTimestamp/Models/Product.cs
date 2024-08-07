using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Telerik.Examples.Mvc.Areas.GridTimestamp.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int ProductID { get; set; }
        public string ProductName { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }

        [NotMapped]
        public string RowVersionString
        {
            get
            {
                if (this.RowVersion != null)
                {
                    return Convert.ToBase64String(this.RowVersion);
                }

                return string.Empty;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    this.RowVersion = null;
                }
                else
                {
                    this.RowVersion = Convert.FromBase64String(value);
                }
            }
        }
    }
}