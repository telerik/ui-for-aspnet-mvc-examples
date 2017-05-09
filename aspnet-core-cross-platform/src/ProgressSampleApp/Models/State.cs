namespace ProgressSampleApp.Models
{

  public struct State
  {

    public State(string abbr, string name)
    {
      this.Abbr = abbr;
      this.Name = name;
    }

    public string Abbr { get; }

    public string Name { get; }

  }

}
