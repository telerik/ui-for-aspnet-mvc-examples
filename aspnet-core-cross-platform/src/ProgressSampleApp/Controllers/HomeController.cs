using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProgressSampleApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ProgressSampleApp.Controllers
{
  public class HomeController : Controller
  {
    public ResultsRepository Repository { get; private set; }

    public HomeController(ResultsRepository repo)
    {
      this.Repository = repo;
    }

    public IActionResult Index(int year = 1980)
    {

      var years = Repository.GetAvailableYears().Select(y => new SelectListItem { Text = y.ToString() });
      ViewBag.Years = years;
      ViewBag.SelectedYear = year;

      return View();
    }

    [Route("api/map")]
    public IActionResult MapResults(int year = 1980)
    {

      var mapResults = Repository.GetMapResults(year);
      var candidateResults = Repository.ResultsByCandidate(year);
      var totals = new List<object>();

      foreach (var c in candidateResults)
      {
        totals.Add(new
        {
          Name = c.Name,
          TotalVotes = c.TotalVotes,
          ElectoralVotes = c.ElectoralVotes
        });
      }

      return Ok(new { Results=mapResults, Totals=totals });
    }

    public IActionResult Error()
    {
      return View();
    }
  }
}
