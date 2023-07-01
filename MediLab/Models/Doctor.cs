using Microsoft.Extensions.Hosting;

namespace MediLab.Models;

public class Doctor
{
	public int Id { get; set; }
	public string FullName { get; set; }
	public string ImagePath { get; set; }
    public int ClinicId { get; set; }
	public Clinic Clinic { get; set; }
    public int TypeOfServiceId { get; set; }
	public TypeOfService TypeOfService { get; set; }
	
	public string Description { get; set; }
	public int WorkExperience { get; set; }
	public bool IsDeleted { get; set; } = default;
	

	
}
