using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Data;
using MiniProje.Api.Models;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Services
{
    public class LiveLessonService : ILiveLessonService
    {
        public LiveLessonRequest CreateRequest(int userId)
        {
            //Kullanıcı var mı?
            var user = InMemoryData.Users.FirstOrDefault(u => u.Id == userId && u.Role == "user");
            if (user == null)
                throw new Exception("User not found");

            //Uygun eğitmen (Mini Uber → ilk instructor)
            var instructor = InMemoryData.Users.FirstOrDefault(u => u.Role == "instructor");
            if (instructor == null)
                throw new Exception("No instructor available");

            //Aynı kullanıcının aktif talebi var mı?
            var hasActiveRequest = InMemoryData.LiveLessons
                .Any(x => x.UserId == userId && x.Status == "Assigned");

            if (hasActiveRequest)
                throw new Exception("You already have an active live lesson request");

            //Talep oluştur
            var request = new LiveLessonRequest
            {
                Id = InMemoryData.LiveLessons.Count + 1,
                UserId = userId,
                InstructorId = instructor.Id,
                InstructorName = instructor.Name,
                Status = "Assigned",
                CreatedAt = DateTime.Now
            };

            InMemoryData.LiveLessons.Add(request);

            return request;
        }
        public List<LiveLessonRequest> GetAssignedRequests(int instructorId)
        {
            return InMemoryData.LiveLessons
                .Where(x => x.InstructorId == instructorId && x.Status == "Assigned")
                .OrderByDescending(x => x.CreatedAt)
                .ToList();
        }
    }
}