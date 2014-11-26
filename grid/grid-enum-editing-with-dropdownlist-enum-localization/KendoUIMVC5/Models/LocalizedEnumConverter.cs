using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using KendoUIMVC5.Resources;

namespace KendoUIMVC5.Models
{
    public class LocalizedEnumConverter : Infralution.Localization.ResourceEnumConverter
    {
        public LocalizedEnumConverter(Type type)
            : base(type, Resource.ResourceManager)
        {
        }
    }
}