using System.Collections.Generic;
using System.Linq;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
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
        }

        public List<Lead> GetLeads()
        {
            return _table.ExecuteQuery<Lead>(new TableQuery<Lead>()).ToList();
        }

        public void AddLead(Lead lead)
        {

        }
    }
}