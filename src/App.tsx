/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Search, 
  ChevronRight, 
  X, 
  ArrowLeft,
  Info,
  ChevronLeft,
  Filter,
  Star,
  Phone,
  Instagram,
  MapPin
} from 'lucide-react';
import { MENU_DATA, Category, MenuItem } from './data/menu';

const BARISTA_PHOTO = "https://i.ibb.co/PGhHX7HX/photo-2026-05-15-14-58-03.jpg";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const activeCategoryData = useMemo(() => 
    MENU_DATA.find(cat => cat.id === activeCategory), [activeCategory]);

  const filteredItems = useMemo(() => {
    if (searchQuery.trim() === '') {
      return activeCategoryData?.items || [];
    }
    
    // Search across all categories
    return MENU_DATA.flatMap(cat => cat.items).filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategoryData, searchQuery]);

  const categories = MENU_DATA.map(cat => ({ id: cat.id, name: cat.name, color: cat.color }));

  return (
    <div className="min-h-screen bg-natural-100 selection:bg-natural-300 selection:text-natural-900">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-natural-900 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-10 rounded-full border border-natural-700 flex items-center justify-center text-natural-100 font-serif italic text-3xl">
                S
              </div>
              <h1 className="text-3xl font-serif text-natural-100 tracking-[0.1em] text-center mb-4 font-light">
                SHERZAD JAMAL
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-natural-700" />
                <p className="text-natural-500 font-sans tracking-[0.4em] uppercase text-[9px] font-bold">
                  SPECIALIST
                </p>
                <div className="w-8 h-px bg-natural-700" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md mx-auto min-h-screen flex flex-col pt-0 pb-12"
          >
            {/* Nav Header */}
            <header className="h-28 flex items-center justify-between px-8 glass-header elegant-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-natural-800 flex items-center justify-center text-white font-serif italic text-2xl shadow-xl shadow-natural-800/10">
                  S
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-light tracking-tight text-natural-800">
                    Sherzad <span className="text-natural-500 italic">Jamal</span>
                  </h1>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-natural-400 font-bold">SPECIALIST BARISTA</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowInfo(true)}
                  className="p-2.5 rounded-full hover:bg-natural-200/50 text-natural-600 transition-all active:scale-95"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </header>

            <div className="px-8 pt-10">
              {/* Search Bar */}
              <div className="relative group mb-12">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-natural-300 transition-colors group-focus-within:text-natural-500" />
                <input
                  type="text"
                  placeholder="Find your companion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-natural-200/30 border border-natural-300/30 py-4 pl-12 pr-4 rounded-xl outline-none focus:bg-white focus:border-natural-400 transition-all text-natural-800 placeholder:text-natural-300 text-sm font-light"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-natural-200 text-natural-400 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category Nav - Refined */}
              {searchQuery === '' && (
                <div className="mb-12 overflow-hidden">
                  <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4 mask-linear">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`
                            whitespace-nowrap text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative py-1
                            ${isActive 
                              ? 'opacity-100 scale-105' 
                              : 'opacity-40 hover:opacity-100'}
                          `}
                          style={{ color: isActive ? cat.color : undefined }}
                        >
                          {cat.name}
                          {isActive && (
                            <motion.div 
                              layoutId="activeTab"
                              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                              style={{ backgroundColor: cat.color }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Drinks Grid */}
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                  <h3 
                    className="font-serif italic text-3xl text-natural-800"
                    style={{ color: searchQuery === '' ? activeCategoryData?.color : undefined }}
                  >
                    {searchQuery !== '' ? 'Search Results' : activeCategoryData?.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-[1px] w-6 bg-natural-300 transition-colors" 
                      style={{ backgroundColor: searchQuery === '' ? `${activeCategoryData?.color}40` : undefined }}
                    />
                    <span className="text-[9px] uppercase tracking-widest text-natural-400 font-bold whitespace-nowrap">
                      {filteredItems.length} items
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setSelectedItem(item)}
                        className="group flex items-center justify-between py-6 cursor-pointer border-b border-natural-300/20 last:border-0 hover:px-2 transition-all duration-500 rounded-lg hover:bg-white/50"
                      >
                        <div className="flex items-center flex-grow min-w-0">
                          <div className="pl-0 min-w-0">
                            <h4 
                              className="text-base tracking-tight text-natural-800 transition-colors font-light"
                              style={{ 
                                '--hover-color': searchQuery === '' ? activeCategoryData?.color : '#4B5563' 
                              } as React.CSSProperties}
                            >
                              <span className="group-hover:text-[var(--hover-color)] transition-colors duration-500">
                                {item.name}
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="flex items-center gap-1.5 font-mono text-[14px] text-natural-700 font-light translate-y-0.5">
                            <span>{item.price.toLocaleString()}</span>
                            <span className="text-[7px] opacity-30 uppercase font-bold">IQD</span>
                          </div>
                          <div className="w-1 h-8 bg-natural-300/10 group-hover:bg-natural-300/40 transition-colors rounded-full" />
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 -translate-x-2">
                            <ChevronRight className="w-4 h-4 text-natural-400" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>


                {filteredItems.length === 0 && (
                  <div className="py-20 text-center">
                    <p className="font-serif italic text-natural-400">No selection matches your search</p>
                  </div>
                )}
              </div>
            </div>

            {/* Custom Footer */}
            <footer className="mt-auto pt-20 pb-12 px-8 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-px h-12 bg-gradient-to-b from-natural-300 to-transparent" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-natural-400 font-bold">
                  Sherzad Jamal Specialist
                </p>
                <div className="flex gap-4 opacity-10">
                  <Star className="w-3 h-3 text-natural-800 fill-natural-800" />
                </div>
                <p className="text-[9px] text-natural-300 italic max-w-[200px] leading-relaxed">
                  Crafting the perfect balance between tradition and specialty coffee culture.
                </p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Info Page Overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-natural-100 flex flex-col overflow-y-auto no-scrollbar"
          >
            <div className="max-w-md mx-auto w-full flex flex-col min-h-screen">
              {/* Info Header */}
              <header className="h-28 flex items-center justify-between px-8 bg-natural-100 sticky top-0 z-10">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="p-3 -ml-3 rounded-full hover:bg-natural-200/50 text-natural-800 transition-all active:scale-90"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-natural-400">Information</h2>
                <div className="w-12" /> {/* Spacer */}
              </header>

              <div className="px-8 pb-12">
                {/* Profile Image Section */}
                <div className="relative mb-12">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-natural-200 shadow-2xl">
                    <img 
                      src={BARISTA_PHOTO} 
                      alt="Sherzad Jamal"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-natural-900 px-6 py-3 rounded-full shadow-xl">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-natural-100 font-bold whitespace-nowrap">
                      Specialist Barista
                    </p>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-serif text-natural-800 mb-3 font-light">Sherzad Jamal</h1>
                  <p className="text-sm text-natural-400 font-light max-w-[280px] mx-auto leading-relaxed italic">
                    "Crafting coffee is not just a profession, it's an art form of balance and precision."
                  </p>
                </div>

                {/* Contact List */}
                <div className="space-y-4">
                  <a 
                    href="tel:07512051518"
                    className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-natural-300/20 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-natural-100 flex items-center justify-center text-natural-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1 font-bold">Contact Number</p>
                      <p className="text-base font-mono text-natural-800">0751 205 1518</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/sher_zebary?igsh=MXVvaDcwMXV4bXczaA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-natural-300/20 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1 font-bold">Instagram</p>
                      <p className="text-base text-natural-800 font-medium">@sher_zebary</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 p-6 bg-natural-200/30 rounded-3xl border border-natural-300/10">
                    <div className="w-12 h-12 rounded-2xl bg-natural-100 flex items-center justify-center text-natural-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-natural-400 mb-1 font-bold">Location</p>
                      <p className="text-base text-natural-500 font-light">Duhok, Kurdistan</p>
                    </div>
                  </div>
                </div>

                {/* Closing */}
                <div className="mt-16 text-center">
                  <div className="w-12 h-px bg-natural-300 mx-auto mb-8" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-natural-300 font-bold leading-relaxed px-12">
                    Available for consultations and specialty event catering.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Overlay - Theme Adjusted */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-natural-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0"
            />
            <motion.div
              layoutId={selectedItem.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm bg-natural-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="pr-4">
                    <h3 className="text-4xl font-serif text-natural-800 leading-[1.1] font-light">
                      {selectedItem.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="h-px w-8 bg-natural-300" />
                      <p className="text-[9px] uppercase tracking-[0.3em] text-natural-400 font-bold">
                        Specialty Note
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-natural-300/50 flex items-center justify-center text-natural-400 hover:bg-natural-200 transition-all active:scale-90"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center pb-6 border-b border-natural-300/30">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-natural-400 mb-2 font-bold">Investment</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-mono text-natural-800 tracking-tighter">{selectedItem.price.toLocaleString()}</span>
                        <span className="text-[10px] text-natural-400 font-mono font-bold">IQD</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-natural-200 flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-natural-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-natural-400" />
                      <p className="text-xs text-natural-600 font-light tracking-tight">Premium Grade Beans</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-natural-400" />
                      <p className="text-xs text-natural-600 font-light tracking-tight">Artisan Hand-Crafted</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-5 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all active:scale-[0.97] text-white shadow-xl"
                    style={{ 
                      backgroundColor: activeCategoryData?.color || '#2D2724',
                      boxShadow: `0 12px 24px -10px ${activeCategoryData?.color}80`
                    }}
                  >
                    Close Selection
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
