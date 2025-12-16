using Microsoft.AspNetCore.Mvc;
using MiniProje.Api.Services.Interfaces;
using MiniProje.Api.Models;

namespace MiniProje.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LiveLessonController : ControllerBase
    {
        private readonly ILiveLessonService _liveLessonService;

        public LiveLessonController(ILiveLessonService liveLessonService)
        {
            _liveLessonService = liveLessonService;
        }

        [HttpPost("request")]
        public IActionResult CreateRequest([FromBody] LiveLessonCreateRequest request)
        {
            if (request == null || request.UserId <= 0)
            {
                return BadRequest(new { message = "Invalid userId" });
            }

            try
            {
                var result = _liveLessonService.CreateRequest(request.UserId);

                return Ok(new
                {
                    instructorId = result.InstructorId,
                    status = result.Status,
                    message = "Live lesson request created successfully"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = ex.Message
                });
            }
        }
        [HttpGet("assigned/{instructorId}")]
        public IActionResult GetAssignedRequests(int instructorId)
        {
            var requests = _liveLessonService.GetAssignedRequests(instructorId);
            return Ok(requests);
        }
    }
}
