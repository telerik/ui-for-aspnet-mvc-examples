using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoCaptcha.Models
{
    public class UserViewModel
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}