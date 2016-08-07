using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Tabeyo.ViewModels;
using Tabeyo.Services;
using System.Threading.Tasks;

namespace Tabeyo.Controllers
{
    public class ProductController : Controller
    {
        private ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }
        
        public async Task<IEnumerable<Product>> Index()
        {
            return (await _productService.GetAll()).Select(p => p.ToVM());
        }
        
    }
}
