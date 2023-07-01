using MediLab.Models;

namespace MediLab.ViewModels;

public class DoctorVM
{
    public List<Doctor> Doctors { get; set; }
    public List<TypeOfService> Services { get; set; }

}
