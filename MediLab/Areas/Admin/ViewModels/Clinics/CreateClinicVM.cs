using System.ComponentModel.DataAnnotations;

namespace MediLab.Areas.Admin.ViewModels.Clinics;

public class CreateClinicVM
{
    [Required]
    [MaxLength(100)]
    public string Name { get; set; }
    [Required]
    [MaxLength(100)]
    public string Description { get; set; }
    [Required]
    [MaxLength(100)]
    public string Adress { get; set; }

    public IFormFile Photo { get; set; }
}
