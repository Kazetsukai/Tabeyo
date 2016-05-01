using System;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Data
{
    public class Entity : TableEntity
    {
        public Entity(string entityId)
        {
            PartitionKey = (DateTime.MaxValue - DateTime.UtcNow).Ticks.ToString("d19");
            RowKey = entityId;
        }
        public Entity(string entityId, string partitionKey)
        {
            PartitionKey = partitionKey;
            RowKey = entityId;
        }

        public Entity() 
        { 
            PartitionKey = (DateTime.MaxValue - DateTime.UtcNow).Ticks.ToString("d19");
            RowKey = "";
        }
    }
}