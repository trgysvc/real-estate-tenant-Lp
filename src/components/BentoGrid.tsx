"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TECHNICAL_BENEFITS } from '@/constants/config';
import * as Icons from 'lucide-react';

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
    return (
        <section id="features" className="py-24 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Neden Biz?</h2>
                    <p className="text-slate-400 max-w-2xl">Teknik üstünlüğümüzü işinizi büyütmeniz için tasarladık. Modern gayrimenkulün tüm ihtiyaçları tek bir çatı altında.</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    {TECHNICAL_BENEFITS.map((benefit, idx) => {
                        const Icon = (Icons as any)[benefit.icon];

                        return (
                            <motion.div
                                key={idx}
                                variants={item}
                                className={idx === 0 || idx === 3 ? "md:col-span-12 lg:col-span-7" : "md:col-span-12 lg:col-span-5"}
                            >
                                <div className="bento-card h-full flex flex-col justify-between group">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="p-4 rounded-2xl bg-slate-800 text-primary group-hover:scale-110 transition-transform duration-500">
                                            <Icon size={32} />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full border border-slate-700 text-slate-500">
                                            {benefit.tech}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6">{benefit.description}</p>

                                        <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
                                            Detaylı İncele <Icons.ChevronRight className="ml-1" size={16} />
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
