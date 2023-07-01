using Microsoft.AspNetCore.Mvc;

namespace MediLab.Controllers
{
    public class TekliflerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
