using System;
using Microsoft.WindowsAzure.Storage.Table;

namespace Tabeyo.Models
{
    public class Lead : TableEntity
    {
        public Lead(string source, string email)
        {
            PartitionKey = source;
            RowKey = email;
        }

        public Lead() { }

        public string Email 
        {
            get { return RowKey; }
            set { RowKey = value; }
        }
        public string Source
        {
            get { return PartitionKey; }
            set { PartitionKey = value; }
        }
    }
}