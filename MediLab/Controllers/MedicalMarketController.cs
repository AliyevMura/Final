using MediLab.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
	public class MedicalMarketController : Controller
	{
        private readonly AppDbContext _context;

        public MedicalMarketController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            return View(await _context.MedicalMarkets.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());

        }
    }
}
