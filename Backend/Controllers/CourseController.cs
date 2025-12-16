using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MiniProje.Api.Data;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;

        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public IActionResult GetCourses()
        {
            var courses = _courseService.GetAll();
            return Ok(courses);
        }

        [HttpGet("my/{userId}")]
        public IActionResult GetMyCourses(int userId)
        {
            return Ok(_courseService.GetUserCourses(userId));
        }
    }
}