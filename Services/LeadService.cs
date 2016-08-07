using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Table;
using Tabeyo.Models;

namespace Tabeyo.Services
{
    public class LeadService : BaseTableService<LeadModel>
    {
        public LeadService(CloudTableClient cloudTableClient)
            : base(cloudTableClient, "Leads")
        {
        }
    }
}