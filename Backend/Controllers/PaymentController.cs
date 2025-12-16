using Microsoft.AspNetCore.Mvc;
using MiniProje.Api.Data;
using MiniProje.Api.Models;
using System.Linq;
using System.Collections.Generic;

namespace MiniProje.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        [HttpPost]
        public IActionResult Pay([FromBody] PaymentRequest request)
        {
            //Kullanici var mi?
            var userExists = InMemoryData.Users.Any(u => u.Id == request.UserId);
            if (!userExists)
                return BadRequest("User not found");

            //Kurs var mi?
            var course = InMemoryData.Courses
                .FirstOrDefault(c => c.Id == request.CourseId);

            if (course == null)
                return BadRequest("Course not found");

            //UserCourses yoksa olustur
            if (!InMemoryData.UserCourses.ContainsKey(request.UserId))
                InMemoryData.UserCourses[request.UserId] = new List<int>();

            //Daha önce satin alinmis mi?
            if (InMemoryData.UserCourses[request.UserId].Contains(request.CourseId))
                return BadRequest("Course already purchased");

            //Odeme Basarili 
            InMemoryData.UserCourses[request.UserId].Add(request.CourseId);

            return Ok(new
            {
                success = true,
                message = "Payment successful",
                course = course.Title
            });
        }
    }

    public class PaymentRequest
    {
        public int UserId { get; set; }
        public int CourseId { get; set; }
    }
}
