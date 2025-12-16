using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Models;

namespace MiniProje.Api.Services.Interfaces
{
    public interface ICourseService
    {
        List<Course> GetAll();
        List<Course> GetUserCourses(int userId);
    }
}