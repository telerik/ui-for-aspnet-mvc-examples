using System.Collections.Generic;
using System.Linq;

namespace ProgressSampleApp.Models
{

  public class Candidate
  {

    public string Name { get; set; }

    public string Party { get; set; }

    public StateResult[] Results { get; set; }

    public long TotalVotes { get
      {
        return Results.Sum(s => s.TotalVotes);
      } }

    public int ElectoralVotes { get
      {
        return Results.Sum(s => s.ElectoralVotes);
      } }

  }


}
