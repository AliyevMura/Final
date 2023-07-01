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
    public class TypeController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _environment;
     
        public TypeController(AppDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }
        public async Task<IActionResult> Index()
        {
            return View(await _context.Types.Where(p => !p.IsDeleted).OrderByDescending(p => p.Id).ToListAsync());
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(TypeOfService service)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }



            TypeOfService service1 = new TypeOfService
            {
                Name = service.Name,
                
            };
            await _context.Types.AddAsync(service);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Update(int Id)
        {
            TypeOfService? service = _context.Types.Find(Id);

            if (service == null)
            {
                return NotFound();
            }

            return View(service);
        }

        [HttpPost]
        public IActionResult Update(TypeOfService service)
        {
            TypeOfService? editedService = _context.Types.Find(service.Id);
            if (editedService == null)
            {
                return NotFound();
            }
            editedService.Name = service.Name;
           
            _context.Types.Update(editedService);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
        public async Task<IActionResult> Delete(int id)
        {
            TypeOfService? service = await _context.Types.FindAsync(id);
            if (service == null)
            {
                return NotFound();
            }




            _context.Types.Remove(service);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }




    }
}
