"use client";

import React from 'react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { APP_NAME, NAV_LINKS } from '@/constants/config';
import { cn } from '@/lib/utils';
import { Building2 } from 'lucide-react';
import { useModal } from '@/providers/ModalProvider';

export const Navbar = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar approx
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
    const { openDemoModal } = useModal();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6"
        >
            <div className="flex items-center justify-between w-full max-w-7xl px-6 py-3 glass rounded-full shadow-2xl">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                        <Building2 size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    onClick={openDemoModal}
                    className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                    Demo Randevusu Al
                </button>
            </div>
        </motion.nav>
    );
};
