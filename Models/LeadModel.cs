using Tabeyo.Data;
using Tabeyo.ViewModels;

namespace Tabeyo.Models
{
    public class LeadModel : Entity
    {
        public string Email { get; set; }
        public string Source { get; set; }
        
        public Lead ToVM()
        {
            return new Lead() { Source = Source, Email = Email };
        }
        
        public static LeadModel FromVM(Lead model)
        {
            
            return new LeadModel() { Source = model.Source, Email = model.Email };
        }
    }
}