using System.Linq;
using SalesHub.Core.Models;
using SalesHub.Core.Repositories;

namespace SalesHub.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ISalesHubDbContext _salesHubDbContext;

        public UserRepository(ISalesHubDbContext salesHubDbContext)
        {
            _salesHubDbContext = salesHubDbContext;
        }

        public User GetUserById(int userId)
        {
            return _salesHubDbContext.Users.Find(userId);
        }

        public User GetUserByName(string userName)
        {
            return _salesHubDbContext.Users.SingleOrDefault(x => x.UserName == userName);
        }
    }
}