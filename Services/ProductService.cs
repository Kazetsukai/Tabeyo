using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Services
{
    public class ProductService : BaseTableService<ProductModel>
    {
        public ProductService(CloudTableClient cloudTableClient)
            : base(cloudTableClient, "Products")
        {
        }
    }
}