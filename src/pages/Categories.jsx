import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Category State
  const [categories, setCategories] = useState([
    "Mechanical Parts",
    "Electrical components",
    "Fasteners",
    "Hydraulics"
  ]);
  const [newCatName, setNewCatName] = useState("");
  const [catToDelete, setCatToDelete] = useState(null);

  const handleAddCategory = () => {
    if (newCatName.trim()) {
      setCategories([...categories, newCatName.trim()]);
      setNewCatName("");
    }
  };

  const confirmDeleteCategory = () => {
    if (catToDelete) {
      setCategories(categories.filter(c => c !== catToDelete));
      setCatToDelete(null);
    }
  };

  return (
    <div className="px-4 py-8 md:px-8 max-w-3xl w-full relative">
      
      {/* Delete Confirmation Modal */}
      {catToDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div 
            className="bg-surface-container-lowest w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-error text-3xl">warning</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface text-center mb-2">{t('settings.confirmDeleteTitle')}</h3>
              <p className="text-center text-on-surface-variant text-sm mb-2">{t('settings.confirmDeleteDesc')}</p>
              <p className="text-center text-on-surface font-bold mb-6">"{catToDelete}"</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setCatToDelete(null)}
                  className="flex-1 py-3 bg-surface-container hover:bg-surface-container-high rounded-xl text-on-surface font-semibold transition-colors disabled:opacity-50"
                >
                  {t('settings.cancelBtn')}
                </button>
                <button 
                  onClick={confirmDeleteCategory}
                  className="flex-1 py-3 bg-error hover:bg-error/90 text-white rounded-xl font-bold shadow-sm shadow-error/20 transition-colors active:scale-95"
                >
                  {t('settings.yesDeleteBtn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-8 mt-2 md:mt-0">
        <button 
          onClick={() => navigate('/settings')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors text-on-surface-variant"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-on-surface mb-1">{t('settings.categoriesTitle')}</h1>
          <p className="text-on-surface-variant text-sm">{t('settings.categoriesDesc')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-surface-variant transition-colors">
          
          {/* Add Category Input */}
          <div className="flex gap-3 mb-8">
             <div className="relative flex-1">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">tag</span>
               <input 
                 value={newCatName}
                 onChange={(e) => setNewCatName(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                 className="w-full bg-surface-container py-3 pl-9 pr-4 rounded-xl text-sm outline-none border border-transparent focus:border-primary transition-colors text-on-surface placeholder:text-outline-variant"
                 placeholder={t('settings.categoryPlaceholder')}
               />
             </div>
             <button 
               onClick={handleAddCategory}
               disabled={!newCatName.trim()}
               className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-sm shadow-primary/20 hover:shadow-md disabled:bg-surface-container-high disabled:text-on-surface-variant disabled:shadow-none transition-all active:scale-95 flex items-center gap-2"
             >
               <span className="material-symbols-outlined text-[18px]">add</span>
               <span className="hidden sm:inline">{t('settings.addCategory')}</span>
             </button>
          </div>

          {/* List Categories */}
          <div className="space-y-3">
            {categories.length === 0 ? (
              <p className="text-sm text-on-surface-variant text-center py-8">{t('settings.noCategories')}</p>
            ) : (
              categories.map((cat, idx) => (
                <div key={idx} className="flex justify-between items-center bg-surface-container p-4 rounded-xl border border-outline-variant/10 group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">label</span>
                    <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{cat}</span>
                  </div>
                  <button 
                    onClick={() => setCatToDelete(cat)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:text-error hover:bg-error/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              ))
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Categories;
