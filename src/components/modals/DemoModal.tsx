"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Building2, User, Mail, Phone, Package } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const t = useTranslations('DemoModal');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        selectedPlan: "Bireysel Lite"
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Fetch IP Address
            let ipAddress = 'Unknown';
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                if (ipResponse.ok) {
                    const ipData = await ipResponse.json();
                    ipAddress = ipData.ip;
                }
            } catch (err) {
                console.error('Failed to fetch IP:', err);
            }

            const submissionData = {
                ...formData,
                ip: ipAddress,
                timestamp: new Date().toISOString()
            };

            const response = await fetch('/api/submit-demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Server Error Detail:', errorData);
                throw new Error(errorData.error || 'Bir hata oluştu');
            }

            setIsSubmitting(false);
            setIsSuccess(true);

            // 3 saniye sonra modalı kapat ve formu sıfırla
            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        companyName: "",
                        selectedPlan: "Bireysel Lite"
                    });
                }, 500);
            }, 3000);

        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
            // Hata durumunda kullanıcıya bilgi verilebilir
            alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg glass-dark border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 md:p-12">
                            {!isSuccess ? (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
                                        <p className="text-slate-400">{t('subtitle')}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300 ml-1">{t('inputs.name')}</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        placeholder={t('inputs.namePlaceholder')}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300 ml-1">{t('inputs.email')}</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder={t('inputs.emailPlaceholder')}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300 ml-1">{t('inputs.phone')}</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder={t('inputs.phonePlaceholder')}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300 ml-1">{t('inputs.company')}</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.companyName}
                                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                        placeholder={t('inputs.companyPlaceholder')}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">{t('inputs.plan')}</label>
                                            <div className="relative">
                                                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                                <select
                                                    value={formData.selectedPlan}
                                                    onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-10 focus:outline-none focus:border-primary transition-colors text-sm appearance-none cursor-pointer"
                                                >
                                                    <option value="Bireysel Lite">Bireysel Lite</option>
                                                    <option value="Bireysel Pro">Bireysel Pro</option>
                                                    <option value="Profesyonel Lite">Profesyonel Lite</option>
                                                    <option value="Profesyonel Pro">Profesyonel Pro</option>
                                                    <option value="Kurumsal">Kurumsal</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/25 mt-4 flex items-center justify-center gap-2 group"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    {t('submit')}
                                                    <motion.span
                                                        animate={{ x: [0, 4, 0] }}
                                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </>
                                            )}
                                        </button>

                                        <p className="text-[11px] text-slate-500 text-center leading-tight">
                                            {t.rich('legal', {
                                                link: (chunks) => <Link href="/data-protection" onClick={onClose} className="text-primary hover:underline">{chunks}</Link>
                                            })}
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{t('success.title')}</h2>
                                    <p className="text-slate-400 max-w-[280px]">
                                        {t('success.message')}
                                    </p>
                                    <div className="mt-8 text-sm text-slate-500 animate-pulse">
                                        {t('success.closing')}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
