using Saber.Vendor;

namespace Saber.Vendors.Marketplace
{
    public class Info : IVendorInfo
    {
        public string Key { get; set; } = "Market";
        public string Name { get; set; } = "Market";
        public string Description { get; set; } = "Browse an online marketplace for web design templates that you can download & use as a starting point when building a new website.";
        public string Icon { get; set; } = "";
        public Vendor.Version Version { get; set; } = "1.0.0.0";
    }
}
