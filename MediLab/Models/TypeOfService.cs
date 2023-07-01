namespace MediLab.Models;

public class TypeOfService
{
  
    public TypeOfService()
    {
        Doctors = new List<Doctor>();
    }
    public int Id { get; set; }
	public string Name { get; set; }
	public virtual List<Doctor> Doctors { get; set; }
	public bool IsDeleted { get; set; } = default;

    //public static implicit operator Type?(TypeOfService? v)
    //{
    //    throw new NotImplementedException();
    //}
}
