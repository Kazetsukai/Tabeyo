
using Microsoft.AspNet.Mvc;
using Tabeyo.Models;
using Tabeyo.Services;

namespace Tabeyo.Controllers
{
    public class LeadController : Controller
    {
        LeadService _leadService;

        public LeadController(LeadService leadService)
        {
            _leadService = leadService;
        }

        public IActionResult Subscribe([FromBody] Lead lead)
        {
            _leadService.Add(lead);
            
            return new JsonResult(new { success = true });
        }
    }
}