"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation'; // Use standard Next.js navigation for query params
import featureIds from '@/content/features.json';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export const BentoGrid = () => {
    const t = useTranslations("BentoGrid");
    const router = useRouter();
    const pathname = usePathname();

    const openFeature = (id: string) => {
        // Construct URL with query param
        // This keeps us on the same page (or standardized /features page if we move there)
        // For now, we assume user is on a page where this component renders.
        // If we want to strictly force /features, we would do: router.push(`/features?item=${id}`, { scroll: false });
        // But the requirement says "Move ... to /features".
        // Let's assume we are standardizing on /features for the detail view.

        // If we are currently on /features (or localized), we just append param.
        // If we represent the home page section, we might want to push to the features page?
        // Let's implement dynamic logic: if user is on home, maybe push to /features?item=...
        // But that triggers a navigation. 
        // "Modal açıldığında URL'e opsiyonel bir query parametresi ekle"
        // Let's stick to current path for smoother experience unless standardization demands page switch.
        // Given "Move ... to /features", I will use /features base path if not already there,
        // BUT I haven't redirected the home page section yet.
        // Let's keep it simple: push query param on CURRENT path for now to satisfy "Modal... URL param".
        // *Self-Correction*: I'll push to current path to avoid full page reload flash if /features doesn't exist yet.

        const params = new URLSearchParams(window.location.search);
        params.set('item', id);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const benefits = featureIds.map(f => f.id);
    return (
        <section id="features" className="py-24 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("title")}</h2>
                    <p className="text-slate-400 max-w-2xl">{t("description")}</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    {benefits.map((key, idx) => {
                        const iconName = t(`items.${key}.icon`);
                        const Icon = (Icons as any)[iconName] || Icons.HelpCircle;

                        return (
                            <motion.div
                                key={key}
                                onClick={() => openFeature(key)}
                                variants={item}
                                className={`${idx === 0 || idx === 3 ? "md:col-span-12 lg:col-span-7" : "md:col-span-12 lg:col-span-5"} cursor-pointer`}
                            >
                                <div className="bento-card h-full flex flex-col justify-between group">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="p-4 rounded-2xl bg-slate-800 text-primary group-hover:scale-110 transition-transform duration-500">
                                            <Icon size={32} />
                                        </div>

                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">{t(`items.${key}.title`)}</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2">{t(`items.${key}.description`)}</p>

                                        <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
                                            {t("cta")} <Icons.ChevronRight className="ml-1" size={16} />
                                        </div>
                                    </div>

                                    {/* Aesthetic backgrounds */}
                                    {idx === 0 && (
                                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                                    )}
                                    {idx === 2 && (
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full" />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
