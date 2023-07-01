using MediLab.DAL;
using MediLab.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MediLab.Controllers
{
    public class BasketController : Controller
    {
        private const string COOKIES_BASKET = "basketVM";
        private readonly AppDbContext _appDbContext;

        public BasketController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public IActionResult Index()
        {
            List<BasketItemVM> basketItemVMs = new List<BasketItemVM>();
            List<BasketVM> basket = JsonConvert.DeserializeObject<List<BasketVM>>(Request.Cookies[COOKIES_BASKET]);
            foreach (BasketVM item in basket)
            {
                BasketItemVM basketItemVM=_appDbContext.MedicalMarkets
                    .Where(s => !s.IsDeleted && s.Id == item.MarketId)
                                              .Select(s => new BasketItemVM
                                              {
                                                  Name = s.Name,
                                                  Id = s.Id,
                                                  
                                                  IsDeleted = s.IsDeleted,
                                                  Price = s.Price,
                                                  ServiceCount = item.Count,
                                                  ImagePath = s.ImagePath
                                              }).FirstOrDefault();
                basketItemVMs.Add(basketItemVM);
            }
            return View(basketItemVMs);
        }
        public IActionResult AddBasket(int id)
        {
            List<BasketVM> basketVMs;
            if (Request.Cookies[COOKIES_BASKET]!=null)
            {
                basketVMs= JsonConvert.DeserializeObject<List<BasketVM>>(Request.Cookies[COOKIES_BASKET]);
            }
            else
            {
                basketVMs= new List<BasketVM>();
            }

            BasketVM cookiesBasket = basketVMs.Where(m => m.MarketId == id).FirstOrDefault();
            if (cookiesBasket != null)
            {
                cookiesBasket.Count++;
            }
            else
            {

                BasketVM basketVM = new BasketVM()
                {
                    MarketId = id,
                    Count = 1
                };
                basketVMs.Add(basketVM);
            }


            Response.Cookies.Append(COOKIES_BASKET,JsonConvert.SerializeObject(basketVMs));
            return RedirectToAction("Index","MedicalMarket");
        }
    }
}
