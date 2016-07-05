using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Tabeyo.ViewModels;
using Tabeyo.Services;

namespace Tabeyo.Controllers
{
    public class ProductController : Controller
    {
        private ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }
        
        public IEnumerable<Product> Index()
        {
            return _productService.GetProducts().Select(p => p.ToVM());
        }
        
    }
}
