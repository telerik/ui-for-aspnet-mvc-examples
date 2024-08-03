using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.UploadFilesToDataBase.Models
{
    public class UserFileViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? DataLength { get; set; }
    }
}