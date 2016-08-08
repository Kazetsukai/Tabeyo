using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Tabeyo.ViewModels;
using Tabeyo.Services;
using System.Threading.Tasks;

namespace Tabeyo.Controllers
{
    [Route("api/Products")]
    public class ProductController : Controller
    {
        private ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }
        
        [HttpGet()]
        public async Task<IEnumerable<Product>> Index()
        {
            return (await _productService.GetAll()).Select(p => p.ToVM());
        }

        [HttpGet("{id}")]
        public async Task<Product> Index(string id)
        {
            return (await _productService.GetById(id)).ToVM();
        }
        
    }
}
