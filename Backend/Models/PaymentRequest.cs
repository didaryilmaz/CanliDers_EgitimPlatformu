using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProje.Api.Models
{
    public class PaymentRequest
    {
        public int UserId { get; set; }
        public int CourseId { get; set; }

        public string? CardNumber { get; set; }
        public string? Expiry { get; set; }
        public string? Cvc { get; set; }
    }
}