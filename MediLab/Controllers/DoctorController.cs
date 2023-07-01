using MediLab.DAL;
using MediLab.Models;
using MediLab.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
    public class DoctorController : Controller
    {
        private readonly AppDbContext _context;

        public DoctorController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index(int id)
        {
            DoctorVM doctorVM = new DoctorVM()
            {
                Services = await _context.Types
                .ToListAsync(),
                Doctors = await _context.Doctors
                .Include(d => d.TypeOfService)
                .Include(d=>d.Clinic)
                .OrderByDescending(d => d.Id)
                .ToListAsync()
                

            };
            return View(doctorVM);
            return View(await _context.Doctors.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());
            //public async Task<IActionResult> Index(int id)
            //{


            //    return View(await _context.Types.Where(p => p.Id == id).Include(p=>p.Doctors).Take(3).ToListAsync());

            //}
        }

    }
}
