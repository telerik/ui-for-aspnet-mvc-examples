using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace KendoUIMVC5.Models
{
    public class Person
    {
        [Editable(false)]
        public int PersonID { get; set; }
        public string Name { get; set; }
        public Role Role { get; set; }
        public DateTime BirthDate { get; set; }
    }

    [TypeConverter(typeof(LocalizedEnumConverter))]
    public enum Role
	{
         Admin,
         User,
         SuperUser
	}
}