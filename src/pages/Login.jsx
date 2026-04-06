import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock authentication
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative overflow-hidden font-['Inter']">
      
      {/* Visual Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern height="20" id="login-grid" patternUnits="userSpaceOnUse" width="20">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </pattern>
          <rect fill="url(#login-grid)" height="100" width="100"></rect>
        </svg>
      </div>

      {/* Left Decoration Section (Desktop) */}
      <div className="hidden md:flex flex-1 bg-primary relative items-center justify-center overflow-hidden">
         <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
         
         <div className="relative z-10 text-center text-white px-20">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
               <span className="material-symbols-outlined text-4xl">architecture</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter mb-4 uppercase">{t('nav.appFullName')}</h1>
            <p className="text-xl text-white/70 font-medium leading-relaxed">Precision-engineered warehouse management for the modern industrial age.</p>
         </div>
      </div>

      {/* Right Login Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md">
          
          <div className="mb-10 text-center md:text-left">
            <div className="md:hidden w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
               <span className="material-symbols-outlined text-white">architecture</span>
            </div>
            <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">{t('login.welcome')}</h2>
            <p className="text-on-surface-variant text-sm">{t('login.subtitle')}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('login.email')}</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 bottom-3 text-outline-variant">mail</span>
                <input 
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 pl-8 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-base font-medium text-on-surface"
                  placeholder={t('login.emailPlaceholder')}
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('login.password')}</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 bottom-3 text-outline-variant">lock</span>
                <input 
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 pl-8 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-base font-medium text-on-surface"
                  placeholder={t('login.passwordPlaceholder')}
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer" />
                <span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">{t('login.keepSignedIn')}</span>
              </label>
              <a href="#" className="text-xs font-bold text-primary hover:underline underline-offset-4">{t('login.forgotId')}</a>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full h-14 bg-primary-gradient text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-80 pointer-events-none' : ''}`}
            >
              {loading ? (
                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>{t('login.signInBtn')}</span>
                  <span className="material-symbols-outlined text-[20px]">login</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center text-xs text-on-surface-variant font-medium">
            <p>{t('login.footer')}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;
