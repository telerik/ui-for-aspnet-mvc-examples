using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProgressSampleApp.Models
{
  public partial class ResultsRepository
  {

    #region 1980

    protected Candidate _Reagan1980 = new Candidate()
    {
      Name = "Ronald Reagan",
      Party = "Republican",
      Results = new StateResult[]
      {
new StateResult {State=States.AL, TotalVotes=654192, PercentVote=48.75M, ElectoralVotes=9},
new StateResult {State=States.AK, TotalVotes=86112, PercentVote=54.35M, ElectoralVotes=3},
new StateResult {State=States.AZ, TotalVotes=529688, PercentVote=60.61M, ElectoralVotes=6},
new StateResult {State=States.AR, TotalVotes=403164, PercentVote=48.13M, ElectoralVotes=6},
new StateResult {State=States.CA, TotalVotes=4524858, PercentVote=52.69M, ElectoralVotes=45},
new StateResult {State=States.CO, TotalVotes=652264, PercentVote=55.07M, ElectoralVotes=7},
new StateResult {State=States.CT, TotalVotes=677210, PercentVote=48.16M, ElectoralVotes=8},
new StateResult {State=States.DE, TotalVotes=111252, PercentVote=47.21M, ElectoralVotes=3},
new StateResult {State=States.DC, TotalVotes=23313, PercentVote=13.41M, ElectoralVotes=0},
new StateResult {State=States.FL, TotalVotes=2046951, PercentVote=55.52M, ElectoralVotes=17},
new StateResult {State=States.GA, TotalVotes=654168, PercentVote=40.95M, ElectoralVotes=0},
new StateResult {State=States.HI, TotalVotes=130112, PercentVote=42.9M, ElectoralVotes=0},
new StateResult {State=States.ID, TotalVotes=290699, PercentVote=66.46M, ElectoralVotes=4},
new StateResult {State=States.IL, TotalVotes=2358049, PercentVote=49.65M, ElectoralVotes=26},
new StateResult {State=States.IN, TotalVotes=1255656, PercentVote=56.01M, ElectoralVotes=13},
new StateResult {State=States.IA, TotalVotes=676026, PercentVote=51.31M, ElectoralVotes=8},
new StateResult {State=States.KS, TotalVotes=566812, PercentVote=57.85M, ElectoralVotes=7},
new StateResult {State=States.KY, TotalVotes=635274, PercentVote=49.07M, ElectoralVotes=9},
new StateResult {State=States.LA, TotalVotes=792853, PercentVote=51.2M, ElectoralVotes=10},
new StateResult {State=States.ME, TotalVotes=238522, PercentVote=45.61M, ElectoralVotes=4},
new StateResult {State=States.MD, TotalVotes=680606, PercentVote=44.18M, ElectoralVotes=0},
new StateResult {State=States.MA, TotalVotes=1057631, PercentVote=41.9M, ElectoralVotes=14},
new StateResult {State=States.MI, TotalVotes=1915225, PercentVote=48.99M, ElectoralVotes=21},
new StateResult {State=States.MN, TotalVotes=873241, PercentVote=42.56M, ElectoralVotes=0},
new StateResult {State=States.MS, TotalVotes=441089, PercentVote=49.42M, ElectoralVotes=7},
new StateResult {State=States.MO, TotalVotes=1074181, PercentVote=51.16M, ElectoralVotes=12},
new StateResult {State=States.MT, TotalVotes=206814, PercentVote=56.82M, ElectoralVotes=4},
new StateResult {State=States.NE, TotalVotes=419937, PercentVote=65.53M, ElectoralVotes=5},
new StateResult {State=States.NV, TotalVotes=155017, PercentVote=62.54M, ElectoralVotes=3},
new StateResult {State=States.NH, TotalVotes=221705, PercentVote=57.74M, ElectoralVotes=4},
new StateResult {State=States.NJ, TotalVotes=1546557, PercentVote=51.97M, ElectoralVotes=17},
new StateResult {State=States.NM, TotalVotes=250779, PercentVote=54.97M, ElectoralVotes=4},
new StateResult {State=States.NY, TotalVotes=2893831, PercentVote=46.66M, ElectoralVotes=41},
new StateResult {State=States.NC, TotalVotes=915018, PercentVote=49.3M, ElectoralVotes=13},
new StateResult {State=States.ND, TotalVotes=193695, PercentVote=64.23M, ElectoralVotes=3},
new StateResult {State=States.OH, TotalVotes=2206545, PercentVote=51.51M, ElectoralVotes=25},
new StateResult {State=States.OK, TotalVotes=695570, PercentVote=60.5M, ElectoralVotes=8},
new StateResult {State=States.OR, TotalVotes=571044, PercentVote=48.33M, ElectoralVotes=6},
new StateResult {State=States.PA, TotalVotes=2261872, PercentVote=49.59M, ElectoralVotes=27},
new StateResult {State=States.RI, TotalVotes=154793, PercentVote=37.2M, ElectoralVotes=0},
new StateResult {State=States.SC, TotalVotes=441207, PercentVote=49.57M, ElectoralVotes=8},
new StateResult {State=States.SD, TotalVotes=198343, PercentVote=60.53M, ElectoralVotes=4},
new StateResult {State=States.TN, TotalVotes=787761, PercentVote=48.7M, ElectoralVotes=10},
new StateResult {State=States.TX, TotalVotes=2510705, PercentVote=55.28M, ElectoralVotes=26},
new StateResult {State=States.UT, TotalVotes=439687, PercentVote=72.77M, ElectoralVotes=4},
new StateResult {State=States.VT, TotalVotes=94598, PercentVote=44.37M, ElectoralVotes=3},
new StateResult {State=States.VA, TotalVotes=989609, PercentVote=53.03M, ElectoralVotes=12},
new StateResult {State=States.WA, TotalVotes=865244, PercentVote=49.66M, ElectoralVotes=9},
new StateResult {State=States.WV, TotalVotes=334206, PercentVote=45.3M, ElectoralVotes=0},
new StateResult {State=States.WI, TotalVotes=1088845, PercentVote=47.9M, ElectoralVotes=11},
new StateResult {State=States.WY, TotalVotes=110700, PercentVote=62.64M, ElectoralVotes=3}
      }
    };

    protected Candidate _Carter1980 = new Candidate
    {
      Name = "Jimmy Carter",
      Party = "Democratic",
      Results = new StateResult[]
      {
new StateResult {State=States.AL, TotalVotes=636730, PercentVote=47.45M, ElectoralVotes=0},
new StateResult {State=States.AK, TotalVotes=41842, PercentVote=26.41M, ElectoralVotes=0},
new StateResult {State=States.AZ, TotalVotes=246843, PercentVote=28.24M, ElectoralVotes=0},
new StateResult {State=States.AR, TotalVotes=398041, PercentVote=47.52M, ElectoralVotes=0},
new StateResult {State=States.CA, TotalVotes=3083661, PercentVote=35.91M, ElectoralVotes=0},
new StateResult {State=States.CO, TotalVotes=367973, PercentVote=31.07M, ElectoralVotes=0},
new StateResult {State=States.CT, TotalVotes=541732, PercentVote=38.52M, ElectoralVotes=0},
new StateResult {State=States.DE, TotalVotes=105754, PercentVote=44.87M, ElectoralVotes=0},
new StateResult {State=States.DC, TotalVotes=130231, PercentVote=74.89M, ElectoralVotes=3},
new StateResult {State=States.FL, TotalVotes=1419475, PercentVote=38.5M, ElectoralVotes=0},
new StateResult {State=States.GA, TotalVotes=890733, PercentVote=55.76M, ElectoralVotes=12},
new StateResult {State=States.HI, TotalVotes=135879, PercentVote=44.8M, ElectoralVotes=4},
new StateResult {State=States.ID, TotalVotes=110192, PercentVote=25.19M, ElectoralVotes=0},
new StateResult {State=States.IL, TotalVotes=1981413, PercentVote=41.72M, ElectoralVotes=0},
new StateResult {State=States.IN, TotalVotes=844197, PercentVote=37.65M, ElectoralVotes=0},
new StateResult {State=States.IA, TotalVotes=508672, PercentVote=38.6M, ElectoralVotes=0},
new StateResult {State=States.KS, TotalVotes=326150, PercentVote=33.29M, ElectoralVotes=0},
new StateResult {State=States.KY, TotalVotes=616417, PercentVote=47.61M, ElectoralVotes=0},
new StateResult {State=States.LA, TotalVotes=708453, PercentVote=45.75M, ElectoralVotes=0},
new StateResult {State=States.ME, TotalVotes=220974, PercentVote=42.25M, ElectoralVotes=0},
new StateResult {State=States.MD, TotalVotes=726161, PercentVote=47.14M, ElectoralVotes=10},
new StateResult {State=States.MA, TotalVotes=1053802, PercentVote=41.75M, ElectoralVotes=0},
new StateResult {State=States.MI, TotalVotes=1661532, PercentVote=42.5M, ElectoralVotes=0},
new StateResult {State=States.MN, TotalVotes=954174, PercentVote=46.5M, ElectoralVotes=10},
new StateResult {State=States.MS, TotalVotes=429281, PercentVote=48.09M, ElectoralVotes=0},
new StateResult {State=States.MO, TotalVotes=931182, PercentVote=44.35M, ElectoralVotes=0},
new StateResult {State=States.MT, TotalVotes=118032, PercentVote=32.43M, ElectoralVotes=0},
new StateResult {State=States.NE, TotalVotes=166851, PercentVote=26.04M, ElectoralVotes=0},
new StateResult {State=States.NV, TotalVotes=66666, PercentVote=26.89M, ElectoralVotes=0},
new StateResult {State=States.NH, TotalVotes=108864, PercentVote=28.35M, ElectoralVotes=0},
new StateResult {State=States.NJ, TotalVotes=1147364, PercentVote=38.56M, ElectoralVotes=0},
new StateResult {State=States.NM, TotalVotes=167826, PercentVote=36.78M, ElectoralVotes=0},
new StateResult {State=States.NY, TotalVotes=2728372, PercentVote=43.99M, ElectoralVotes=0},
new StateResult {State=States.NC, TotalVotes=875635, PercentVote=47.18M, ElectoralVotes=0},
new StateResult {State=States.ND, TotalVotes=79189, PercentVote=26.26M, ElectoralVotes=0},
new StateResult {State=States.OH, TotalVotes=1752414, PercentVote=40.91M, ElectoralVotes=0},
new StateResult {State=States.OK, TotalVotes=402026, PercentVote=34.97M, ElectoralVotes=0},
new StateResult {State=States.OR, TotalVotes=456890, PercentVote=38.67M, ElectoralVotes=0},
new StateResult {State=States.PA, TotalVotes=1937540, PercentVote=42.48M, ElectoralVotes=0},
new StateResult {State=States.RI, TotalVotes=198342, PercentVote=47.67M, ElectoralVotes=4},
new StateResult {State=States.SC, TotalVotes=427560, PercentVote=48.04M, ElectoralVotes=0},
new StateResult {State=States.SD, TotalVotes=103855, PercentVote=31.69M, ElectoralVotes=0},
new StateResult {State=States.TN, TotalVotes=783051, PercentVote=48.41M, ElectoralVotes=0},
new StateResult {State=States.TX, TotalVotes=1881147, PercentVote=41.42M, ElectoralVotes=0},
new StateResult {State=States.UT, TotalVotes=124266, PercentVote=20.57M, ElectoralVotes=0},
new StateResult {State=States.VT, TotalVotes=81891, PercentVote=38.41M, ElectoralVotes=0},
new StateResult {State=States.VA, TotalVotes=752174, PercentVote=40.31M, ElectoralVotes=0},
new StateResult {State=States.WA, TotalVotes=650193, PercentVote=37.32M, ElectoralVotes=0},
new StateResult {State=States.WV, TotalVotes=367462, PercentVote=49.81M, ElectoralVotes=6},
new StateResult {State=States.WI, TotalVotes=981584, PercentVote=43.18M, ElectoralVotes=0},
new StateResult {State=States.WY, TotalVotes=49427, PercentVote=27.97M, ElectoralVotes=0}
      }
    };

#endregion

    #region 1984

    protected Candidate _Reagan1984 = new Candidate()
    {
      Name = "Ronald Reagan",
      Party = "Republican",
      Results = new StateResult[]
  {
    new StateResult {State=States.AL, TotalVotes=872849, PercentVote=60.54M, ElectoralVotes=9},
new StateResult {State=States.AK, TotalVotes=138377, PercentVote=66.65M, ElectoralVotes=3},
new StateResult {State=States.AZ, TotalVotes=681416, PercentVote=66.42M, ElectoralVotes=7},
new StateResult {State=States.AR, TotalVotes=534774, PercentVote=60.47M, ElectoralVotes=6},
new StateResult {State=States.CA, TotalVotes=5467009, PercentVote=57.51M, ElectoralVotes=47},
new StateResult {State=States.CO, TotalVotes=821818, PercentVote=63.44M, ElectoralVotes=8},
new StateResult {State=States.CT, TotalVotes=890877, PercentVote=60.73M, ElectoralVotes=8},
new StateResult {State=States.DE, TotalVotes=152190, PercentVote=59.78M, ElectoralVotes=3},
new StateResult {State=States.DC, TotalVotes=29009, PercentVote=13.73M, ElectoralVotes=0},
new StateResult {State=States.FL, TotalVotes=2730350, PercentVote=65.32M, ElectoralVotes=21},
new StateResult {State=States.GA, TotalVotes=1068722, PercentVote=60.17M, ElectoralVotes=12},
new StateResult {State=States.HI, TotalVotes=185050, PercentVote=55.1M, ElectoralVotes=4},
new StateResult {State=States.ID, TotalVotes=297523, PercentVote=72.36M, ElectoralVotes=4},
new StateResult {State=States.IL, TotalVotes=2707103, PercentVote=56.17M, ElectoralVotes=24},
new StateResult {State=States.IN, TotalVotes=1377230, PercentVote=61.67M, ElectoralVotes=12},
new StateResult {State=States.IA, TotalVotes=703088, PercentVote=53.27M, ElectoralVotes=8},
new StateResult {State=States.KS, TotalVotes=677296, PercentVote=66.27M, ElectoralVotes=7},
new StateResult {State=States.KY, TotalVotes=822782, PercentVote=60.04M, ElectoralVotes=9},
new StateResult {State=States.LA, TotalVotes=1037299, PercentVote=60.77M, ElectoralVotes=10},
new StateResult {State=States.ME, TotalVotes=336500, PercentVote=60.83M, ElectoralVotes=4},
new StateResult {State=States.MD, TotalVotes=879918, PercentVote=52.51M, ElectoralVotes=10},
new StateResult {State=States.MA, TotalVotes=1310936, PercentVote=51.22M, ElectoralVotes=13},
new StateResult {State=States.MI, TotalVotes=2251571, PercentVote=59.23M, ElectoralVotes=20},
new StateResult {State=States.MN, TotalVotes=1032603, PercentVote=49.54M, ElectoralVotes=0},
new StateResult {State=States.MS, TotalVotes=581477, PercentVote=61.85M, ElectoralVotes=7},
new StateResult {State=States.MO, TotalVotes=1274188, PercentVote=60.02M, ElectoralVotes=11},
new StateResult {State=States.MT, TotalVotes=232450, PercentVote=60.47M, ElectoralVotes=4},
new StateResult {State=States.NE, TotalVotes=460054, PercentVote=70.55M, ElectoralVotes=5},
new StateResult {State=States.NV, TotalVotes=188770, PercentVote=65.85M, ElectoralVotes=4},
new StateResult {State=States.NH, TotalVotes=267051, PercentVote=68.66M, ElectoralVotes=4},
new StateResult {State=States.NJ, TotalVotes=1933630, PercentVote=60.09M, ElectoralVotes=16},
new StateResult {State=States.NM, TotalVotes=307101, PercentVote=59.7M, ElectoralVotes=5},
new StateResult {State=States.NY, TotalVotes=3664763, PercentVote=53.84M, ElectoralVotes=36},
new StateResult {State=States.NC, TotalVotes=1346481, PercentVote=61.9M, ElectoralVotes=13},
new StateResult {State=States.ND, TotalVotes=200336, PercentVote=64.84M, ElectoralVotes=3},
new StateResult {State=States.OH, TotalVotes=2678560, PercentVote=58.9M, ElectoralVotes=23},
new StateResult {State=States.OK, TotalVotes=861530, PercentVote=68.61M, ElectoralVotes=8},
new StateResult {State=States.OR, TotalVotes=685700, PercentVote=55.91M, ElectoralVotes=7},
new StateResult {State=States.PA, TotalVotes=2584323, PercentVote=53.34M, ElectoralVotes=25},
new StateResult {State=States.RI, TotalVotes=212080, PercentVote=51.66M, ElectoralVotes=4},
new StateResult {State=States.SC, TotalVotes=615539, PercentVote=63.55M, ElectoralVotes=8},
new StateResult {State=States.SD, TotalVotes=200267, PercentVote=63M, ElectoralVotes=3},
new StateResult {State=States.TN, TotalVotes=990212, PercentVote=57.84M, ElectoralVotes=11},
new StateResult {State=States.TX, TotalVotes=3433428, PercentVote=63.61M, ElectoralVotes=29},
new StateResult {State=States.UT, TotalVotes=469105, PercentVote=74.5M, ElectoralVotes=5},
new StateResult {State=States.VT, TotalVotes=135865, PercentVote=57.92M, ElectoralVotes=3},
new StateResult {State=States.VA, TotalVotes=1337078, PercentVote=62.29M, ElectoralVotes=12},
new StateResult {State=States.WA, TotalVotes=1051670, PercentVote=55.82M, ElectoralVotes=10},
new StateResult {State=States.WV, TotalVotes=405483, PercentVote=55.11M, ElectoralVotes=6},
new StateResult {State=States.WI, TotalVotes=1198800, PercentVote=54.19M, ElectoralVotes=11},
new StateResult {State=States.WY, TotalVotes=133241, PercentVote=70.51M, ElectoralVotes=3}

  }
    };

    protected Candidate _Mondale1984 = new Candidate()
    {
      Name = "Walter Mondale",
      Party = "Democrat",
      Results = new StateResult[]
{
  new StateResult {State=States.AL, TotalVotes=551899, PercentVote=38.28M, ElectoralVotes=0},
new StateResult {State=States.AK, TotalVotes=62007, PercentVote=29.87M, ElectoralVotes=0},
new StateResult {State=States.AZ, TotalVotes=333854, PercentVote=32.54M, ElectoralVotes=0},
new StateResult {State=States.AR, TotalVotes=338646, PercentVote=38.29M, ElectoralVotes=0},
new StateResult {State=States.CA, TotalVotes=3922519, PercentVote=41.27M, ElectoralVotes=0},
new StateResult {State=States.CO, TotalVotes=454974, PercentVote=35.12M, ElectoralVotes=0},
new StateResult {State=States.CT, TotalVotes=569597, PercentVote=38.83M, ElectoralVotes=0},
new StateResult {State=States.DE, TotalVotes=101656, PercentVote=39.93M, ElectoralVotes=0},
new StateResult {State=States.DC, TotalVotes=180408, PercentVote=85.38M, ElectoralVotes=3},
new StateResult {State=States.FL, TotalVotes=1448816, PercentVote=34.66M, ElectoralVotes=0},
new StateResult {State=States.GA, TotalVotes=706628, PercentVote=39.79M, ElectoralVotes=0},
new StateResult {State=States.HI, TotalVotes=147154, PercentVote=43.82M, ElectoralVotes=0},
new StateResult {State=States.ID, TotalVotes=108510, PercentVote=26.39M, ElectoralVotes=0},
new StateResult {State=States.IL, TotalVotes=2086499, PercentVote=43.3M, ElectoralVotes=0},
new StateResult {State=States.IN, TotalVotes=841481, PercentVote=37.68M, ElectoralVotes=0},
new StateResult {State=States.IA, TotalVotes=605620, PercentVote=45.89M, ElectoralVotes=0},
new StateResult {State=States.KS, TotalVotes=333149, PercentVote=32.6M, ElectoralVotes=0},
new StateResult {State=States.KY, TotalVotes=539589, PercentVote=39.37M, ElectoralVotes=0},
new StateResult {State=States.LA, TotalVotes=651586, PercentVote=38.18M, ElectoralVotes=0},
new StateResult {State=States.ME, TotalVotes=214515, PercentVote=38.78M, ElectoralVotes=0},
new StateResult {State=States.MD, TotalVotes=787935, PercentVote=47.02M, ElectoralVotes=0},
new StateResult {State=States.MA, TotalVotes=1239606, PercentVote=48.43M, ElectoralVotes=0},
new StateResult {State=States.MI, TotalVotes=1529638, PercentVote=40.24M, ElectoralVotes=0},
new StateResult {State=States.MN, TotalVotes=1036364, PercentVote=49.72M, ElectoralVotes=10},
new StateResult {State=States.MS, TotalVotes=352192, PercentVote=37.46M, ElectoralVotes=0},
new StateResult {State=States.MO, TotalVotes=848583, PercentVote=39.98M, ElectoralVotes=0},
new StateResult {State=States.MT, TotalVotes=146742, PercentVote=38.18M, ElectoralVotes=0},
new StateResult {State=States.NE, TotalVotes=187866, PercentVote=28.81M, ElectoralVotes=0},
new StateResult {State=States.NV, TotalVotes=91655, PercentVote=31.97M, ElectoralVotes=0},
new StateResult {State=States.NH, TotalVotes=120395, PercentVote=30.95M, ElectoralVotes=0},
new StateResult {State=States.NJ, TotalVotes=1261323, PercentVote=39.2M, ElectoralVotes=0},
new StateResult {State=States.NM, TotalVotes=201769, PercentVote=39.23M, ElectoralVotes=0},
new StateResult {State=States.NY, TotalVotes=3119609, PercentVote=45.83M, ElectoralVotes=0},
new StateResult {State=States.NC, TotalVotes=824287, PercentVote=37.89M, ElectoralVotes=0},
new StateResult {State=States.ND, TotalVotes=104429, PercentVote=33.8M, ElectoralVotes=0},
new StateResult {State=States.OH, TotalVotes=1825440, PercentVote=40.14M, ElectoralVotes=0},
new StateResult {State=States.OK, TotalVotes=385080, PercentVote=30.67M, ElectoralVotes=0},
new StateResult {State=States.OR, TotalVotes=536479, PercentVote=43.74M, ElectoralVotes=0},
new StateResult {State=States.PA, TotalVotes=2228131, PercentVote=45.99M, ElectoralVotes=0},
new StateResult {State=States.RI, TotalVotes=197106, PercentVote=48.02M, ElectoralVotes=0},
new StateResult {State=States.SC, TotalVotes=344470, PercentVote=35.57M, ElectoralVotes=0},
new StateResult {State=States.SD, TotalVotes=116113, PercentVote=36.53M, ElectoralVotes=0},
new StateResult {State=States.TN, TotalVotes=711714, PercentVote=41.57M, ElectoralVotes=0},
new StateResult {State=States.TX, TotalVotes=1949276, PercentVote=36.11M, ElectoralVotes=0},
new StateResult {State=States.UT, TotalVotes=155369, PercentVote=24.68M, ElectoralVotes=0},
new StateResult {State=States.VT, TotalVotes=95730, PercentVote=40.81M, ElectoralVotes=0},
new StateResult {State=States.VA, TotalVotes=796250, PercentVote=37.09M, ElectoralVotes=0},
new StateResult {State=States.WA, TotalVotes=807352, PercentVote=42.86M, ElectoralVotes=0},
new StateResult {State=States.WV, TotalVotes=328125, PercentVote=44.6M, ElectoralVotes=0},
new StateResult {State=States.WI, TotalVotes=995847, PercentVote=45.02M, ElectoralVotes=0},
new StateResult {State=States.WY, TotalVotes=53370, PercentVote=28.24M, ElectoralVotes=0}

}
    };

    #endregion

    #region 1988

    protected Candidate _Bush1988 = new Candidate()
    {
      Name = "George H.W. Bush",
      Party = "Republican",
      Results = new StateResult[]
  {
    new StateResult {State=States.AL, TotalVotes=815576, PercentVote=59.17M, ElectoralVotes=9},
new StateResult {State=States.AK, TotalVotes=119251, PercentVote=59.59M, ElectoralVotes=3},
new StateResult {State=States.AZ, TotalVotes=702541, PercentVote=59.95M, ElectoralVotes=7},
new StateResult {State=States.AR, TotalVotes=466578, PercentVote=56.37M, ElectoralVotes=6},
new StateResult {State=States.CA, TotalVotes=5054917, PercentVote=51.13M, ElectoralVotes=47},
new StateResult {State=States.CO, TotalVotes=728177, PercentVote=53.06M, ElectoralVotes=8},
new StateResult {State=States.CT, TotalVotes=750241, PercentVote=51.98M, ElectoralVotes=8},
new StateResult {State=States.DE, TotalVotes=139639, PercentVote=55.88M, ElectoralVotes=3},
new StateResult {State=States.DC, TotalVotes=27590, PercentVote=14.3M, ElectoralVotes=0},
new StateResult {State=States.FL, TotalVotes=2618885, PercentVote=60.87M, ElectoralVotes=21},
new StateResult {State=States.GA, TotalVotes=1081331, PercentVote=59.75M, ElectoralVotes=12},
new StateResult {State=States.HI, TotalVotes=158625, PercentVote=44.75M, ElectoralVotes=0},
new StateResult {State=States.ID, TotalVotes=253881, PercentVote=62.08M, ElectoralVotes=4},
new StateResult {State=States.IL, TotalVotes=2310939, PercentVote=50.69M, ElectoralVotes=24},
new StateResult {State=States.IN, TotalVotes=1297763, PercentVote=59.84M, ElectoralVotes=12},
new StateResult {State=States.IA, TotalVotes=545355, PercentVote=44.5M, ElectoralVotes=0},
new StateResult {State=States.KS, TotalVotes=554049, PercentVote=55.79M, ElectoralVotes=7},
new StateResult {State=States.KY, TotalVotes=734281, PercentVote=55.52M, ElectoralVotes=9},
new StateResult {State=States.LA, TotalVotes=883702, PercentVote=54.27M, ElectoralVotes=10},
new StateResult {State=States.ME, TotalVotes=307131, PercentVote=55.34M, ElectoralVotes=4},
new StateResult {State=States.MD, TotalVotes=876167, PercentVote=51.11M, ElectoralVotes=10},
new StateResult {State=States.MA, TotalVotes=1194644, PercentVote=45.38M, ElectoralVotes=0},
new StateResult {State=States.MI, TotalVotes=1965486, PercentVote=53.57M, ElectoralVotes=20},
new StateResult {State=States.MN, TotalVotes=962337, PercentVote=45.9M, ElectoralVotes=0},
new StateResult {State=States.MS, TotalVotes=557890, PercentVote=59.89M, ElectoralVotes=7},
new StateResult {State=States.MO, TotalVotes=1084953, PercentVote=51.83M, ElectoralVotes=11},
new StateResult {State=States.MT, TotalVotes=190412, PercentVote=52.07M, ElectoralVotes=4},
new StateResult {State=States.NE, TotalVotes=398447, PercentVote=60.15M, ElectoralVotes=5},
new StateResult {State=States.NV, TotalVotes=206040, PercentVote=58.86M, ElectoralVotes=4},
new StateResult {State=States.NH, TotalVotes=281537, PercentVote=62.49M, ElectoralVotes=4},
new StateResult {State=States.NJ, TotalVotes=1743192, PercentVote=56.24M, ElectoralVotes=16},
new StateResult {State=States.NM, TotalVotes=270341, PercentVote=51.86M, ElectoralVotes=5},
new StateResult {State=States.NY, TotalVotes=3081871, PercentVote=47.52M, ElectoralVotes=0},
new StateResult {State=States.NC, TotalVotes=1237258, PercentVote=57.97M, ElectoralVotes=13},
new StateResult {State=States.ND, TotalVotes=166559, PercentVote=56.03M, ElectoralVotes=3},
new StateResult {State=States.OH, TotalVotes=2416549, PercentVote=55M, ElectoralVotes=23},
new StateResult {State=States.OK, TotalVotes=678367, PercentVote=57.93M, ElectoralVotes=8},
new StateResult {State=States.OR, TotalVotes=560126, PercentVote=46.61M, ElectoralVotes=0},
new StateResult {State=States.PA, TotalVotes=2300087, PercentVote=50.7M, ElectoralVotes=25},
new StateResult {State=States.RI, TotalVotes=177761, PercentVote=43.93M, ElectoralVotes=0},
new StateResult {State=States.SC, TotalVotes=606443, PercentVote=61.5M, ElectoralVotes=8},
new StateResult {State=States.SD, TotalVotes=165415, PercentVote=52.85M, ElectoralVotes=3},
new StateResult {State=States.TN, TotalVotes=947233, PercentVote=57.89M, ElectoralVotes=11},
new StateResult {State=States.TX, TotalVotes=3036829, PercentVote=55.95M, ElectoralVotes=29},
new StateResult {State=States.UT, TotalVotes=428442, PercentVote=66.22M, ElectoralVotes=5},
new StateResult {State=States.VT, TotalVotes=124331, PercentVote=51.1M, ElectoralVotes=3},
new StateResult {State=States.VA, TotalVotes=1309162, PercentVote=59.74M, ElectoralVotes=12},
new StateResult {State=States.WA, TotalVotes=903835, PercentVote=48.46M, ElectoralVotes=0},
new StateResult {State=States.WV, TotalVotes=310065, PercentVote=47.46M, ElectoralVotes=0},
new StateResult {State=States.WI, TotalVotes=1047499, PercentVote=47.8M, ElectoralVotes=0},
new StateResult {State=States.WY, TotalVotes=106867, PercentVote=60.53M, ElectoralVotes=3}

  }
    };

    protected Candidate _Dukakis1988 = new Candidate()
    {
      Name = "Michael Dukakis",
      Party = "Democrat",
      Results = new StateResult[]
  {
    new StateResult {State=States.AL, TotalVotes=549506, PercentVote=39.86M, ElectoralVotes=0},
new StateResult {State=States.AK, TotalVotes=72584, PercentVote=36.27M, ElectoralVotes=0},
new StateResult {State=States.AZ, TotalVotes=454029, PercentVote=38.74M, ElectoralVotes=0},
new StateResult {State=States.AR, TotalVotes=349237, PercentVote=42.19M, ElectoralVotes=0},
new StateResult {State=States.CA, TotalVotes=4702233, PercentVote=47.56M, ElectoralVotes=0},
new StateResult {State=States.CO, TotalVotes=621453, PercentVote=45.28M, ElectoralVotes=0},
new StateResult {State=States.CT, TotalVotes=676584, PercentVote=46.87M, ElectoralVotes=0},
new StateResult {State=States.DE, TotalVotes=108647, PercentVote=43.48M, ElectoralVotes=0},
new StateResult {State=States.DC, TotalVotes=159407, PercentVote=82.65M, ElectoralVotes=3},
new StateResult {State=States.FL, TotalVotes=1656701, PercentVote=38.51M, ElectoralVotes=0},
new StateResult {State=States.GA, TotalVotes=714792, PercentVote=39.5M, ElectoralVotes=0},
new StateResult {State=States.HI, TotalVotes=192364, PercentVote=54.27M, ElectoralVotes=4},
new StateResult {State=States.ID, TotalVotes=147272, PercentVote=36.01M, ElectoralVotes=0},
new StateResult {State=States.IL, TotalVotes=2215940, PercentVote=48.6M, ElectoralVotes=0},
new StateResult {State=States.IN, TotalVotes=860643, PercentVote=39.69M, ElectoralVotes=0},
new StateResult {State=States.IA, TotalVotes=670557, PercentVote=54.71M, ElectoralVotes=8},
new StateResult {State=States.KS, TotalVotes=422636, PercentVote=42.56M, ElectoralVotes=0},
new StateResult {State=States.KY, TotalVotes=580368, PercentVote=43.88M, ElectoralVotes=0},
new StateResult {State=States.LA, TotalVotes=734281, PercentVote=44.06M, ElectoralVotes=0},
new StateResult {State=States.ME, TotalVotes=243569, PercentVote=43.88M, ElectoralVotes=0},
new StateResult {State=States.MD, TotalVotes=826304, PercentVote=48.2M, ElectoralVotes=0},
new StateResult {State=States.MA, TotalVotes=1401406, PercentVote=53.23M, ElectoralVotes=13},
new StateResult {State=States.MI, TotalVotes=1675783, PercentVote=45.67M, ElectoralVotes=0},
new StateResult {State=States.MN, TotalVotes=1109471, PercentVote=52.91M, ElectoralVotes=10},
new StateResult {State=States.MS, TotalVotes=363921, PercentVote=39.07M, ElectoralVotes=0},
new StateResult {State=States.MO, TotalVotes=1001619, PercentVote=47.85M, ElectoralVotes=0},
new StateResult {State=States.MT, TotalVotes=168936, PercentVote=46.2M, ElectoralVotes=0},
new StateResult {State=States.NE, TotalVotes=259646, PercentVote=39.2M, ElectoralVotes=0},
new StateResult {State=States.NV, TotalVotes=132738, PercentVote=37.92M, ElectoralVotes=0},
new StateResult {State=States.NH, TotalVotes=163696, PercentVote=36.33M, ElectoralVotes=0},
new StateResult {State=States.NJ, TotalVotes=1320352, PercentVote=42.6M, ElectoralVotes=0},
new StateResult {State=States.NM, TotalVotes=244497, PercentVote=46.9M, ElectoralVotes=0},
new StateResult {State=States.NY, TotalVotes=3347882, PercentVote=51.62M, ElectoralVotes=36},
new StateResult {State=States.NC, TotalVotes=890167, PercentVote=41.71M, ElectoralVotes=0},
new StateResult {State=States.ND, TotalVotes=127739, PercentVote=42.97M, ElectoralVotes=0},
new StateResult {State=States.OH, TotalVotes=1939629, PercentVote=44.15M, ElectoralVotes=0},
new StateResult {State=States.OK, TotalVotes=483423, PercentVote=41.28M, ElectoralVotes=0},
new StateResult {State=States.OR, TotalVotes=616206, PercentVote=51.28M, ElectoralVotes=7},
new StateResult {State=States.PA, TotalVotes=2194944, PercentVote=48.39M, ElectoralVotes=0},
new StateResult {State=States.RI, TotalVotes=225123, PercentVote=55.64M, ElectoralVotes=4},
new StateResult {State=States.SC, TotalVotes=370554, PercentVote=37.58M, ElectoralVotes=0},
new StateResult {State=States.SD, TotalVotes=145560, PercentVote=46.51M, ElectoralVotes=0},
new StateResult {State=States.TN, TotalVotes=679794, PercentVote=41.55M, ElectoralVotes=0},
new StateResult {State=States.TX, TotalVotes=2352748, PercentVote=43.35M, ElectoralVotes=0},
new StateResult {State=States.UT, TotalVotes=207343, PercentVote=32.05M, ElectoralVotes=0},
new StateResult {State=States.VT, TotalVotes=115775, PercentVote=47.58M, ElectoralVotes=0},
new StateResult {State=States.VA, TotalVotes=859799, PercentVote=39.23M, ElectoralVotes=0},
new StateResult {State=States.WA, TotalVotes=933516, PercentVote=50.05M, ElectoralVotes=10},
new StateResult {State=States.WV, TotalVotes=341016, PercentVote=52.2M, ElectoralVotes=5},
new StateResult {State=States.WI, TotalVotes=1126794, PercentVote=51.41M, ElectoralVotes=11},
new StateResult {State=States.WY, TotalVotes=67113, PercentVote=38.01M, ElectoralVotes=0}

  }
    };

    #endregion

    #region 1992

    protected Candidate _Bush1992 = new Candidate()
    {
      Name = "George H.W. Bush",
      Party = "Republican",
      Results = new StateResult[]
  {
    new StateResult {State=States.AL, TotalVotes=804283, PercentVote=47.65M, ElectoralVotes=9},
new StateResult {State=States.AK, TotalVotes=102000, PercentVote=39.46M, ElectoralVotes=3},
new StateResult {State=States.AZ, TotalVotes=572086, PercentVote=38.47M, ElectoralVotes=8},
new StateResult {State=States.AR, TotalVotes=337324, PercentVote=35.48M, ElectoralVotes=0},
new StateResult {State=States.CA, TotalVotes=3630574, PercentVote=32.61M, ElectoralVotes=0},
new StateResult {State=States.CO, TotalVotes=562850, PercentVote=35.87M, ElectoralVotes=0},
new StateResult {State=States.CT, TotalVotes=578313, PercentVote=35.78M, ElectoralVotes=0},
new StateResult {State=States.DE, TotalVotes=102313, PercentVote=35.78M, ElectoralVotes=0},
new StateResult {State=States.DC, TotalVotes=20698, PercentVote=9.1M, ElectoralVotes=0},
new StateResult {State=States.FL, TotalVotes=2173310, PercentVote=40.89M, ElectoralVotes=25},
new StateResult {State=States.GA, TotalVotes=995252, PercentVote=42.88M, ElectoralVotes=0},
new StateResult {State=States.HI, TotalVotes=136822, PercentVote=36.7M, ElectoralVotes=0},
new StateResult {State=States.ID, TotalVotes=202645, PercentVote=42.03M, ElectoralVotes=4},
new StateResult {State=States.IL, TotalVotes=1734096, PercentVote=34.34M, ElectoralVotes=0},
new StateResult {State=States.IN, TotalVotes=989375, PercentVote=42.91M, ElectoralVotes=12},
new StateResult {State=States.IA, TotalVotes=504891, PercentVote=37.27M, ElectoralVotes=0},
new StateResult {State=States.KS, TotalVotes=449951, PercentVote=38.88M, ElectoralVotes=6},
new StateResult {State=States.KY, TotalVotes=617178, PercentVote=41.34M, ElectoralVotes=0},
new StateResult {State=States.LA, TotalVotes=733386, PercentVote=40.97M, ElectoralVotes=0},
new StateResult {State=States.ME, TotalVotes=206504, PercentVote=30.39M, ElectoralVotes=0},
new StateResult {State=States.MD, TotalVotes=707094, PercentVote=35.62M, ElectoralVotes=0},
new StateResult {State=States.MA, TotalVotes=805049, PercentVote=29.03M, ElectoralVotes=0},
new StateResult {State=States.MI, TotalVotes=1554940, PercentVote=36.38M, ElectoralVotes=0},
new StateResult {State=States.MN, TotalVotes=747841, PercentVote=31.85M, ElectoralVotes=0},
new StateResult {State=States.MS, TotalVotes=487793, PercentVote=49.68M, ElectoralVotes=7},
new StateResult {State=States.MO, TotalVotes=811159, PercentVote=33.92M, ElectoralVotes=0},
new StateResult {State=States.MT, TotalVotes=144207, PercentVote=35.12M, ElectoralVotes=0},
new StateResult {State=States.NE, TotalVotes=344346, PercentVote=46.58M, ElectoralVotes=5},
new StateResult {State=States.NV, TotalVotes=175828, PercentVote=34.73M, ElectoralVotes=0},
new StateResult {State=States.NH, TotalVotes=202484, PercentVote=37.69M, ElectoralVotes=0},
new StateResult {State=States.NJ, TotalVotes=1356865, PercentVote=40.58M, ElectoralVotes=0},
new StateResult {State=States.NM, TotalVotes=212824, PercentVote=37.34M, ElectoralVotes=0},
new StateResult {State=States.NY, TotalVotes=2346649, PercentVote=33.88M, ElectoralVotes=0},
new StateResult {State=States.NC, TotalVotes=1134661, PercentVote=43.44M, ElectoralVotes=14},
new StateResult {State=States.ND, TotalVotes=136244, PercentVote=44.22M, ElectoralVotes=3},
new StateResult {State=States.OH, TotalVotes=1894310, PercentVote=38.35M, ElectoralVotes=0},
new StateResult {State=States.OK, TotalVotes=592929, PercentVote=42.65M, ElectoralVotes=8},
new StateResult {State=States.OR, TotalVotes=475757, PercentVote=32.53M, ElectoralVotes=0},
new StateResult {State=States.PA, TotalVotes=1791841, PercentVote=36.13M, ElectoralVotes=0},
new StateResult {State=States.RI, TotalVotes=131601, PercentVote=29.02M, ElectoralVotes=0},
new StateResult {State=States.SC, TotalVotes=577507, PercentVote=48.02M, ElectoralVotes=8},
new StateResult {State=States.SD, TotalVotes=136718, PercentVote=40.66M, ElectoralVotes=3},
new StateResult {State=States.TN, TotalVotes=841300, PercentVote=42.43M, ElectoralVotes=0},
new StateResult {State=States.TX, TotalVotes=2496071, PercentVote=40.56M, ElectoralVotes=32},
new StateResult {State=States.UT, TotalVotes=322632, PercentVote=43.36M, ElectoralVotes=5},
new StateResult {State=States.VT, TotalVotes=88122, PercentVote=30.42M, ElectoralVotes=0},
new StateResult {State=States.VA, TotalVotes=1150517, PercentVote=44.97M, ElectoralVotes=13},
new StateResult {State=States.WA, TotalVotes=731234, PercentVote=31.97M, ElectoralVotes=0},
new StateResult {State=States.WV, TotalVotes=241974, PercentVote=35.39M, ElectoralVotes=0},
new StateResult {State=States.WI, TotalVotes=930855, PercentVote=36.78M, ElectoralVotes=0},
new StateResult {State=States.WY, TotalVotes=79347, PercentVote=39.7M, ElectoralVotes=3}

  }
    };

    protected Candidate _Clinton1992 = new Candidate()
    {
      Name = "Bill Clinton",
      Party = "Democrat",
      Results = new StateResult[]
  {
    new StateResult {State=States.AL, TotalVotes=690080, PercentVote=40.88M, ElectoralVotes=0},
new StateResult {State=States.AK, TotalVotes=78294, PercentVote=30.29M, ElectoralVotes=0},
new StateResult {State=States.AZ, TotalVotes=543050, PercentVote=36.52M, ElectoralVotes=0},
new StateResult {State=States.AR, TotalVotes=505823, PercentVote=53.21M, ElectoralVotes=6},
new StateResult {State=States.CA, TotalVotes=5121325, PercentVote=46.01M, ElectoralVotes=54},
new StateResult {State=States.CO, TotalVotes=629681, PercentVote=40.13M, ElectoralVotes=8},
new StateResult {State=States.CT, TotalVotes=682318, PercentVote=42.21M, ElectoralVotes=8},
new StateResult {State=States.DE, TotalVotes=126054, PercentVote=43.52M, ElectoralVotes=3},
new StateResult {State=States.DC, TotalVotes=192619, PercentVote=84.64M, ElectoralVotes=3},
new StateResult {State=States.FL, TotalVotes=2072698, PercentVote=39M, ElectoralVotes=0},
new StateResult {State=States.GA, TotalVotes=1008966, PercentVote=43.47M, ElectoralVotes=13},
new StateResult {State=States.HI, TotalVotes=179310, PercentVote=48.09M, ElectoralVotes=4},
new StateResult {State=States.ID, TotalVotes=137013, PercentVote=28.42M, ElectoralVotes=0},
new StateResult {State=States.IL, TotalVotes=2453350, PercentVote=48.58M, ElectoralVotes=22},
new StateResult {State=States.IN, TotalVotes=848420, PercentVote=36.79M, ElectoralVotes=0},
new StateResult {State=States.IA, TotalVotes=586353, PercentVote=43.29M, ElectoralVotes=7},
new StateResult {State=States.KS, TotalVotes=390434, PercentVote=33.74M, ElectoralVotes=0},
new StateResult {State=States.KY, TotalVotes=665104, PercentVote=44.55M, ElectoralVotes=8},
new StateResult {State=States.LA, TotalVotes=815971, PercentVote=45.58M, ElectoralVotes=9},
new StateResult {State=States.ME, TotalVotes=263420, PercentVote=38.77M, ElectoralVotes=4},
new StateResult {State=States.MD, TotalVotes=988571, PercentVote=49.8M, ElectoralVotes=10},
new StateResult {State=States.MA, TotalVotes=1318662, PercentVote=47.54M, ElectoralVotes=12},
new StateResult {State=States.MI, TotalVotes=1871182, PercentVote=43.77M, ElectoralVotes=18},
new StateResult {State=States.MN, TotalVotes=1020997, PercentVote=43.48M, ElectoralVotes=10},
new StateResult {State=States.MS, TotalVotes=400258, PercentVote=40.77M, ElectoralVotes=0},
new StateResult {State=States.MO, TotalVotes=1053873, PercentVote=44.07M, ElectoralVotes=11},
new StateResult {State=States.MT, TotalVotes=154507, PercentVote=37.63M, ElectoralVotes=3},
new StateResult {State=States.NE, TotalVotes=217344, PercentVote=29.4M, ElectoralVotes=0},
new StateResult {State=States.NV, TotalVotes=189148, PercentVote=37.36M, ElectoralVotes=4},
new StateResult {State=States.NH, TotalVotes=209040, PercentVote=38.91M, ElectoralVotes=4},
new StateResult {State=States.NJ, TotalVotes=1436206, PercentVote=42.95M, ElectoralVotes=15},
new StateResult {State=States.NM, TotalVotes=261617, PercentVote=45.9M, ElectoralVotes=5},
new StateResult {State=States.NY, TotalVotes=3444450, PercentVote=49.73M, ElectoralVotes=33},
new StateResult {State=States.NC, TotalVotes=1114042, PercentVote=42.65M, ElectoralVotes=0},
new StateResult {State=States.ND, TotalVotes=99168, PercentVote=32.18M, ElectoralVotes=0},
new StateResult {State=States.OH, TotalVotes=1984942, PercentVote=40.18M, ElectoralVotes=21},
new StateResult {State=States.OK, TotalVotes=473066, PercentVote=34.02M, ElectoralVotes=0},
new StateResult {State=States.OR, TotalVotes=621314, PercentVote=42.48M, ElectoralVotes=7},
new StateResult {State=States.PA, TotalVotes=2239164, PercentVote=45.15M, ElectoralVotes=23},
new StateResult {State=States.RI, TotalVotes=213299, PercentVote=47.04M, ElectoralVotes=4},
new StateResult {State=States.SC, TotalVotes=479514, PercentVote=39.88M, ElectoralVotes=0},
new StateResult {State=States.SD, TotalVotes=124888, PercentVote=37.14M, ElectoralVotes=0},
new StateResult {State=States.TN, TotalVotes=933521, PercentVote=47.08M, ElectoralVotes=11},
new StateResult {State=States.TX, TotalVotes=2281815, PercentVote=37.08M, ElectoralVotes=0},
new StateResult {State=States.UT, TotalVotes=183429, PercentVote=24.65M, ElectoralVotes=0},
new StateResult {State=States.VT, TotalVotes=133592, PercentVote=46.11M, ElectoralVotes=3},
new StateResult {State=States.VA, TotalVotes=1038650, PercentVote=40.59M, ElectoralVotes=0},
new StateResult {State=States.WA, TotalVotes=993037, PercentVote=43.41M, ElectoralVotes=11},
new StateResult {State=States.WV, TotalVotes=331001, PercentVote=48.41M, ElectoralVotes=5},
new StateResult {State=States.WI, TotalVotes=1041066, PercentVote=41.13M, ElectoralVotes=11},
new StateResult {State=States.WY, TotalVotes=68160, PercentVote=34.1M, ElectoralVotes=0}

  }
    };

    #endregion

    #region 1996

    protected Candidate _Clinton1996 = new Candidate()
    {
      Name = "Bill Clinton",
      Party = "Democrat",
      Results = new StateResult[]
{
  new StateResult {State=States.AL, TotalVotes=662165, PercentVote=43.16M, ElectoralVotes=0},
new StateResult {State=States.AK, TotalVotes=80380, PercentVote=33.27M, ElectoralVotes=0},
new StateResult {State=States.AZ, TotalVotes=653288, PercentVote=46.52M, ElectoralVotes=8},
new StateResult {State=States.AR, TotalVotes=475171, PercentVote=53.74M, ElectoralVotes=6},
new StateResult {State=States.CA, TotalVotes=5119835, PercentVote=51.1M, ElectoralVotes=54},
new StateResult {State=States.CO, TotalVotes=671152, PercentVote=44.43M, ElectoralVotes=0},
new StateResult {State=States.CT, TotalVotes=735740, PercentVote=52.83M, ElectoralVotes=8},
new StateResult {State=States.DE, TotalVotes=140355, PercentVote=51.8M, ElectoralVotes=3},
new StateResult {State=States.DC, TotalVotes=158220, PercentVote=85.19M, ElectoralVotes=3},
new StateResult {State=States.FL, TotalVotes=2546870, PercentVote=48.02M, ElectoralVotes=25},
new StateResult {State=States.GA, TotalVotes=1053849, PercentVote=45.84M, ElectoralVotes=0},
new StateResult {State=States.HI, TotalVotes=205012, PercentVote=56.93M, ElectoralVotes=4},
new StateResult {State=States.ID, TotalVotes=165443, PercentVote=33.65M, ElectoralVotes=0},
new StateResult {State=States.IL, TotalVotes=2341744, PercentVote=54.32M, ElectoralVotes=22},
new StateResult {State=States.IN, TotalVotes=887424, PercentVote=41.55M, ElectoralVotes=0},
new StateResult {State=States.IA, TotalVotes=620258, PercentVote=50.26M, ElectoralVotes=7},
new StateResult {State=States.KS, TotalVotes=387659, PercentVote=36.08M, ElectoralVotes=0},
new StateResult {State=States.KY, TotalVotes=636614, PercentVote=45.84M, ElectoralVotes=8},
new StateResult {State=States.LA, TotalVotes=927837, PercentVote=52.01M, ElectoralVotes=9},
new StateResult {State=States.ME, TotalVotes=312788, PercentVote=51.62M, ElectoralVotes=4},
new StateResult {State=States.MD, TotalVotes=966207, PercentVote=54.25M, ElectoralVotes=10},
new StateResult {State=States.MA, TotalVotes=1571763, PercentVote=61.47M, ElectoralVotes=12},
new StateResult {State=States.MI, TotalVotes=1989653, PercentVote=51.69M, ElectoralVotes=18},
new StateResult {State=States.MN, TotalVotes=1120438, PercentVote=51.1M, ElectoralVotes=10},
new StateResult {State=States.MS, TotalVotes=394022, PercentVote=44.08M, ElectoralVotes=0},
new StateResult {State=States.MO, TotalVotes=1025935, PercentVote=47.54M, ElectoralVotes=11},
new StateResult {State=States.MT, TotalVotes=167922, PercentVote=41.23M, ElectoralVotes=0},
new StateResult {State=States.NE, TotalVotes=236761, PercentVote=34.95M, ElectoralVotes=0},
new StateResult {State=States.NV, TotalVotes=203974, PercentVote=43.93M, ElectoralVotes=4},
new StateResult {State=States.NH, TotalVotes=246214, PercentVote=49.32M, ElectoralVotes=4},
new StateResult {State=States.NJ, TotalVotes=1652329, PercentVote=53.72M, ElectoralVotes=15},
new StateResult {State=States.NM, TotalVotes=273495, PercentVote=49.18M, ElectoralVotes=5},
new StateResult {State=States.NY, TotalVotes=3756177, PercentVote=59.47M, ElectoralVotes=33},
new StateResult {State=States.NC, TotalVotes=1107849, PercentVote=44.04M, ElectoralVotes=0},
new StateResult {State=States.ND, TotalVotes=106905, PercentVote=40.13M, ElectoralVotes=0},
new StateResult {State=States.OH, TotalVotes=2148222, PercentVote=47.38M, ElectoralVotes=21},
new StateResult {State=States.OK, TotalVotes=488105, PercentVote=40.45M, ElectoralVotes=0},
new StateResult {State=States.OR, TotalVotes=649641, PercentVote=47.15M, ElectoralVotes=7},
new StateResult {State=States.PA, TotalVotes=2215819, PercentVote=49.17M, ElectoralVotes=23},
new StateResult {State=States.RI, TotalVotes=233050, PercentVote=59.71M, ElectoralVotes=4},
new StateResult {State=States.SC, TotalVotes=504051, PercentVote=43.85M, ElectoralVotes=0},
new StateResult {State=States.SD, TotalVotes=139333, PercentVote=43.03M, ElectoralVotes=0},
new StateResult {State=States.TN, TotalVotes=909146, PercentVote=48M, ElectoralVotes=11},
new StateResult {State=States.TX, TotalVotes=2459683, PercentVote=43.83M, ElectoralVotes=0},
new StateResult {State=States.UT, TotalVotes=221633, PercentVote=33.3M, ElectoralVotes=0},
new StateResult {State=States.VT, TotalVotes=137894, PercentVote=53.35M, ElectoralVotes=3},
new StateResult {State=States.VA, TotalVotes=1091060, PercentVote=45.15M, ElectoralVotes=0},
new StateResult {State=States.WA, TotalVotes=1123323, PercentVote=49.84M, ElectoralVotes=11},
new StateResult {State=States.WV, TotalVotes=327812, PercentVote=51.51M, ElectoralVotes=5},
new StateResult {State=States.WI, TotalVotes=1071971, PercentVote=48.81M, ElectoralVotes=11},
new StateResult {State=States.WY, TotalVotes=77934, PercentVote=36.84M, ElectoralVotes=0}

}
    };

    protected Candidate _Dole1996 = new Candidate()
    {
      Name = "Bob Dole",
      Party = "Republican",
      Results = new StateResult[]
{
  new StateResult {State=States.AL, TotalVotes=769044, PercentVote=50.12M, ElectoralVotes=9},
new StateResult {State=States.AK, TotalVotes=122746, PercentVote=50.8M, ElectoralVotes=3},
new StateResult {State=States.AZ, TotalVotes=622073, PercentVote=44.29M, ElectoralVotes=0},
new StateResult {State=States.AR, TotalVotes=325416, PercentVote=36.8M, ElectoralVotes=0},
new StateResult {State=States.CA, TotalVotes=3828380, PercentVote=38.21M, ElectoralVotes=0},
new StateResult {State=States.CO, TotalVotes=691848, PercentVote=45.8M, ElectoralVotes=8},
new StateResult {State=States.CT, TotalVotes=483109, PercentVote=34.69M, ElectoralVotes=0},
new StateResult {State=States.DE, TotalVotes=99062, PercentVote=36.58M, ElectoralVotes=0},
new StateResult {State=States.DC, TotalVotes=17339, PercentVote=9.34M, ElectoralVotes=0},
new StateResult {State=States.FL, TotalVotes=2244536, PercentVote=42.32M, ElectoralVotes=0},
new StateResult {State=States.GA, TotalVotes=1080843, PercentVote=47.01M, ElectoralVotes=13},
new StateResult {State=States.HI, TotalVotes=113943, PercentVote=31.64M, ElectoralVotes=0},
new StateResult {State=States.ID, TotalVotes=256595, PercentVote=52.18M, ElectoralVotes=4},
new StateResult {State=States.IL, TotalVotes=1587021, PercentVote=36.81M, ElectoralVotes=0},
new StateResult {State=States.IN, TotalVotes=1006693, PercentVote=47.13M, ElectoralVotes=12},
new StateResult {State=States.IA, TotalVotes=492644, PercentVote=39.92M, ElectoralVotes=0},
new StateResult {State=States.KS, TotalVotes=583245, PercentVote=54.29M, ElectoralVotes=6},
new StateResult {State=States.KY, TotalVotes=623283, PercentVote=44.88M, ElectoralVotes=0},
new StateResult {State=States.LA, TotalVotes=712586, PercentVote=39.94M, ElectoralVotes=0},
new StateResult {State=States.ME, TotalVotes=186378, PercentVote=30.76M, ElectoralVotes=0},
new StateResult {State=States.MD, TotalVotes=681530, PercentVote=38.27M, ElectoralVotes=0},
new StateResult {State=States.MA, TotalVotes=718107, PercentVote=28.09M, ElectoralVotes=0},
new StateResult {State=States.MI, TotalVotes=1481212, PercentVote=38.48M, ElectoralVotes=0},
new StateResult {State=States.MN, TotalVotes=766476, PercentVote=34.96M, ElectoralVotes=0},
new StateResult {State=States.MS, TotalVotes=439838, PercentVote=49.21M, ElectoralVotes=7},
new StateResult {State=States.MO, TotalVotes=890016, PercentVote=41.24M, ElectoralVotes=0},
new StateResult {State=States.MT, TotalVotes=179652, PercentVote=44.11M, ElectoralVotes=3},
new StateResult {State=States.NE, TotalVotes=363467, PercentVote=53.65M, ElectoralVotes=5},
new StateResult {State=States.NV, TotalVotes=199244, PercentVote=42.91M, ElectoralVotes=0},
new StateResult {State=States.NH, TotalVotes=196532, PercentVote=39.37M, ElectoralVotes=0},
new StateResult {State=States.NJ, TotalVotes=1103078, PercentVote=35.86M, ElectoralVotes=0},
new StateResult {State=States.NM, TotalVotes=232751, PercentVote=41.86M, ElectoralVotes=0},
new StateResult {State=States.NY, TotalVotes=1933492, PercentVote=30.61M, ElectoralVotes=0},
new StateResult {State=States.NC, TotalVotes=1225938, PercentVote=48.73M, ElectoralVotes=14},
new StateResult {State=States.ND, TotalVotes=125050, PercentVote=46.94M, ElectoralVotes=3},
new StateResult {State=States.OH, TotalVotes=1859883, PercentVote=41.02M, ElectoralVotes=0},
new StateResult {State=States.OK, TotalVotes=582315, PercentVote=48.26M, ElectoralVotes=8},
new StateResult {State=States.OR, TotalVotes=538152, PercentVote=39.06M, ElectoralVotes=0},
new StateResult {State=States.PA, TotalVotes=1801169, PercentVote=39.97M, ElectoralVotes=0},
new StateResult {State=States.RI, TotalVotes=104683, PercentVote=26.82M, ElectoralVotes=0},
new StateResult {State=States.SC, TotalVotes=573458, PercentVote=49.89M, ElectoralVotes=8},
new StateResult {State=States.SD, TotalVotes=150543, PercentVote=46.49M, ElectoralVotes=3},
new StateResult {State=States.TN, TotalVotes=863530, PercentVote=45.59M, ElectoralVotes=0},
new StateResult {State=States.TX, TotalVotes=2736167, PercentVote=48.76M, ElectoralVotes=32},
new StateResult {State=States.UT, TotalVotes=361911, PercentVote=54.37M, ElectoralVotes=5},
new StateResult {State=States.VT, TotalVotes=80352, PercentVote=31.09M, ElectoralVotes=0},
new StateResult {State=States.VA, TotalVotes=1138350, PercentVote=47.1M, ElectoralVotes=13},
new StateResult {State=States.WA, TotalVotes=840712, PercentVote=37.3M, ElectoralVotes=0},
new StateResult {State=States.WV, TotalVotes=233946, PercentVote=36.76M, ElectoralVotes=0},
new StateResult {State=States.WI, TotalVotes=845029, PercentVote=38.48M, ElectoralVotes=0},
new StateResult {State=States.WY, TotalVotes=105388, PercentVote=49.81M, ElectoralVotes=3}

}
    };

    #endregion

    protected Tuple<int, Candidate[]>[] Candidates
    {
      get
      {
        return new[] {
          new Tuple<int, Candidate[]>(1980, new Candidate[] { _Reagan1980, _Carter1980 }),
          new Tuple<int, Candidate[]>(1984, new Candidate[] { _Reagan1984, _Mondale1984 }),
          new Tuple<int, Candidate[]>(1988, new Candidate[] { _Bush1988, _Dukakis1988 }),
          new Tuple<int, Candidate[]>(1992, new Candidate[] { _Bush1992, _Clinton1992}),
          new Tuple<int, Candidate[]>(1996, new Candidate[] { _Dole1996, _Clinton1996})
        };
      }
    }

  }
}
