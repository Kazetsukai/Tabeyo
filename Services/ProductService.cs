using System.Collections.Generic;
using System.Linq;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Services
{
    public class ProductService
    {
        private const string TABLE_NAME = "Products";

        CloudTableClient _tableClient;
        CloudTable _table;

        public ProductService(CloudTableClient cloudTableClient)
        {
            _tableClient = cloudTableClient;
            _table = _tableClient.GetTableReference(TABLE_NAME);
            _table.CreateIfNotExists();
        }

        public List<ProductModel> GetProducts()
        {
            return _table.ExecuteQuery<ProductModel>(new TableQuery<ProductModel>()).ToList();
        }
    }
}