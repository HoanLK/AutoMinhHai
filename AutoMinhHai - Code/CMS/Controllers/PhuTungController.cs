using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    [RoutePrefix("phu-tung")]
    public class PhuTungController : Controller
    {
        // GET: PhuTung
        [Route()]
        public ActionResult Index()
        {
            return View();
        }
    }
}