import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    // Force reload so App component re-syncs state
    window.location.href = '/login';
  };

  return (
    <div className="px-4 py-8 md:px-8 max-w-3xl w-full">
      <div className="mb-8 mt-2 md:mt-0">
        <h1 className="text-3xl font-semibold tracking-tight text-on-surface mb-1">Settings</h1>
        <p className="text-on-surface-variant text-sm">Manage your preferences and application settings.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-surface-variant transition-colors">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-surface-container-highest">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container shrink-0">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDePrXXTVE9Sf_kUWsLtkJ65MRWwg4_bLkhvNsZjdha0Wkzjk1pz5StPMPNbDpJX6y9aJc2_hDtBdStIEpB-X8GyMtA4V61vQaSU38sy9e9YD3PbsJbssyZJazUmzosYE9oJ1l5M00YoCcKLW955AnVXi_zxBqWDvRucNk0RS6jZglH32o0-0y1cRC13CHub-p41DwV8NA6MI2ajcu9lflODxyoYXzH7qyBou_AL4aODJWMIN6eBseVYCpiO2ZvbgddAjs1XwO4Ynk" 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-on-surface">Alex Mercer</h3>
              <p className="text-sm text-on-surface-variant">Logistics Manager</p>
            </div>
            <button className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest rounded-full text-sm font-semibold transition-colors">
              Edit Profile
            </button>
          </div>
          
          <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4">Account Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Email Address</label>
              <input readOnly disabled value="alex.mercer@industrial-arch.com" className="w-full bg-surface-container py-3 px-4 rounded-xl text-sm font-medium text-on-surface-variant outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Phone Number</label>
              <input disabled value="+1 (555) 019-2831" className="w-full bg-surface-container py-3 px-4 rounded-xl text-sm font-medium text-on-surface-variant outline-none" />
            </div>
          </div>
        </div>

        {/* App Preferences */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-surface-variant transition-colors">
          <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">Preferences</h4>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">notifications</span>
                  Push Notifications
                </h5>
                <p className="text-xs text-on-surface-variant mt-1">Receive alerts for low stock and system updates.</p>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${notifications ? 'bg-primary' : 'bg-surface-container-high'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </div>

            <div className="w-full h-px bg-surface-container-highest"></div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">dark_mode</span>
                  Dark Mode
                </h5>
                <p className="text-xs text-on-surface-variant mt-1">Toggle dark appearance for low-light environments.</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${darkMode ? 'bg-primary' : 'bg-surface-container-high'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Destructive Zone */}
        <div className="bg-error-container/5 rounded-2xl p-6 border border-error/20">
           <h4 className="text-sm font-bold text-error uppercase tracking-wider mb-2">Danger Zone</h4>
           <p className="text-xs text-on-surface-variant mb-4">Actions here are irreversible and can lead to data loss.</p>
           <button 
             onClick={handleSignOut}
             className="px-4 py-2 bg-error text-white rounded-lg text-sm font-bold shadow-sm shadow-error/20 hover:bg-error/90 transition-colors active:scale-95"
           >
              Sign Out
           </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
