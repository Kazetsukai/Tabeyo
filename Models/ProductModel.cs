using Tabeyo.Data;
using Tabeyo.ViewModels;

public class ProductModel : Entity
{
    public string Id { get { return PartitionKey; } set { PartitionKey = value; }}
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public int PriceCents { get; set; }
    
    public Product ToVM()
    {
        return new Product() { Name = Name, ImageUrl = ImageUrl, PriceCents = PriceCents, Id = Id };
    }
    
    public static ProductModel FromVM(Product model)
    {
        return new ProductModel() { Name = model.Name, ImageUrl = model.ImageUrl, PriceCents = model.PriceCents, Id = model.Id };
    }
}