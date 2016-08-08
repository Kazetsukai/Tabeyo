using Microsoft.AspNetCore.Mvc;

namespace Tabeyo.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        [HttpGet()]
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpGet("Error")]
        public IActionResult Error()
        {
            return View();
        }
    }
}
