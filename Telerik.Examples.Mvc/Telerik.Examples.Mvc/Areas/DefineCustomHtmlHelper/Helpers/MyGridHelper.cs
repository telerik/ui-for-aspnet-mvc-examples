using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kendo.Mvc.UI;

namespace Telerik.Examples.Mvc.Areas.DefineCustomHtmlHelper.Helpers
{
    public static class MyGridHelper
    {
        public static Kendo.Mvc.UI.Fluent.GridBuilder<T> MyGrid<T>(this HtmlHelper helper, string name)
            where T : class
        {
            return helper.Kendo().Grid<T>()
                .Name(name)
                .Groupable()
                .Pageable()
                .Sortable()
                .Scrollable()
                .Filterable()
                .Pageable();
        }
    }
}