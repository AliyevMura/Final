﻿using Microsoft.AspNetCore.Mvc;

namespace MediLab.Controllers
{
    public class AppointmentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
