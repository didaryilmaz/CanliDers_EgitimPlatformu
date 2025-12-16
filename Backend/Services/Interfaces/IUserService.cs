using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Models;

namespace MiniProje.Api.Services.Interfaces
{
    public interface IUserService
    {
        User? Register(string email, string password, string role);
        User? Login(string email);
    }
}