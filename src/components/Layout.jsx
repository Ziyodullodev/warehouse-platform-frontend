import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex font-['Inter']">
      
      {/* Sidebar for Desktop */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center py-6 gap-6 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/20 shadow-sm z-50">
        <div className="w-10 h-10 mb-2 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined font-bold">architecture</span>
        </div>
        <div className="w-8 h-[1px] bg-slate-200/50 mb-2"></div>
        <NavLink to="/" className={({isActive}) => `w-12 h-12 flex flex-col items-center justify-center rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'}`} title="Dashboard">
          <span className="material-symbols-outlined text-2xl">dashboard</span>
        </NavLink>
        <NavLink to="/inventory" className={({isActive}) => `w-12 h-12 flex flex-col items-center justify-center rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'}`} title="Inventory">
          <span className="material-symbols-outlined text-2xl">inventory_2</span>
        </NavLink>
        <NavLink to="/add-item" className={({isActive}) => `w-12 h-12 flex flex-col items-center justify-center rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'}`} title="Add Item">
          <span className="material-symbols-outlined text-2xl">add_box</span>
        </NavLink>
        <div className="flex-1"></div>
        <NavLink to="/settings" className={({isActive}) => `w-12 h-12 flex flex-col items-center justify-center rounded-xl transition-all ${isActive ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-700'}`} title="Settings">
          <span className="material-symbols-outlined text-2xl">settings</span>
        </NavLink>
      </nav>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-20">
        
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors duration-200 border-b border-slate-200/20">
          <div className="flex justify-between items-center px-4 md:px-8 h-16 w-full">
            <div className="flex items-center gap-3 md:hidden">
              <span className="text-lg font-bold tracking-tighter text-blue-700 dark:text-blue-500 uppercase">
                IA
              </span>
            </div>
            {/* Desktop spacer for header if we want to push elements right, else we can show title */}
            <div className="hidden md:flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight text-on-surface">Industrial Architect</h1>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <NavLink 
                to="/notifications" 
                className={({isActive}) => `w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 relative ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400'}`}
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full pointer-events-none"></span>
              </NavLink>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest cursor-pointer border-2 border-transparent hover:border-primary transition-colors">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDePrXXTVE9Sf_kUWsLtkJ65MRWwg4_bLkhvNsZjdha0Wkzjk1pz5StPMPNbDpJX6y9aJc2_hDtBdStIEpB-X8GyMtA4V61vQaSU38sy9e9YD3PbsJbssyZJazUmzosYE9oJ1l5M00YoCcKLW955AnVXi_zxBqWDvRucNk0RS6jZglH32o0-0y1cRC13CHub-p41DwV8NA6MI2ajcu9lflODxyoYXzH7qyBou_AL4aODJWMIN6eBseVYCpiO2ZvbgddAjs1XwO4Ynk" 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 pb-24 md:pb-8 pt-6 w-full">
          <Outlet />
        </main>
      </div>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-4 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md z-50 shadow-[0px_-4px_12px_rgba(0,0,0,0.05)] border-t border-slate-200/20">
        <NavLink to="/" className={({isActive}) => `flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-transform active:scale-90 ${isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
          <span className="material-symbols-outlined text-xl">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Dashboard</span>
        </NavLink>
        
        <NavLink to="/inventory" className={({isActive}) => `flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-transform active:scale-90 ${isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
          <span className="material-symbols-outlined text-xl">inventory_2</span>
          <span className="text-[10px] font-medium mt-0.5">Inventory</span>
        </NavLink>

        <NavLink to="/add-item" className={({isActive}) => `flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-transform active:scale-90 ${isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
          <span className="material-symbols-outlined text-xl">add_box</span>
          <span className="text-[10px] font-medium mt-0.5">Add Item</span>
        </NavLink>

        <NavLink to="/settings" className={({isActive}) => `flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-transform active:scale-90 ${isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="text-[10px] font-medium mt-0.5">Settings</span>
        </NavLink>
      </nav>

    </div>
  );
};

export default Layout;
