using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Data;
using MiniProje.Api.Services.Interfaces;

namespace MiniProje.Api.Services
{
    public class PaymentService : IPaymentService
    {
        public void Pay(int userId, int courseId)
        {
            if (!InMemoryData.UserCourses.ContainsKey(userId))
                InMemoryData.UserCourses[userId] = new();

            InMemoryData.UserCourses[userId].Add(courseId);
        }
    }
}