namespace SchedulerCustomViewDemo.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class DateGreaterThanAttribute : ValidationAttribute
    {
        private const string DEFAULT_ERROR_MSG_TEMPLATE = "{0} should be after {1}";

        public DateGreaterThanAttribute()
        {
            if (String.IsNullOrEmpty(ErrorMessage))
            {
                ErrorMessage = DEFAULT_ERROR_MSG_TEMPLATE;
            }
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime? date = value != null ? (DateTime?)value : null;
            var otherValue = validationContext.ObjectType.GetProperty(OtherField).GetValue(validationContext.ObjectInstance);
            DateTime? otherDate = otherValue != null ? (DateTime?)otherValue : null;
            if (date.HasValue && otherDate.HasValue && otherDate > date)
            {
                return new ValidationResult(String.Format(ErrorMessage, validationContext.DisplayName, OtherField));
            }

            return ValidationResult.Success;

        }

        public string OtherField { get; set; }
    }
}