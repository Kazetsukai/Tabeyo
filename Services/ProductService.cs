using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Services
{
    public class ProductService : BaseTableService<ProductModel>
    {
        public ProductService(CloudTableClient cloudTableClient)
            : base(cloudTableClient, "Products")
        {
        }

        public async Task<ProductModel> GetById(string id)
        {
            return await GetSingle(id, "");
        } 
    }
}