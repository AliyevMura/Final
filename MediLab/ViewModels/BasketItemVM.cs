namespace MediLab.ViewModels;

public class BasketItemVM
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImagePath { get; set; }
    public int Price { get; set; }
    public int ServiceCount { get; set; }
    

    public bool IsDeleted { get; set; } = default;
}
