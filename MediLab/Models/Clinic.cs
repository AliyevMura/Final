namespace MediLab.Models;

public class Clinic
{
    public Clinic()
    {
        Doctors = new List<Doctor>();
    }
    public int Id { get; set; }
	public string Name { get; set; }
	public string Description { get; set; }
	public string ImagePath { get; set; }
	public string Adress { get; set; }
	public bool IsDeleted { get; set; } = default;
    public virtual List<Doctor> Doctors { get; set; }
}
