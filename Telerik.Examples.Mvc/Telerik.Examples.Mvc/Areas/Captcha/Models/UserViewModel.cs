using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.Captcha.Models
{
    public class UserViewModel
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}