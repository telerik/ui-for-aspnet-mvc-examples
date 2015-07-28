using System.Collections.Generic;
using System.Web.Mvc;

namespace SalesHub.Client.Extensions
{
    public static class SelectListItemExtensions
    {
        public static IEnumerable<SelectListItem> SetSelected(this IEnumerable<SelectListItem> selectListItems, string selectedValue)
        {
            foreach (var selectListItem in selectListItems)
            {
                selectListItem.Selected = selectListItem.Value == selectedValue;
                yield return selectListItem;
            }
        }

        public static int FindSelected(this IEnumerable<SelectListItem> selectListItems, string selectedValue)
        {
            int result = 0;
            foreach (var selectListItem in selectListItems)
            {
                if(selectListItem.Value == selectedValue)
                    return result;
                else
                    result++;
            }
            return -1;
        }
    }
}