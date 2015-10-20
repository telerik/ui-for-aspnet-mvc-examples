using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GridTimeSpanEditor.Binders
{
    public class TimeSpanModelBinder: DefaultModelBinder
    {
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            ValueProviderResult valueResultHours = bindingContext.ValueProvider
                                           .GetValue(bindingContext.ModelName + ".Hours");
            ValueProviderResult valueResultMinutes = bindingContext.ValueProvider
               .GetValue(bindingContext.ModelName + ".Minutes");
            ValueProviderResult valueResultSeconds = bindingContext.ValueProvider
               .GetValue(bindingContext.ModelName + ".Seconds");

            if (valueResultHours != null || valueResultMinutes != null | valueResultSeconds != null)
            {
                int hours = 0;
                int minutes = 0;
                int seconds = 0;
                TimeSpan? actualValue = null;
                var valueResult = new ValueProviderResult(null, string.Empty, System.Globalization.CultureInfo.CurrentCulture);
                
                var modelState = new ModelState { Value = valueResult };
                try
                {
                    if (valueResultHours != null)
                    {
                        hours = int.Parse(valueResultHours.AttemptedValue);
                    }

                    if (valueResultMinutes != null)
                    {
                        minutes = int.Parse(valueResultMinutes.AttemptedValue);
                    }

                    if (valueResultSeconds != null)
                    {
                        seconds = int.Parse(valueResultSeconds.AttemptedValue);
                    }
                    actualValue = new TimeSpan(hours, minutes, seconds);                    
                }
                catch (FormatException e)
                {
                    modelState.Errors.Add(e);
                }

                bindingContext.ModelState.Add(bindingContext.ModelName, modelState);

                return actualValue;
            }
            else
            {
                return base.BindModel(controllerContext, bindingContext);
            }
        }
    }
}