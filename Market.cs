namespace Saber.Vendors.Market
{
    public class Market : Service
    {
        public string Toolbar()
        {
            if (!CheckSecurity()) { return AccessDenied(); }
            return Cache.LoadFile("Vendors/Market/toolbar.html");
        }
    }
}
