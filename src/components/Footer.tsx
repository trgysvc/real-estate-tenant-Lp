"use client";
import React from 'react';
import { Link } from '@/i18n/routing';
import { APP_NAME } from '@/constants/config';
import { Building2, Github, Twitter, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer = () => {
    const t = useTranslations('Footer');
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // match navbar offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 rounded-xl bg-primary/20 text-primary">
                                <Building2 size={24} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
                        </div>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {t('description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="font-bold mb-6">{t('headers.product')}</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/features" className="hover:text-primary transition-colors cursor-pointer">{t('links.features')}</Link></li>
                            <li><a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-primary transition-colors cursor-pointer">{t('links.solutions')}</a></li>
                            <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-primary transition-colors cursor-pointer">{t('links.pricing')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.roadmap')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.faq')}</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6">{t('headers.corporate')}</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.about')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.career')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.contact')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('links.blog')}</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6">{t('headers.legal')}</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('links.privacy')}</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">{t('links.terms')}</Link></li>
                            <li><Link href="/cookies" className="hover:text-primary transition-colors">{t('links.cookies')}</Link></li>
                            <li><Link href="/data-protection" className="hover:text-primary transition-colors">{t('links.kvkk')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">
                        {t('copyright', { year: new Date().getFullYear(), appName: APP_NAME })}
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">{t('poweredBy')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
