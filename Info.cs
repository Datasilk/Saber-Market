using Saber.Vendor;

namespace Saber.Vendors.Market
{
    public class Info : IVendorInfo
    {
        public string Key { get; set; } = "Market";
        public string Name { get; set; } = "Market";
        public string Description { get; set; } = "Browse an online market of website templates that you can download & use as a starting point.";
        public string Icon { get; set; }
        public Version Version { get; set; } = "1.0.0.0";
    }
}
