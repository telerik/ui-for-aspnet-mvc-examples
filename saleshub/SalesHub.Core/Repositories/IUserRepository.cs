using SalesHub.Core.Models;

namespace SalesHub.Core.Repositories
{
    public interface IUserRepository
    {
        User GetUserById(int userId);
        User GetUserByName(string userName);
    }
}