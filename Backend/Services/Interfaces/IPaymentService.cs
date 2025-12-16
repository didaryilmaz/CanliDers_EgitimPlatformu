using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProje.Api.Services.Interfaces
{
    public interface IPaymentService
    {
        void Pay(int userId, int courseId);
    }
}