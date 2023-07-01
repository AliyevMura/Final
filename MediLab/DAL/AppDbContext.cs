using MediLab.Models;
using MediLab.Models.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace MediLab.DAL
{
	public class AppDbContext :IdentityDbContext<AppUser>
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}


		public DbSet<Clinic> Clinics { get; set; }
		public DbSet<Doctor> Doctors { get; set; }
		
		public DbSet<MedicalMarket> MedicalMarkets { get; set; }
		public DbSet<TypeOfService> Types { get; set; }
		

	//	protected override void OnModelCreating(ModelBuilder modelBuilder)
	//	{
	//		modelBuilder.Entity<ClinicDoctor>()
	//.HasOne(cd => cd.Doctor)
	//.WithMany(d => d.ClinicDoctor)
	//.HasForeignKey(cd => cd.DoctorId)
	//.OnDelete(DeleteBehavior.NoAction);


	//	}
	}
}
	

