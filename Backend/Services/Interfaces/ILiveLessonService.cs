using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MiniProje.Api.Models;

namespace MiniProje.Api.Services.Interfaces
{
    public interface ILiveLessonService
    {
        LiveLessonRequest CreateRequest(int userId);
        List<LiveLessonRequest> GetAssignedRequests(int instructorId);


    }
}
