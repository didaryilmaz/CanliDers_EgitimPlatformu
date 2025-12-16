using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Data;
using MiniProje.Api.Models;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Services
{
    public class UserService : IUserService
    {
        public User? Login(string email)
        {
            return InMemoryData.Users.FirstOrDefault(u => u.Email == email);
        }
        public User? Register(string email, string password, string role)
        {
            if (InMemoryData.Users.Any(x => x.Email == email))
                return null;

            var user = new User
            {
                Email = email,
                Password = password,
                Role = role
            };

            InMemoryData.Users.Add(user);

            return user;
        }

    }
}