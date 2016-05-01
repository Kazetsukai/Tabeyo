using Tabeyo.Data;
using Tabeyo.ViewModels;

public class ProductModel : Entity
{
    public string Name { get; set; }
    
    public Product ToVM()
    {
        return new Product() { Name = Name };
    }
    
    public static ProductModel FromVM(Product model)
    {
        return new ProductModel() { Name = model.Name };
    }
}