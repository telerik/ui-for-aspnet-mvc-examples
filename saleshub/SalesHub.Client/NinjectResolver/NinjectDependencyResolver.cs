using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;

namespace SalesHub.Client.NinjectResolver
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private readonly IKernel _kernel;

        public NinjectDependencyResolver(IKernel kernel)
        {
            _kernel = kernel;
        }

        public IDependencyScope BeginScope()
        {
            return this;
        }

        public object GetService(Type serviceType)
        {
            return _kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return _kernel.GetAll(serviceType);
            }
            catch
            {
                return new List<object>();
            }
        }

        public void Dispose()
        { }
    }
}