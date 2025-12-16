using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProje.Api.Models
{
    public class LiveLessonRequest
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int InstructorId { get; set; }
        public string? InstructorName { get; set; }
        public string Status { get; set; } = "Assigned";
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}