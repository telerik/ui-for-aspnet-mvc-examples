using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoUIMVC5.Models
{
    public class CarsService
    {
        private Random random = new Random();
        private Dictionary<string, List<string>> data = new Dictionary<string, List<string>>();

        public CarsService()
        {
            data.Add("BMW", new List<string> {
                "116i",
                "116d",
                "118i",
                "118d",
                "120i",
                "120d",
                "125i",
                "125d",
                "130i",
                "135i",
                "235i",
                "330i",
                "330d",
                "335i",
                "335d",
                "340i",
                "430i",
                "440i",
                "530i",
                "530d",
                "535i",
                "535d",
                "540i",
                "540d",
                "550i",
                "550d",
                "640i",
                "650i",
                "750i",
                "760i",
                "X1",
                "X2",
                "X3",
                "X4",
                "x5",
                "X6"
            });

            data.Add("Audi", new List<string> {
                "A1",
                "A2",
                "A3",
                "A4",
                "A5",
                "A6",
                "A7",
                "A8",
                "Q1",
                "Q2",
                "Q3",
                "Q5",
                "Q7"
            });

            data.Add("Mercedes-Benz", new List<string> {
                "A",
                "B",
                "C",
                "E",
                "S",
                "SL",
                "ML",
                "G",
                "GL",
                "CLK",
                "SLK",
                "SLS",
                "GLS",
                "GLE",
                "GLK",
                "GLC"
            });

            data.Add("Volkswagen", new List<string> {
                "Up",
                "Lupo",
                "Polo",
                "Golf",
                "Jetta",
                "Passat",
                "Arteon",
                "Caddy",
                "Touran",
                "Vento",
                "Touareg",
                "Tiguan",
                "T-Roc",
                "T-Cross",
                "Scirocco",
                "Beetle"
            });
        }

        public ICollection<Car> GetAllCars()
        {
            var result = new List<Car>();

            for (int i = 0; i < 1000; i++)
            {
                var make = data.ElementAt(random.Next(0, 3));
                result.Add(new Car
                {
                    Id = Guid.NewGuid(),
                    Make = make.Key,
                    Model = make.Value[random.Next(0, make.Value.Count)],
                    ProductionDate = new DateTimeOffset(random.Next(2000, 2020), random.Next(1, 11), random.Next(1, 27), random.Next(1, 23), random.Next(1, 59), random.Next(0,1), TimeSpan.Zero)
                });
            }

            return result;
        }
    }
}