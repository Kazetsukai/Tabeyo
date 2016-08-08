
using System.Collections.Generic;
using System.Linq;
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
            return await GetQueryResults(new TableQuery<T>());
        }

        public async Task<T> GetSingle(string partitionKey, string rowKey)
        {
            var results = await GetQueryResults(new TableQuery<T>()
                .Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, partitionKey))
                .Where(TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.Equal, rowKey)));

            return results.Single();
        }

        public async Task<IEnumerable<T>> GetQueryResults(TableQuery<T> query) 
        {
            TableContinuationToken tableContinuationToken = null;
            var results = new List<T>();

            do 
            {
                var queryResponse = await _table.ExecuteQuerySegmentedAsync<T>(query, tableContinuationToken);
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