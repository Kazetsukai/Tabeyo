using System.Collections.Generic;
using System.Linq;
using Microsoft.WindowsAzure.Storage.Table;
using Tabeyo.Models;

namespace Tabeyo.Services
{
    public class LeadService
    {
        private const string TABLE_NAME = "Leads";

        CloudTableClient _tableClient;
        CloudTable _table;

        public LeadService(CloudTableClient cloudTableClient)
        {
            _tableClient = cloudTableClient;
            _table = _tableClient.GetTableReference(TABLE_NAME);
            _table.CreateIfNotExists();
        }

        public List<LeadModel> GetLeads()
        {
            return _table.ExecuteQuery<LeadModel>(new TableQuery<LeadModel>()).ToList();
        }

        public void Add(LeadModel lead)
        {
            _table.Execute(TableOperation.Insert(lead));
        }
    }
}