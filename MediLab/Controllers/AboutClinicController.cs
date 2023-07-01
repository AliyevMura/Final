using MediLab.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
    public class AboutClinicController : Controller
    {
        private readonly AppDbContext _context;

        public AboutClinicController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index([FromRoute] int id)
        {
            return View(await _context.Doctors.Where(p => p.ClinicId == id).ToListAsync());
        }
    }
}
