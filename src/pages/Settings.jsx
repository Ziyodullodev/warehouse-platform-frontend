import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="px-4 py-8 md:px-8 max-w-3xl w-full">
      <div className="mb-8 mt-2 md:mt-0">
        <h1 className="text-3xl font-semibold tracking-tight text-on-surface mb-1">{t('settings.title')}</h1>
        <p className="text-on-surface-variant text-sm">{t('settings.subtitle')}</p>
      </div>

      <div className="space-y-6">

        {/* App Preferences */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-surface-variant transition-colors">
          <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">{t('settings.preferences')}</h4>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">notifications</span>
                  {t('settings.notifications')}
                </h5>
                <p className="text-xs text-on-surface-variant mt-1">{t('settings.notificationsDesc')}</p>
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
                  {t('settings.darkMode')}
                </h5>
                <p className="text-xs text-on-surface-variant mt-1">{t('settings.darkModeDesc')}</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${darkMode ? 'bg-primary' : 'bg-surface-container-high'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </button>
            </div>
            <div className="w-full h-px bg-surface-container-highest"></div>

            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">language</span>
                  {t('settings.language')}
                </h5>
                <p className="text-xs text-on-surface-variant mt-1">{t('settings.languageDesc')}</p>
              </div>
              <div className="flex bg-surface-container-high rounded-lg p-1">
                <button 
                  onClick={() => changeLanguage('uz')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${i18n.language === 'uz' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  O'zbek
                </button>
                <button 
                  onClick={() => changeLanguage('ru')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${i18n.language === 'ru' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Русский
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Dedicated Categories Page */}
        <div 
          onClick={() => navigate('/settings/categories')}
          className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-primary/30 transition-colors cursor-pointer group flex items-center justify-between"
        >
          <div>
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{t('settings.categoriesTitle')}</h4>
            <p className="text-xs text-on-surface-variant">{t('settings.goToCategories')} • 4 items</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        </div>

        {/* Link to Clients Page */}
        <div 
          onClick={() => navigate('/clients')}
          className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-primary/30 transition-colors cursor-pointer group flex items-center justify-between"
        >
          <div>
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{t('settings.clientsTitle')}</h4>
            <p className="text-xs text-on-surface-variant">{t('settings.clientsDesc')}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high group-hover:bg-primary/10 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
          </div>
        </div>

        {/* Destructive Zone */}
        <div className="bg-error-container/5 rounded-2xl p-6 border border-error/20">
           <h4 className="text-sm font-bold text-error uppercase tracking-wider mb-2">{t('settings.dangerZone')}</h4>
           <p className="text-xs text-on-surface-variant mb-4">{t('settings.dangerDesc')}</p>
           <button 
             onClick={handleSignOut}
             className="px-4 py-2 bg-error text-white rounded-lg text-sm font-bold shadow-sm shadow-error/20 hover:bg-error/90 transition-colors active:scale-95"
           >
              {t('settings.signOut')}
           </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
