import React, { useState } from 'react';

const Clients = () => {
  const [search, setSearch] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: "Johnathan Wick",
      company: "Continental Logistics",
      email: "j.wick@continental.com",
      status: "Active",
      statusColor: "bg-primary-container text-on-primary-container",
      orders: 42,
      debt: 12500,
      lastOrder: "Oct 22, 2026",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDePrXXTVE9Sf_kUWsLtkJ65MRWwg4_bLkhvNsZjdha0Wkzjk1pz5StPMPNbDpJX6y9aJc2_hDtBdStIEpB-X8GyMtA4V61vQaSU38sy9e9YD3PbsJbssyZJazUmzosYE9oJ1l5M00YoCcKLW955AnVXi_zxBqWDvRucNk0RS6jZglH32o0-0y1cRC13CHub-p41DwV8NA6MI2ajcu9lflODxyoYXzH7qyBou_AL4aODJWMIN6eBseVYCpiO2ZvbgddAjs1XwO4Ynk",
      history: [
        { id: 101, item: "Industrial Valve X-1", date: "Oct 22, 2026", amount: 4500 },
        { id: 102, item: "Hydraulic Pump", date: "Oct 15, 2026", amount: 8000 }
      ]
    },
    {
      id: 2,
      name: "Sarah Connor",
      company: "Cyberdyne Systems",
      email: "s.connor@cyberdyne.io",
      status: "Active",
      statusColor: "bg-primary-container text-on-primary-container",
      orders: 15,
      debt: 0,
      lastOrder: "Oct 24, 2026",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYlxzo7KY8vNe_8qrnwnxrp6-NvRbDa3rfW24Zh26gAwa3WhP4_DjW8xD1m2B6fyszn1xjgdSZmgaaMHXpZ94widt_xDdqHtPmGllZ3z07YPnG1NVK0xka1yiGBBSdxEinPncS_pXBQKsIn2AZtQ47px1Nv0e_zVPjs1Gg7Xmfq5Db8z23e8fmehXN9TVDnrCDCfckcmeRzBFC2RH28KgV9kDFe2A5Xi5FK5hhlrMe5XyKKzv9-smWiHKb2ou8Ai1k1oLwFW1pAA",
      history: [
        { id: 201, item: "Tactile Sensor Hub", date: "Oct 24, 2026", amount: 492 },
        { id: 202, item: "Carbon Fiber Strut", date: "Oct 10, 2026", amount: 1200 }
      ]
    },
    {
      id: 3,
      name: "Bruce Wayne",
      company: "Wayne Enterprises",
      email: "b.wayne@waynecorp.com",
      status: "Inactive",
      statusColor: "bg-surface-container-high text-on-surface-variant",
      orders: 128,
      debt: 85400,
      lastOrder: "Sep 15, 2026",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtFNJ5yPq-uUop60sQjiFBCtODoSFplkw1buumsIVPqPG35hh3hlMuXQXIFtswzIdwbvtent-FjGliH83RCV47H6LmsRr_8u-tNRxW7z10c42XdKfNbzgu6M4uUEFtu6SvgXTrqoysMv3Iq_qvU2EHuozS7eRdS6DAFWBrmttFiC4G3VTHtM8Y7vE8VOL8Jy0oeCjD7VSpZVS3G6hJkKh_4fKEM8J1uq0FyAkK-IVX_B4djTovMTDZ39zx4DN59GlVoDK82aP9-7o",
      history: [
        { id: 301, item: "Bulk Gasket Set", date: "Sep 15, 2026", amount: 15400 },
        { id: 302, item: "Precision Pivot Bearing", date: "Sep 01, 2026", amount: 70000 }
      ]
    },
    {
      id: 4,
      name: "Ellen Ripley",
      company: "Weyland-Yutani",
      email: "ripley@weyland.com",
      status: "Pending",
      statusColor: "bg-tertiary-container text-on-tertiary-container",
      orders: 3,
      debt: 0,
      lastOrder: "Oct 20, 2026",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuChibpWvYxYBLW7eyjCQsvz41jRBJ2nMPOdwR7r0cji2Hj3WMz8fo4rbo9DNseidOs4w0iR-rLVFILNN3gwSNJpxW-zLmp5nl18ksRe7A7mUW2sI9glyx_KSID_EXSaiT5Yq5sQzYmxQMZpbzP4IHSi3TSSeoKLdnPvwwWkKqpmub4Ja4eyHKmRskKgoNdkTXuNgbGWKnYcqVmhSByrkeFN7OjtBCTGN0zdIyhxpKtEfn80TPZDndvn3qNAd4Bnyd34qq56-NPW1rU",
      history: [
        { id: 401, item: "Oxygen Filter Unit", date: "Oct 20, 2026", amount: 850 }
      ]
    }
  ];

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-8 max-w-6xl w-full relative">
      {/* History Modal Overlay */}
      {selectedClient && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div 
            className="bg-surface-container-lowest w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-outline-variant/20 bg-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                  <img src={selectedClient.avatar} alt={selectedClient.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">Purchase History</h3>
                  <p className="text-xs text-on-surface-variant">{selectedClient.name}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedClient(null)} 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {selectedClient.history.map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center p-4 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:border-primary/20 transition-all group">
                    <div className="flex items-start gap-4">
                       <span className="material-symbols-outlined text-primary/60 group-hover:text-primary transition-colors">receipt_long</span>
                       <div>
                         <p className="text-sm font-bold text-on-surface tracking-tight">{tx.item}</p>
                         <p className="text-[10px] uppercase font-bold text-outline tracking-widest mt-0.5">{tx.date}</p>
                       </div>
                    </div>
                    <span className="text-sm font-black text-on-surface">${tx.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-surface-container-high border-t border-outline-variant/20 flex justify-between items-center">
               <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest leading-none">Total Value</span>
               <span className="text-xl font-black text-primary leading-none">
                 ${selectedClient.history.reduce((sum, tx) => sum + tx.amount, 0).toLocaleString()}
               </span>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8 mt-2 md:mt-0 items-start md:items-end flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-on-surface mb-1">Mijozlar</h1>
          <p className="text-on-surface-variant text-sm">Professional relationship and financial monitoring.</p>
        </div>
        <button className="px-6 py-3 bg-primary-gradient text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-95">
          <span className="material-symbols-outlined">person_add</span>
          Add New Client
        </button>
      </div>

      {/* Modern Search Field */}
      <div className="relative mb-10 group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl group-focus-within:text-primary transition-colors">
          search
        </span>
        <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-surface-container-lowest border border-transparent focus:border-primary transition-all py-4 pl-12 pr-4 rounded-2xl text-base outline-none placeholder:text-outline shadow-sm hover:shadow-md"
          placeholder="Search by name, company, or ID..." 
          type="text" 
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pb-8">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-surface-container-lowest p-6 rounded-3xl border border-transparent hover:border-surface-variant shadow-sm hover:shadow-md transition-all group flex flex-col gap-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-surface-container shrink-0 border-2 border-surface-container-lowest group-hover:border-primary/20 transition-colors">
                  <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-on-surface text-lg leading-tight group-hover:text-primary transition-colors">{client.name}</h3>
                  <p className="text-sm font-medium text-on-surface-variant mt-0.5">{client.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${client.statusColor}`}>
                      {client.status}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center text-outline">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
               <div className="bg-surface-container p-3 rounded-2xl">
                 <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Orders</p>
                 <p className="text-lg font-bold text-on-surface">{client.orders}</p>
               </div>
               <div className="bg-surface-container p-3 rounded-2xl col-span-2 relative overflow-hidden group/debt">
                 <p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Qarzdorlik (Debt)</p>
                 <p className={`text-lg font-black ${client.debt > 0 ? 'text-error' : 'text-primary'}`}>
                    ${client.debt.toLocaleString()}
                 </p>
                 {client.debt > 0 && <span className="absolute -right-1 -bottom-1 material-symbols-outlined text-error/10 text-4xl group-hover/debt:scale-110 transition-transform">payments</span>}
               </div>
            </div>

            <div className="flex items-center gap-3 mt-auto pt-2">
               <button className="flex-1 h-12 rounded-xl bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center gap-2 text-sm font-bold transition-colors">
                 <span className="material-symbols-outlined text-[18px]">mail</span>
                 Email
               </button>
               <button 
                onClick={() => setSelectedClient(client)}
                className="flex-1 h-12 rounded-xl bg-primary-gradient text-white flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
               >
                 <span className="material-symbols-outlined text-[18px]">history</span>
                 Log (Tarix)
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
