using System;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Models
{
    public class Lead : TableEntity
    {
        public Lead(string source)
        {
            PartitionKey = source;
            RowKey = Guid.NewGuid().ToString();
        }

        public Lead() { }

        public string Email { get; set; }
        public string Source
        {
            get { return PartitionKey; }
        }
    }
}