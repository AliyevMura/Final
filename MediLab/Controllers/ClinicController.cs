using MediLab.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
	public class ClinicController : Controller
	{
        private readonly AppDbContext _context;

        public ClinicController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index(int id)
        {
            return View(await _context.Clinics.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());

        }
    }
}
