using System;
using System.Collections.Generic;
using System.Linq;
using Saber.Vendor;

namespace Saber.Vendors.Market
{
    public class Market : Service, IVendorService
    {
        public string Filter(int categoryId, int start = 1, int length = 50, string search = "")
        {
            return "";
        }
    }
}
