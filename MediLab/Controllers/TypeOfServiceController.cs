using MediLab.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MediLab.Controllers
{
    public class TypeOfServiceController : Controller
    {
        private readonly AppDbContext _context;

        public TypeOfServiceController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index(int id)
        {
            return View(await _context.Types.Where(p=>p.Id==id).Take(3).ToListAsync());

        }
    }
}
