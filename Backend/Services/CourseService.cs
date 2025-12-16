using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Data;
using MiniProje.Api.Models;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Services
{
    public class CourseService : ICourseService
    {
        public List<Course> GetAll()
        {
            return InMemoryData.Courses;
        }

        public List<Course> GetUserCourses(int userId)
        {
            if (!InMemoryData.UserCourses.ContainsKey(userId))
                return new List<Course>();

            var courseIds = InMemoryData.UserCourses[userId];

            return InMemoryData.Courses
                .Where(c => courseIds.Contains(c.Id))
                .ToList();
        }
    }
}