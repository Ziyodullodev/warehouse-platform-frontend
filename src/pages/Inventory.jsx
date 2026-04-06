import React from 'react';

const Inventory = () => {
  const items = [
    {
      sku: "ARCH-V1-042",
      name: "Tactile Sensor Hub",
      category: "Automation Hardware",
      price: "$492.00",
      status: "In Stock",
      statusColor: "bg-primary-container text-on-primary-container",
      stockLevel: 84,
      stockBarColor: "bg-primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtFNJ5yPq-uUop60sQjiFBCtODoSFplkw1buumsIVPqPG35hh3hlMuXQXIFtswzIdwbvtent-FjGliH83RCV47H6LmsRr_8u-tNRxW7z10c42XdKfNbzgu6M4uUEFtu6SvgXTrqoysMv3Iq_qvU2EHuozS7eRdS6DAFWBrmttFiC4G3VTHtM8Y7vE8VOL8Jy0oeCjD7VSpZVS3G6hJkKh_4fKEM8J1uq0FyAkK-IVX_B4djTovMTDZ39zx4DN59GlVoDK82aP9-7o"
    },
    {
      sku: "LGT-X9-221",
      name: "Modular Connector Kit",
      category: "Electrical Systems",
      price: "$128.50",
      status: "Low Stock",
      statusColor: "bg-tertiary-container text-on-tertiary-container",
      stockLevel: 12,
      stockBarColor: "bg-tertiary-dim",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChibpWvYxYBLW7eyjCQsvz41jRBJ2nMPOdwR7r0cji2Hj3WMz8fo4rbo9DNseidOs4w0iR-rLVFILNN3gwSNJpxW-zLmp5nl18ksRe7A7mUW2sI9glyx_KSID_EXSaiT5Yq5sQzYmxQMZpbzP4IHSi3TSSeoKLdnPvwwWkKqpmub4Ja4eyHKmRskKgoNdkTXuNgbGWKnYcqVmhSByrkeFN7OjtBCTGN0zdIyhxpKtEfn80TPZDndvn3qNAd4Bnyd34qq56-NPW1rU"
    },
    {
      sku: "MECH-55-P0",
      name: "Precision Pivot Bearing",
      category: "Mechanical Parts",
      price: "$2,104.00",
      status: "Out of Stock",
      statusColor: "bg-error-container text-on-error-container",
      stockLevel: 0,
      stockBarColor: "bg-error-dim",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lg1MYA0WXL3iXBU6Tpyc1hh2rffqbK6-f8hlhxCzvcWlt2iVotJZLQB8cEoDeLI1rBefhUHBQJ715p7T3A3RbdDr9PJzew_3Uiq9o1crat3X-R_-x8vX2koQ4No2TI8AzbRmMKjCBVkoO5tvhFzswWkbuYkcN7qS5_Uf_am6AHPYhz4Fe_wjI0Rur3byY2g4fuuHKg9QOqHxJZI2l_s8PHfvIlwGQs5PJ3noNjkC3bqPpTMTZPK0M3YTMY6nqP39jN9chlxDHsI"
    },
    {
      sku: "DRON-V2-XYZ",
      name: "Carbon Fiber Strut",
      category: "Aerospace Materials",
      price: "$65.00",
      status: "In Stock",
      statusColor: "bg-primary-container text-on-primary-container",
      stockLevel: 45,
      stockBarColor: "bg-primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYlxzo7KY8vNe_8qrnwnxrp6-NvRbDa3rfW24Zh26gAwa3WhP4_DjW8xD1m2B6fyszn1xjgdSZmgaaMHXpZ94widt_xDdqHtPmGllZ3z07YPnG1NVK0xka1yiGBBSdxEinPncS_pXBQKsIn2AZtQ47px1Nv0e_zVPjs1Gg7Xmfq5Db8z23e8fmehXN9TVDnrCDCfckcmeRzBFC2RH28KgV9kDFe2A5Xi5FK5hhlrMe5XyKKzv9-smWiHKb2ou8Ai1k1oLwFW1pAA"
    }
  ];

  return (
    <div className="px-4 md:px-8 max-w-6xl w-full">
      {/* Header */}
      <div className="mb-6 mt-2 md:mt-0">
        <h1 className="text-2xl font-semibold text-on-surface tracking-tight mb-1">Global Inventory</h1>
        <p className="text-sm text-on-surface-variant">Manage and track warehouse assets in real-time.</p>
      </div>

      {/* Action Bar */}
      <div className="flex gap-3 mb-6">
        <button className="gradient-button flex-1 h-12 flex items-center justify-center gap-2 text-white rounded-xl font-medium shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:shadow-xl">
          <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
          <span className="text-sm">Generate QR Code</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-xl text-on-surface-variant active:scale-95 transition-transform hover:bg-surface-container-highest">
          <span className="material-symbols-outlined">tune</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl transition-colors group-focus-within:text-primary">
          search
        </span>
        <input 
          className="w-full bg-surface-container-lowest border border-transparent focus:border-primary transition-all py-4 pl-12 pr-4 rounded-xl text-sm outline-none placeholder:text-outline shadow-sm hover:shadow-md"
          placeholder="Search by SKU or Name..." 
          type="text" 
        />
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-surface-variant">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container shrink-0">
                <img alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" src={item.image} />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">SKU: {item.sku}</span>
                  <div className="flex gap-2">
                    <button className="hover:bg-surface-container-high rounded-full p-1 transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">qr_code</span>
                    </button>
                    <button className="hover:bg-surface-container-high rounded-full p-1 transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-on-surface truncate text-lg">{item.name}</h3>
                <p className="text-xs text-on-surface-variant mb-2">{item.category}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-primary">{item.price}</span>
                  <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${item.statusColor}`}>
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 mt-1">
              <div className="flex justify-between text-[10px] font-medium text-on-surface-variant">
                <span>Stock Level</span>
                <span>{item.stockLevel}%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.stockBarColor} transition-all duration-1000 ease-out`} style={{ width: `${item.stockLevel}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
