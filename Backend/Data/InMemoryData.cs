using System.Collections.Generic;
using MiniProje.Api.Models;

namespace MiniProje.Api.Data
{
    public class InMemoryData
    {
        //  USERS
        public static List<User> Users = new()
        {
            new User { Id = 1, Name = "User Test", Email = "user@test.com", Role = "user" },
            new User { Id = 2, Name = "Instructor Test", Email = "instructor@test.com", Role = "instructor" },
            new User { Id = 3, Name = "Admin Test", Email = "admin@test.com", Role = "admin" }
        };

        //  COURSES (5 ADET – JSON MODEL GİBİ)
        public static List<Course> Courses = new()
        {
            new Course
            {
                Id = 1,
                Title = "React ile Modern Web",
                Description = "Modern React, Hooks ve proje geliştirme",
                Instructor = "Ahmet Yılmaz",
                Price = 499
            },
            new Course
            {
                Id = 2,
                Title = "Node.js Backend",
                Description = "REST API, JWT ve backend mimarisi",
                Instructor = "Ayşe Kaya",
                Price = 599
            },
            new Course
            {
                Id = 3,
                Title = ".NET Core Web API",
                Description = "Katmanlı mimari ve clean code",
                Instructor = "Mehmet Demir",
                Price = 649
            },
            new Course
            {
                Id = 4,
                Title = "PostgreSQL & SQL",
                Description = "Veritabanı tasarımı ve sorgular",
                Instructor = "Elif Arslan",
                Price = 399
            },
            new Course
            {
                Id = 5,
                Title = "Yazılım Mimarisi",
                Description = "Monolith, Microservice ve ölçekleme",
                Instructor = "Can Korkmaz",
                Price = 799
            }
        };

        //  USER → COURSE İLİŞKİSİ (SATIN ALINAN EĞİTİMLER)
        // userId -> List<courseId>
        public static Dictionary<int, List<int>> UserCourses = new()
        {
            { 1, new List<int> { 1, 2 } } // user@test.com → React + Node.js
        };

        //  CANLI DERS TALEPLERİ
        public static List<LiveLessonRequest> LiveLessons = new();
    }
}
