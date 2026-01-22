"use client";

import { useModal } from "@/providers/ModalProvider";
import { APP_NAME } from "@/constants/config";

import { useTranslations } from "next-intl";

export function CTA() {
    const { openDemoModal } = useModal();
    const t = useTranslations('CTA');

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-background to-slate-950">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
                        {t('title.main')} <br />
                        <span className="text-gradient">{t('title.highlight')}</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 relative z-10">
                        {t('description', { appName: APP_NAME })}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <button
                            onClick={openDemoModal}
                            className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/25"
                        >
                            {t('buttons.tryFree')}
                        </button>
                        <button
                            onClick={openDemoModal}
                            className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                        >
                            {t('buttons.talkToTeam')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
