using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GridContainsColorPicker.Models
{
    public class PaintOrder
    {
        public int PaintOrderID { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        [UIHint("ColorPicker")]
        public string PaintColor { get; set; }
    }
}