import React, { useState } from 'react';
import ScannerModal from '../components/ScannerModal';

const Dashboard = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState(null);

  const handleScan = (decodedText) => {
    setScannedResult(decodedText);
    setShowScanner(false);
    // Real implementation would route to inventory item or perform an action
    alert(`Success! Scanned Code: ${decodedText}`);
  };

  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
      
      {/* Scanner Modal Trigger */}
      {showScanner && (
        <ScannerModal 
          onClose={() => setShowScanner(false)} 
          onScan={handleScan} 
        />
      )}

      {/* Dashboard Header */}
      <div className="mb-8 mt-2 md:mt-0">
        <h1 className="text-3xl font-semibold tracking-tight text-on-surface mb-1">Operational Overview</h1>
        <p className="text-on-surface-variant text-sm">Warehouse Section A-12 • Real-time status</p>
      </div>

      {/* Summary Cards: Bento Grid Style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface-container-lowest p-5 rounded-xl border-b-2 border-transparent shadow-sm hover:shadow-md transition-shadow">
          <span className="material-symbols-outlined text-primary mb-3 text-3xl">inventory_2</span>
          <p className="text-on-surface-variant text-xs font-medium mb-1">Total Items</p>
          <p className="text-2xl font-bold tracking-tight text-on-surface">12,482</p>
        </div>
        <div className="bg-error-container/10 p-5 rounded-xl border-b-2 border-error shadow-sm hover:shadow-md transition-shadow">
          <span className="material-symbols-outlined text-error mb-3 text-3xl">warning</span>
          <p className="text-on-error-container text-xs font-medium mb-1">Low Stock Alerts</p>
          <p className="text-2xl font-bold tracking-tight text-on-error-container">24</p>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-xl border-b-2 border-transparent shadow-sm hover:shadow-md transition-shadow">
          <span className="material-symbols-outlined text-tertiary mb-3 text-3xl">conveyor_belt</span>
          <p className="text-on-surface-variant text-xs font-medium mb-1">Recent Inbounds</p>
          <p className="text-2xl font-bold tracking-tight text-on-surface">148</p>
        </div>
        <div className="bg-surface-container-lowest p-5 rounded-xl border-b-2 border-transparent shadow-sm hover:shadow-md transition-shadow">
          <span className="material-symbols-outlined text-primary mb-3 text-3xl">payments</span>
          <p className="text-on-surface-variant text-xs font-medium mb-1">Total Valuation</p>
          <p className="text-2xl font-bold tracking-tight text-on-surface">$2.4M</p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Weekly Activity */}
        <div className="md:col-span-2 bg-surface-container-low p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Weekly Activity</h3>
            <span className="text-xs text-on-surface-variant">Last 7 Days</span>
          </div>
          <div className="flex items-end justify-between h-40 gap-2">
            <div className="w-full bg-primary/20 rounded-t-sm h-[40%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
            <div className="w-full bg-primary/20 rounded-t-sm h-[65%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
            <div className="w-full bg-primary/20 rounded-t-sm h-[45%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
            <div className="w-full bg-primary/20 rounded-t-sm h-[80%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
            <div className="w-full bg-primary-gradient rounded-t-sm h-[95%] shadow-lg shadow-primary/20 cursor-pointer"></div>
            <div className="w-full bg-primary/20 rounded-t-sm h-[60%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
            <div className="w-full bg-primary/20 rounded-t-sm h-[50%] hover:bg-primary/40 transition-colors cursor-pointer"></div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] text-on-surface-variant font-medium">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
        </div>
        
        {/* Stock Status */}
        <div className="bg-surface-container-highest p-6 rounded-xl flex flex-col items-center justify-center shadow-sm">
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6 w-full">Stock Status</h3>
          <div className="relative w-32 h-32 rounded-full border-[16px] border-primary-container flex items-center justify-center">
            <div className="absolute inset-[-16px] rounded-full border-[16px] border-primary border-r-transparent border-b-transparent rotate-45 transition-transform duration-1000 ease-in-out hover:rotate-90"></div>
            <div className="text-center">
              <span className="block text-xl font-bold">84%</span>
              <span className="text-[10px] uppercase text-on-surface-variant">Healthy</span>
            </div>
          </div>
          <div className="mt-6 w-full space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> In Stock</span>
              <span className="font-semibold">84%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Low</span>
              <span className="font-semibold">12%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-error"></span> Out</span>
              <span className="font-semibold">4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <section className="mb-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-on-surface">Recent Transactions</h2>
          <button className="text-sm font-medium text-primary hover:underline">View All</button>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 md:grid-cols-5 px-6 py-4 bg-surface-container text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            <div className="col-span-2 md:col-span-1">Product</div>
            <div className="hidden md:block">SKU</div>
            <div>Type</div>
            <div className="text-right">Qty</div>
            <div className="text-right hidden md:block">Date</div>
          </div>
          <div className="divide-y divide-surface-container-low">
            {[
              { name: "Titanium Rods", sku: "TR-9902", type: "Inbound", qty: "+450", date: "Oct 24, 08:32", typeClass: "bg-primary-container text-on-primary-container" },
              { name: "Carbon Filters", sku: "CF-1140", type: "Outbound", qty: "-120", date: "Oct 24, 07:15", typeClass: "bg-tertiary-container text-on-tertiary-container" },
              { name: "Hydraulic Fluid", sku: "HF-8821", type: "Inbound", qty: "+85", date: "Oct 23, 16:45", typeClass: "bg-primary-container text-on-primary-container" },
              { name: "Steel Gaskets", sku: "SG-4410", type: "Outbound", qty: "-300", date: "Oct 23, 14:20", typeClass: "bg-tertiary-container text-on-tertiary-container" },
            ].map((tx, idx) => (
              <div key={idx} className="grid grid-cols-4 md:grid-cols-5 px-6 py-4 items-center hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                <div className="col-span-2 md:col-span-1">
                  <p className="text-sm font-semibold text-on-surface">{tx.name}</p>
                  <p className="text-[10px] text-on-surface-variant md:hidden">SKU: {tx.sku}</p>
                </div>
                <div className="hidden md:block text-xs font-mono text-on-surface-variant">{tx.sku}</div>
                <div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${tx.typeClass}`}>{tx.type}</span>
                </div>
                <div className="text-right text-sm font-medium">{tx.qty}</div>
                <div className="text-right text-xs text-on-surface-variant hidden md:block">{tx.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Command Bar */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 md:bottom-8">
        <div className="flex items-center bg-surface/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-outline-variant/10 gap-2 hover:shadow-xl transition-shadow cursor-pointer">
          <button className="p-2 rounded-full hover:bg-surface-variant text-on-surface transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <div className="w-px h-6 bg-outline-variant/20"></div>
          <button onClick={() => setShowScanner(true)} className="bg-primary-gradient text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-sm">barcode_scanner</span>
            <span>Scan Item</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
