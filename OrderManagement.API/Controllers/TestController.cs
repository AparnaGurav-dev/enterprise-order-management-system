using Microsoft.AspNetCore.Mvc;

namespace OrderManagement.API.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("API test endpoint is working!");
        }
    }
}
