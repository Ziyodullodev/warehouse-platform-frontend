import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScannerModal from '../components/ScannerModal';

const AddItem = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [skuCode, setSkuCode] = useState('');
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (decodedText) => {
    setSkuCode(decodedText);
    setShowScanner(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-2xl px-4 md:px-8 py-6 w-full relative">
      
      {showScanner && (
        <ScannerModal 
          onClose={() => setShowScanner(false)} 
          onScan={handleScan} 
        />
      )}

      {/* Visual Texture Element */}
      <div className="fixed top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.03] overflow-hidden z-[-1]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </pattern>
          <rect fill="url(#grid)" height="100" width="100"></rect>
        </svg>
      </div>

      <div className="mb-10 text-center mt-2 md:mt-0 duration-300 animate-in fade-in slide-in-from-bottom-2">
        <span className="text-on-surface-variant font-medium tracking-wider uppercase text-xs">{t('addItem.subtitle')}</span>
        <h2 className="text-3xl font-semibold text-on-surface tracking-tight mt-1">{t('addItem.title')}</h2>
        
        {/* Step Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex items-center">
            {/* Step 1 */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant'}`}>
              {step > 1 ? <span className="material-symbols-outlined text-[20px]">check</span> : '1'}
            </div>
            
            <div className="w-12 h-1 overflow-hidden bg-surface-container-high rounded-full mx-1">
              <div className={`h-full bg-primary transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            {/* Step 2 */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= 2 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant'}`}>
              {step > 2 ? <span className="material-symbols-outlined text-[20px]">check</span> : '2'}
            </div>

            <div className="w-12 h-1 overflow-hidden bg-surface-container-high rounded-full mx-1">
              <div className={`h-full bg-primary transition-all duration-500 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
            </div>

            {/* Step 3 */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= 3 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant'}`}>
              3
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-on-surface-variant transition-all">
          {step === 1 && t('addItem.step1')}
          {step === 2 && t('addItem.step2')}
          {step === 3 && t('addItem.step3')}
        </p>
      </div>

      <div className="space-y-12">
        {/* Form Sections depending on the current step */}
        
        {step === 1 && (
          <section className="bg-surface-container-lowest p-2 md:p-6 rounded-2xl shadow-sm border border-transparent transition-all animate-in fade-in slide-in-from-right-4">
            <div className="grid grid-cols-1 gap-8">
              <div className="relative group">
                <label className="w-full h-48 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group-hover:border-primary/50 overflow-hidden relative">
                  <input type="file" accept="image/png, image/jpeg" className="hidden" onChange={handleImageChange} />
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">edit</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-4xl text-outline-variant mb-2 group-hover:text-primary transition-colors">cloud_upload</span>
                      <p className="text-sm font-medium text-on-surface-variant">{t('addItem.dragImage')} <span className="text-primary">{t('addItem.browse')}</span></p>
                      <p className="text-xs text-outline mt-1">PNG, JPG {t('addItem.upTo')}</p>
                    </>
                  )}
                </label>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('addItem.productName')}</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60" placeholder="e.g. Industrial Grade Valve" type="text" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('addItem.skuNumber')}</label>
                  <div className="relative">
                    <input 
                      value={skuCode}
                      onChange={(e) => setSkuCode(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 pr-10 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60" 
                      placeholder="WHS-001-VALVE" 
                      type="text" 
                    />
                    <button 
                      onClick={() => setShowScanner(true)}
                      className="absolute right-0 bottom-1.5 p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined">qr_code_scanner</span>
                    </button>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('addItem.category')}</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface appearance-none cursor-pointer" defaultValue="">
                    <option disabled value="">{t('addItem.selectCategory')}</option>
                    <option>{t('addItem.mechanical')}</option>
                    <option>{t('addItem.electrical')}</option>
                    <option>{t('addItem.hardware')}</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-3 pointer-events-none text-outline-variant group-focus-within:text-primary transition-colors">expand_more</span>
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">{t('addItem.description')}</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60 resize-none" placeholder="..." rows="3"></textarea>
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="bg-surface-container-lowest p-2 md:p-6 rounded-2xl shadow-sm border border-transparent transition-all animate-in fade-in slide-in-from-right-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="relative col-span-1 border-b border-outline-variant/30 pb-6 md:border-b-0 md:pb-0">
                  <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    Pricing Model
                  </h3>
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Cost Price ($)</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60" placeholder="0.00" type="number" />
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Selling Price ($)</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60" placeholder="0.00" type="number" />
                    </div>
                  </div>
                </div>

                <div className="relative col-span-1">
                  <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    Logistics & Stock
                  </h3>
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Initial Stock Level</label>
                      <input className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface placeholder:text-outline-variant/60" placeholder="e.g. 500" type="number" />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-1">Warehouse Section</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant hover:border-primary/50 py-3 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-primary transition-all text-lg font-medium text-on-surface appearance-none cursor-pointer">
                        <option disabled selected value="">Select Zone</option>
                        <option>Zone A (Heavy Duty)</option>
                        <option>Zone B (Electronics)</option>
                        <option>Zone C (Chemicals)</option>
                        <option>Zone D (General)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-0 bottom-3 pointer-events-none text-outline-variant group-focus-within:text-primary transition-colors">expand_more</span>
                    </div>
                  </div>
                </div>

             </div>
          </section>
        )}

        {step === 3 && (
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-transparent transition-all animate-in fade-in slide-in-from-right-4">
             <div className="text-center mb-8">
               <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
               </div>
               <h3 className="text-xl font-bold text-on-surface">Ready to Publish</h3>
               <p className="text-sm text-on-surface-variant mt-2">Please double-check the entered details before adding to the global inventory.</p>
             </div>

             <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
               <div className="grid grid-cols-2 gap-4 text-sm">
                 <div>
                   <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-1">Product</p>
                   <p className="font-medium text-on-surface">Industrial Grade Valve</p>
                 </div>
                 <div>
                   <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-1">SKU</p>
                   <p className="font-mono text-on-surface">WHS-001-VALVE</p>
                 </div>
                 <div className="col-span-2 w-full h-[1px] bg-outline-variant/20 my-2"></div>
                 <div>
                   <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-1">Selling Price</p>
                   <p className="font-bold text-primary">$120.00</p>
                 </div>
                 <div>
                   <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-1">Location</p>
                   <p className="font-medium text-on-surface">Zone A (Heavy Duty)</p>
                 </div>
               </div>
             </div>
          </section>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pb-4">
          {step > 1 && (
             <button 
                onClick={handleBack}
                className="w-full sm:w-auto sm:flex-1 px-6 py-4 rounded-xl text-on-surface font-semibold bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2 active:scale-95"
             >
               <span className="material-symbols-outlined text-[20px]">arrow_back</span>
               {t('addItem.goBack')}
             </button>
          )}

          <button 
            onClick={handleNext}
            className={`w-full sm:w-auto sm:flex-[2] px-6 py-4 rounded-xl text-white font-bold bg-primary-gradient shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${step > 3 ? 'pointer-events-none opacity-80' : ''}`}
          >
            {step < 3 ? t('addItem.nextStep') : 'Publish to Inventory'}
            {step < 3 ? (
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
