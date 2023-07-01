using Microsoft.AspNetCore.Mvc;

namespace MediLab.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
