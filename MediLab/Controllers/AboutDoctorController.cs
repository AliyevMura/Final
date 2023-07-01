using MediLab.DAL;
using MediLab.Models;
using MediLab.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
    public class AboutDoctorController : Controller
    {
        private readonly AppDbContext _context;

        public AboutDoctorController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index([FromRoute]int id)
        {
        
           
            return View(await _context.Doctors.Where(p=>p.Id==id).ToListAsync());
        }
    }
}
