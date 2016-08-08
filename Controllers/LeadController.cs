
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tabeyo.Models;
using Tabeyo.Services;
using Tabeyo.ViewModels;

namespace Tabeyo.Controllers
{
    [Route("api/Lead")]
    public class LeadController : Controller
    {
        private LeadService _leadService;

        public LeadController(LeadService leadService)
        {
            _leadService = leadService;
        }

        [HttpPost("Subscribe")]
        public async Task<IActionResult> Subscribe([FromBody] Lead lead)
        {
            await _leadService.Add(LeadModel.FromVM(lead));
            
            return new JsonResult(new { success = true });
        }
    }
}