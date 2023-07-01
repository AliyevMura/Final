using System.ComponentModel.DataAnnotations;

namespace MediLab.Areas.Admin.ViewModels.MedicalMarkets;

public class CreateMarketVM
{
    [Required]
    [MaxLength(100)]
    public string Name { get; set; }
    public IFormFile Photo { get; set; }
    [Required]
    public int Price { get; set; }

}
