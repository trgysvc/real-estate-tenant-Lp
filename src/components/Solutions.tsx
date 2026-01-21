"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building, Code, CheckCircle2 } from 'lucide-react';
import { APP_NAME } from '@/constants/config';

const TABS = [
    {
        id: 'agents',
        label: 'Emlak Ofisleri İçin',
        icon: Users,
        title: 'Danışman Performansını ve İlan Yönetimini Optimize Edin',
        description: 'Gayrimenkul danışmanlarınız için hiyerarşik yönetim ve detaylı performans takibi.',
        features: [
            'Gelişmiş Danışman Profilleri & Yorumlar',
            'Merkezi İletişim ve Randevu Takibi',
            'Matterport 3D ve Video Entegrasyonu',
            'Ofis Hiyerarşisi ve Yetkilendirme'
        ]
    },
    {
        id: 'managers',
        label: 'Mülk Yönetimi İçin',
        icon: Building,
        title: 'Portföyünüzü Profesyonelce Yönetin',
        description: 'Geniş ölçekli konut projelerinden ticari alanlara kadar her şeyi tek bir yerden kontrol edin.',
        features: [
            'Büyük Ölçekli Yeni Konut Projeleri Yönetimi',
            'Kiracı ve Bakım Talebi Yönetimi',
            'Sosyal Donatı ve Alan Tanımları',
            'Proje Bazlı Özel Danışman Atama'
        ]
    }
];

export const Solutions = () => {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <section id="solutions" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Her Role Uygun Çözümler</h2>
                    <p className="text-slate-400">İster bağımsız bir danışman olun, ister büyük bir mülk yönetim şirketi; {APP_NAME} sizin için ölçeklenir.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full border transition-all ${activeTab.id === tab.id
                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="font-semibold">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900/30 rounded-[3rem] p-8 md:p-12 border border-white/5">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 leading-tight">{activeTab.title}</h3>
                        <p className="text-slate-400 mb-8 text-lg">{activeTab.description}</p>

                        <ul className="space-y-4">
                            {activeTab.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        key={activeTab.id + "-visual"}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-square lg:aspect-video glass rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
                        <div className="p-8 h-full flex items-center justify-center">
                            <div className="w-full h-full bg-slate-950 rounded-2xl border border-white/10 p-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 w-1/2 bg-slate-800 rounded" />
                                    <div className="h-20 w-full bg-slate-800/50 rounded-xl" />
                                    <div className="h-4 w-3/4 bg-slate-800 rounded" />
                                    <div className="h-32 w-full bg-slate-800/30 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
