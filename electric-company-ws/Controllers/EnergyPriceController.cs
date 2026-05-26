using Microsoft.AspNetCore.Mvc;

namespace EnergyPriceService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EnergyPriceController : ControllerBase
    {
        [HttpGet("price")] 
        public ActionResult<double> GetPrice()
        {
            var result = EnergyPriceService.GetPrice();
            return Ok(result);
        }
    }
}


