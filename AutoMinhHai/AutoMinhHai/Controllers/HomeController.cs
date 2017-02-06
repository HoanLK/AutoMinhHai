using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AutoMinhHai.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Thông tin";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Liên hệ";

            return View();
        }
        public ActionResult Suachua()
        {
            ViewBag.Message = "Sửa chữa";

            return View();
        }
        public ActionResult Muabanxe()
        {
            ViewBag.Message = "Mua bán xe";

            return View();
        }
        public ActionResult Phutung()
        {
            ViewBag.Message = "Phụ tùng ô tô";

            return View();
        }
        public ActionResult Tuvan()
        {
            ViewBag.Message = "Góc tư vấn";

            return View();
        }
        public ActionResult Chitietmuaxe()
        {
            ViewBag.Message = "Trang thông tin xe bán";

            return View();
        }
        public ActionResult Chitietphutung()
        {
            ViewBag.Message = "Trang thông tin phụ tùng";

            return View();
        }
        public ActionResult Chitietbaiviet()
        {
            ViewBag.Message = "Trang bài viết";

            return View();
        }
    }
}