using System.Collections.Generic;
using System.Linq;

namespace ProgressSampleApp.Models
{
  public partial class ResultsRepository
  {

    #region States

    public static class States
    {
      public static readonly State AL = new State("AL", "Alabama");
      public static readonly State AK = new State ("AK", "Alaska");
      public static readonly State AZ = new State("AZ", "Arizona");
      public static readonly State AR = new State("AR", "Arkansas");
      public static readonly State CA = new State("CA","California");
      public static readonly State CO = new State("CO","Colorado");
      public static readonly State CT = new State("CT", "Connecticut");
      public static readonly State DC = new State("DC", "District of Columbia");
      public static readonly State DE = new State("DE", "Delaware");
      public static readonly State FL = new State("FL","Florida");
      public static readonly State GA = new State("GA","Georgia");
      public static readonly State HI = new State("HI","Hawaii");
      public static readonly State ID = new State ("ID", "Idaho");
      public static readonly State IL = new State("IL","Illinois");
      public static readonly State IN = new State("IN","Indiana");
      public static readonly State IA = new State("IA","Iowa");
      public static readonly State KS = new State("KS","Kansas");
      public static readonly State KY = new State("KY","Kentucky");
      public static readonly State LA = new State("LA","Louisiana");
      public static readonly State ME = new State("ME","Maine");
      public static readonly State MD = new State("MD","Maryland");
      public static readonly State MA = new State("MA","Massachusetts");
      public static readonly State MI = new State("MI","Michigan");
      public static readonly State MN = new State("MN","Minnesota");
      public static readonly State MS = new State("MS","Mississippi");
      public static readonly State MO = new State("MO","Missouri");
      public static readonly State MT = new State("MT","Montana");
      public static readonly State NE = new State("NE","Nebraska");
      public static readonly State NV = new State("NV", "Nevada");
      public static readonly State NH = new State("NH", "New Hampshire");
      public static readonly State NJ = new State("NJ", "New Jersey");
      public static readonly State NM = new State("NM","New Mexico");
      public static readonly State NY = new State("NY","New York");
      public static readonly State NC = new State("NC","North Carolina");
      public static readonly State ND = new State("ND","North Dakota");
      public static readonly State OH = new State("OH","Ohio");
      public static readonly State OK = new State("OK","Oklahoma");
      public static readonly State OR = new State("OR","Oregon");
      public static readonly State PA = new State("PA","Pennsylvania");
      public static readonly State RI = new State("RI","Rhode Island");
      public static readonly State SC = new State("SC","South Carolina");
      public static readonly State SD = new State("SD","South Dakota");
      public static readonly State TN = new State("TN","Tennessee");
      public static readonly State TX = new State("TX","Texas");
      public static readonly State UT = new State("UT","Utah");
      public static readonly State VT = new State("VT","Vermont");
      public static readonly State VA = new State("VA","Virginia");
      public static readonly State WA = new State("WA","Washington");
      public static readonly State WV = new State("WV","West Virginia");
      public static readonly State WI = new State("WI","Wisconsin");
      public static readonly State WY = new State("WY", "Wyoming");
    }

    #endregion

    public int[] GetAvailableYears()
    {
      return Candidates.Select(c => c.Item1).ToArray();
    }

    public Candidate[] ResultsByCandidate(int year = 1980)
    {
      return Candidates.First(c => c.Item1 == year).Item2;
    }

    public IEnumerable<StateResult> GetMapResults(int year)
    {

      var outResult = new List<StateResult>();
      var candidateResults = ResultsByCandidate(year);

      for (int i=0;i<=50;i++)
      {
        Candidate winner = (candidateResults[0].Results[i].ElectoralVotes > candidateResults[1].Results[i].ElectoralVotes) ? candidateResults[0] : candidateResults[1];
        StateResult thisStateResult = winner.Results[i];
        thisStateResult.WinnerName = winner.Name;
        thisStateResult.WinnerParty = winner.Party;
        outResult.Add(thisStateResult);

      }

      return outResult;

    }

  }

}
