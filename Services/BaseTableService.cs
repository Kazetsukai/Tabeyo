
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Services
{
    public abstract class BaseTableService<T> where T : ITableEntity, new()
    {
        CloudTableClient _tableClient;
        CloudTable _table;
        
        public BaseTableService(CloudTableClient cloudTableClient, string tableName)
        {
            _tableClient = cloudTableClient;
            _table = _tableClient.GetTableReference(tableName);
            _table.CreateIfNotExistsAsync();
        }

        public async Task<IEnumerable<T>> GetAll() 
        {
            TableContinuationToken tableContinuationToken = null;
            var results = new List<T>();

            do 
            {
                var queryResponse = await _table.ExecuteQuerySegmentedAsync<T>(new TableQuery<T>(), tableContinuationToken);
                tableContinuationToken = queryResponse.ContinuationToken;
                results.AddRange(queryResponse.Results);
            }
            while (tableContinuationToken != null); 

            return results;
        }
        
        public async Task<TableResult> Add(T entity)
        {
            return await _table.ExecuteAsync(TableOperation.Insert(entity));
        }
    }
}