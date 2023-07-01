using MediLab.Areas.Admin.ViewModels.Doctors;
using MediLab.DAL;
using MediLab.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace MediLab.Areas.Admin.Controllers
{
    [Area("Admin")]
    //[Authorize(Roles = "Admin")]
    public class DoctorController : Controller
	{
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _environment;
        private List<TypeOfService> typeOfServices;
        public DoctorController(AppDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }
        //public async Task<IActionResult> Index()
        //{
        //    //DoctorVM doctorVM = new DoctorVM()
        //    //{
        //    //    Services = await _context.Types
        //    //    .Include(d=>d.Doctors)
        //    //    .ToListAsync()
        //    //    ,
        //    //    Doctors = await _context.Doctors
        //    //    .Include(d => d.TypeOfService)
        //    //    .Include(d => d.Clinic)
        //    //    .OrderByDescending(d => d.Id)
        //    //    .ToListAsync()


        //    //};
        //    return View(await _context.Doctors.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());
        //}
        public async Task<IActionResult> Index()
        {
            return View(await _context.Doctors.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());
        }
    }
}
