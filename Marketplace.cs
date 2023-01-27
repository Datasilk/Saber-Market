namespace Saber.Vendors.Marketplace
{
    public class Marketplace : Service
    {
        public string Toolbar()
        {
            if (!CheckSecurity()) { return AccessDenied(); }
            return Cache.LoadFile("Vendors/Marketplace/toolbar.html");
        }
    }
}
