using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Telerik.Examples.Mvc.Areas.GridDateTimeOffset.Models
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Car, CarViewModel>();
            CreateMap<CarViewModel, Car>();
            CreateMap<DateTime, DateTimeOffset>();
            CreateMap<DateTimeOffset, DateTime>();
        }
    }
}