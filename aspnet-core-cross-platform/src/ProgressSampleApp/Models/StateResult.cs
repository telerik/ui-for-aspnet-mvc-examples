namespace ProgressSampleApp.Models
{

  public class StateResult
  {

    public State State { get; set; }

    public byte ElectoralVotes { get; set; }

    public int TotalVotes { get; set; }

    public decimal PercentVote { get; set; }

    public string WinnerName { get; set; }

    public string WinnerParty { get; set; }

  }


}
