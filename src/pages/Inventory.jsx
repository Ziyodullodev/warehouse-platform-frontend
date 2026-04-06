import React from 'react';
import { useTranslation } from 'react-i18next';

const Inventory = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = React.useState(null);

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
      location: "Zone B (Electronics)",
      description: "High-precision tactile automation hub for robot arms.",
      lastUpdated: "Oct 24, 2026",
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
      location: "Zone B (Electronics)",
      description: "Complete modular connector kit with multiple headers and crimpers.",
      lastUpdated: "Oct 22, 2026",
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
      location: "Zone A (Heavy Duty)",
      description: "Industrial grade heavy duty pivot bearings designed for large machinery.",
      lastUpdated: "Oct 20, 2026",
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
      location: "Zone C (Specialty)",
      description: "Lightweight and highly durable carbon fiber strut for aerial use.",
      lastUpdated: "Oct 24, 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYlxzo7KY8vNe_8qrnwnxrp6-NvRbDa3rfW24Zh26gAwa3WhP4_DjW8xD1m2B6fyszn1xjgdSZmgaaMHXpZ94widt_xDdqHtPmGllZ3z07YPnG1NVK0xka1yiGBBSdxEinPncS_pXBQKsIn2AZtQ47px1Nv0e_zVPjs1Gg7Xmfq5Db8z23e8fmehXN9TVDnrCDCfckcmeRzBFC2RH28KgV9kDFe2A5Xi5FK5hhlrMe5XyKKzv9-smWiHKb2ou8Ai1k1oLwFW1pAA"
    }
  ];

  return (
    <div className="px-4 md:px-8 max-w-6xl w-full relative">
      
      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div 
            className="bg-surface-container-lowest w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Hero */}
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-surface-container relative shrink-0">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors md:hidden"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md ${selectedItem.statusColor.replace('bg-', 'bg-').replace('-container', '-container/90')}`}>
                {selectedItem.status}
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-outline">SKU: {selectedItem.sku}</span>
                  <h2 className="text-2xl font-bold text-on-surface mt-1 leading-tight">{selectedItem.name}</h2>
                  <p className="text-sm font-medium text-on-surface-variant mt-1">{selectedItem.category}</p>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)} 
                  className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="text-3xl font-black text-primary mb-6">{selectedItem.price}</div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-surface-container p-4 rounded-xl">
                   <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">{t('inventory.stockLevel')}</p>
                   <div className="flex items-end gap-2">
                     <span className="text-xl font-bold text-on-surface">{selectedItem.stockLevel}%</span>
                     <div className="w-full h-2 mb-1.5 bg-surface-container-highest rounded-full overflow-hidden flex-1">
                       <div className={`h-full rounded-full ${selectedItem.stockBarColor}`} style={{ width: `${selectedItem.stockLevel}%` }}></div>
                     </div>
                   </div>
                 </div>
                 <div className="bg-surface-container p-4 rounded-xl">
                   <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">{t('inventory.location')}</p>
                   <p className="text-sm font-semibold text-on-surface break-words">{selectedItem.location}</p>
                 </div>
              </div>

              <div className="mb-8">
                 <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2">{t('inventory.description')}</p>
                 <p className="text-sm text-on-surface leading-relaxed">{selectedItem.description}</p>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-6 border-t border-outline-variant/20">
                 <button className="flex-1 h-12 rounded-xl bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center gap-2 text-sm font-bold transition-colors">
                   <span className="material-symbols-outlined text-[18px]">edit</span>
                   {t('inventory.editBtn')}
                 </button>
                 <button className="w-12 h-12 rounded-xl border border-error/50 text-error hover:bg-error/10 flex items-center justify-center transition-colors">
                   <span className="material-symbols-outlined text-[20px]">delete</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 mt-2 md:mt-0">
        <h1 className="text-2xl font-semibold text-on-surface tracking-tight mb-1">{t('inventory.title')}</h1>
        <p className="text-sm text-on-surface-variant">{t('inventory.subtitle')}</p>
      </div>

      {/* Action Bar */}
      <div className="flex gap-3 mb-6">
        <button className="gradient-button flex-1 h-12 flex items-center justify-center gap-2 text-white rounded-xl font-medium shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:shadow-xl">
          <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
          <span className="text-sm">{t('inventory.generateQr')}</span>
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
          placeholder={t('inventory.searchPlaceholder')} 
          type="text" 
        />
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedItem(item)}
            className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-surface-variant"
          >
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container shrink-0">
                <img alt={item.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" src={item.image} />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">SKU: {item.sku}</span>
                  <div className="flex gap-2">
                    <button onClick={(e) => e.stopPropagation()} className="hover:bg-surface-container-high rounded-full p-1 transition-colors">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">qr_code</span>
                    </button>
                    <button onClick={(e) => e.stopPropagation()} className="hover:bg-surface-container-high rounded-full p-1 transition-colors">
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
                <span>{t('inventory.stockLevel')}</span>
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
