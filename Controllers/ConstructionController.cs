using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Tabeyo.Controllers
{
    public class ConstructionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
