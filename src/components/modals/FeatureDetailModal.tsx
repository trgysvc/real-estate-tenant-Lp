"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import * as Icons from 'lucide-react';
import { X } from 'lucide-react';

export const FeatureDetailModal = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const t = useTranslations("BentoGrid");
    const itemKey = searchParams.get('item');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (itemKey) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [itemKey]);

    const handleClose = () => {
        setIsOpen(false);
        // Remove query param but keep scroll position
        const url = new URL(window.location.href);
        url.searchParams.delete('item');
        router.replace(url.pathname + url.search, { scroll: false });
    };

    if (!itemKey) return null;

    // Get icon from translation or mapping logic. 
    // Since we put icon names in the translation file in previous steps (or messages),
    // we can try to fetch it. However, the icons were part of the iteration logic in BentoGrid.
    // Let's assume the key exists in translation.
    // Fallback: We can't easily import features.json here if we want to stay pure client without prop drilling, 
    // but importing json is fine.

    // Actually, let's just use the translation key to check existence.
    const hasTranslation = ["high-speed-search", "enterprise-security", "ai-assistant", "global-infrastructure"].includes(itemKey);

    if (!hasTranslation) return null;

    const iconName = t(`items.${itemKey}.icon`);
    const Icon = (Icons as any)[iconName] || Icons.Zap;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
                    >
                        {/* Hero Gradient Background using Icon */}
                        <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-slate-950/20" />
                            <Icon size={120} className="text-white/10 absolute -bottom-10 -right-10 rotate-12" />
                            <Icon size={64} className="text-primary relative z-10 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                                {t(`items.${itemKey}.tech`)}
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-6">
                                {t(`items.${itemKey}.title`)}
                            </h2>

                            <p className="text-lg text-slate-300 leading-relaxed">
                                {t(`items.${itemKey}.description`)}
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                                <button
                                    onClick={handleClose}
                                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
