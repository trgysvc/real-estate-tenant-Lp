"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Zap, ChevronRight } from 'lucide-react';

const MOCK_RESULTS = [
    { id: 1, title: "Modern Lüks Villa", price: "2.450.000 TL", location: "Beverly Hills" },
    { id: 2, title: "Modern Penthouse", price: "1.890.000 TL", location: "Manhattan" },
    { id: 3, title: "Deniz Manzaralı Malikane", price: "4.200.000 TL", location: "Miami" },
];

import { useTranslations } from 'next-intl';

export const Hero = () => {
    const t = useTranslations('Hero');
    const [searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        <Sparkles className="w-3 h-3 inline-block mr-2 -mt-0.5" />
                        {t('badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                        {t('title.main')} <br />
                        <span className="text-gradient">{t('title.highlight')}</span> {t('title.suffix')}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Interactive Search Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-xl mx-auto mb-20 relative"
                >
                    <div className="relative group p-1 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 focus-within:from-primary focus-within:to-secondary transition-all">
                        <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-xl">
                            <Search className="text-slate-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder={t('search.placeholder')}
                                className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-600"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setShowResults(e.target.value.length > 0);
                                }}
                                onFocus={() => searchTerm.length > 0 && setShowResults(true)}
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-700 text-slate-500">{t('search.badge')}</span>
                                <span className="text-[10px] font-medium text-primary animate-pulse">{t('search.latency')}</span>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showResults && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-4 p-4 glass rounded-2xl shadow-2xl border-white/10 overflow-hidden"
                                >
                                    <div className="space-y-4">
                                        {MOCK_RESULTS.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                                                <div>
                                                    <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{item.title}</p>
                                                    <p className="text-xs text-slate-500">{item.location}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-accent">{item.price}</p>
                                                    <p className="text-[10px] text-slate-600">Hemen incele</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Dashboard Mockup (CSS) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl rounded-[3rem] -z-10" />
                    <div className="glass rounded-[2rem] border-white/5 p-4 shadow-2xl">
                        <div className="bg-slate-950 rounded-[1.5rem] border border-white/5 aspect-video overflow-hidden relative">
                            {/* Sidebar Mockup */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 border-right border-white/5 bg-slate-900/50 p-4 space-y-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 mx-auto" />
                                <div className="space-y-4 pt-10">
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 mx-auto" />
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 mx-auto" />
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 mx-auto" />
                                </div>
                            </div>
                            {/* Content Mockup */}
                            <div className="ml-20 p-8 space-y-8">
                                <div className="flex justify-between items-center">
                                    <div className="h-8 w-48 bg-slate-800 rounded-lg animate-pulse" />
                                    <div className="h-8 w-24 bg-primary/20 rounded-lg" />
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="h-40 glass rounded-2xl animate-pulse" />
                                    <div className="h-40 glass rounded-2xl animate-pulse" />
                                    <div className="h-40 glass rounded-2xl animate-pulse" />
                                </div>
                                <div className="h-64 glass rounded-2xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
