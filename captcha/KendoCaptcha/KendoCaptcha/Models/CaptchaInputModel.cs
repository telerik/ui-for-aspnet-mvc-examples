using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoCaptcha.Models
{
    public class CaptchaInputModel
    {
        private string _captchaValue;
        public string Captcha
        {
            get
            {
                return string.IsNullOrEmpty(_captchaValue) ? "" : _captchaValue;
            }
            set
            {
                _captchaValue = value;
            }
        }
        public string CaptchaID { get; set; }
    }
}