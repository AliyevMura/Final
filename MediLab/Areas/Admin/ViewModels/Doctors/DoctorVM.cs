using MediLab.Models;

namespace MediLab.Areas.Admin.ViewModels.Doctors;

public class DoctorVM
{
    public List<Doctor> Doctors { get; set; }
    public List<TypeOfService> Services { get; set; }
}
