using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MiniProje.Api.Data;
using MiniProje.Api.Models;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] string email)
        {
            var user = _userService.Login(email);
            
            if (user == null)
                return Unauthorized("User not found");

            return Ok(new
            {
                user.Id,
                user.Email,
                user.Role,
                token = "fake-jwt-token"
            });
        }
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            if (dto == null || string.IsNullOrEmpty(dto.Email) || string.IsNullOrEmpty(dto.Password) || string.IsNullOrEmpty(dto.Role))
                return BadRequest("Email, password, and role are required");

            var user = _userService.Register(dto.Email, dto.Password, dto.Role);

            if (user == null)
                return BadRequest("User already exists");

            return Ok(new
            {
                user.Id,
                user.Email,
                user.Role
            });
        }
    }
}