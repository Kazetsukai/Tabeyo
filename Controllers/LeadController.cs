
using Microsoft.AspNetCore.Mvc;
using Tabeyo.Models;
using Tabeyo.Services;
using Tabeyo.ViewModels;

namespace Tabeyo.Controllers
{
    public class LeadController : Controller
    {
        private LeadService _leadService;

        public LeadController(LeadService leadService)
        {
            _leadService = leadService;
        }

        public IActionResult Subscribe([FromBody] Lead lead)
        {
            _leadService.Add(LeadModel.FromVM(lead));
            
            return new JsonResult(new { success = true });
        }
    }
}