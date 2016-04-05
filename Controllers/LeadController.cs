
using Microsoft.AspNet.Mvc;
using Tabeyo.Services;

namespace Tabeyo.Controllers
{
    public class LeadController : Controller
    {
        public LeadController(LeadService leadService)
        {
            var _leadService = leadService;
        }

        public IActionResult Subscribe()
        {
            return new JsonResult(new { Success = true });
        }
    }
}