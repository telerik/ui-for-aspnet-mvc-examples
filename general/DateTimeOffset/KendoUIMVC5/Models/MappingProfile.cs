using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
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