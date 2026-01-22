"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building2, Crown, Globe } from 'lucide-react';
import { useModal } from '@/providers/ModalProvider';
import plansData from '@/constants/plans.json';

const getIcon = (id: string) => {
    switch (id) {
        case 'individual-lite': return <Zap className="w-6 h-6" />;
        case 'individual-pro': return <Crown className="w-6 h-6" />;
        case 'professional-lite': return <Building2 className="w-6 h-6" />;
        case 'professional-pro': return <Building2 className="w-6 h-6" />;
        case 'enterprise': return <Globe className="w-6 h-6" />;
        default: return <Zap className="w-6 h-6" />;
    }
};

export const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const { openDemoModal } = useModal();

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        İşinizi Büyütecek <span className="text-gradient">Esnek Planlar</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10">
                        Her ölçekteki emlak operasyonu için optimize edilmiş abonelik seçenekleri. Şimdi başlayın, işinizle birlikte ölçekleyin.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Aylık</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="relative w-14 h-7 bg-slate-800 rounded-full p-1 transition-colors hover:bg-slate-700"
                        >
                            <motion.div
                                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                                className="w-5 h-5 bg-primary rounded-full shadow-lg"
                            />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-500'}`}>Yıllık</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
                                %20 İndirim
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {plansData.plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col p-8 rounded-[2rem] h-full transition-all duration-300 ${plan.highlight
                                ? 'bg-slate-900 border-2 border-primary/50 shadow-2xl shadow-primary/20 scale-105 z-10'
                                : 'bg-white/5 border border-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-bold tracking-widest uppercase">
                                    En Popüler
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-primary text-white' : 'bg-white/5 text-primary'
                                    }`}>
                                    {getIcon(plan.id)}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold">
                                        Bilgi Al!
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">
                                    {plan.users} için ideal
                                </p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Limitler</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check size={14} className="text-primary flex-shrink-0" />
                                        <span>{plan.limits.properties} Portföy</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check size={14} className="text-primary flex-shrink-0" />
                                        <span>{plan.limits.aiCredits} AI Kredisi</span>
                                    </li>
                                </ul>

                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest pt-4">Özellikler</div>
                                <ul className="space-y-3">
                                    {plan.features.slice(0, 4).map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                            <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={openDemoModal}
                                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                                    }`}>
                                {plan.id === 'enterprise' ? 'Bize Ulaşın' : 'Hemen Başlayın'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};
