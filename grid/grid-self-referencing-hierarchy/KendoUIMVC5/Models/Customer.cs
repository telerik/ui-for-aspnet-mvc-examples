namespace KendoUIMVC5.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public string Name { get; set; }
        public double Sales { get; set; }
    }
}