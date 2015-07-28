using System;
using System.Linq;
using AutoMapper;
using SalesHub.Client.ViewModels.Api;
using SalesHub.Client.ViewModels.Client;
using SalesHub.Core.Models;

[assembly: WebActivator.PreApplicationStartMethod(typeof(SalesHub.Client.App_Start.AutoMapperConfig), "SetupMappings")]
namespace SalesHub.Client.App_Start
{
    public static class AutoMapperConfig
    {
        public static void SetupMappings()
        {
            Mapper.CreateMap<OrderDetail, OrderDetailViewModel>();
            Mapper.CreateMap<OrderDetailViewModel, OrderDetail>();
            Mapper.CreateMap<Order, OrderViewModel>();
        }
    }
}