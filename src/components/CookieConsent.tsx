"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { X, Cookie, Check, ExternalLink } from 'lucide-react';
import { APP_NAME } from '@/constants/config';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [marketingConsent, setMarketingConsent] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        if (marketingConsent) {
            localStorage.setItem('marketing-consent', 'true');
        }
        setIsVisible(false);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-md z-[100]"
                    >
                        <div className="glass p-6 rounded-3xl border-primary/20 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10" />

                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-primary/20 text-primary shrink-0">
                                    <Cookie size={20} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-sm font-bold mb-2">Gizlilik ve İletişim Tercihleri</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                        Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Sitemizi kullanarak çerez politikamızı kabul etmiş sayılırsınız.
                                    </p>

                                    <div
                                        className="flex items-start gap-2 mb-4 group cursor-pointer"
                                        onClick={() => setMarketingConsent(!marketingConsent)}
                                    >
                                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${marketingConsent ? 'bg-primary border-primary' : 'border-slate-600 group-hover:border-slate-400'}`}>
                                            {marketingConsent && <Check size={10} className="text-white" />}
                                        </div>
                                        <span className="text-[10px] text-slate-500 leading-tight select-none">
                                            Kampanya ve duyurulardan haberdar olmak için <b>Ticari Elektronik İleti</b> gönderilmesini onaylıyorum.
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={acceptCookies}
                                            className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all hover:scale-105"
                                        >
                                            Onayla ve Kapat
                                        </button>
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                                        >
                                            Detaylı Bilgi
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cookie Policy Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden glass rounded-[2.5rem] border-white/10 shadow-3xl flex flex-col"
                        >
                            <div className="p-8 border-b border-white/5 flex items-center justify-between shrink-0">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <Cookie className="text-primary" />
                                    Çerez Politikası
                                </h3>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto custom-scrollbar">
                                <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
                                    <p>
                                        <span className="font-bold text-white uppercase">{APP_NAME} Çerez Politikası</span> <br />
                                        Son Güncelleme: 22/01/2026
                                    </p>
                                    <p>
                                        {APP_NAME} (&quot;Şirket&quot;) olarak, web sitemizi ve uygulamalarımızı ziyaretiniz sırasında deneyiminizi geliştirmek, hizmetlerimizi optimize etmek ve güvenliğinizi sağlamak amacıyla çerezler (cookies) kullanmaktayız.
                                    </p>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white">1. Çerez Nedir?</h4>
                                        <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza bırakılan küçük metin dosyalarıdır.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white">2. Hangi Çerezleri ve Neden Kullanıyoruz?</h4>
                                        <ul className="space-y-3">
                                            <li><b className="text-slate-300">Zorunlu Çerezler:</b> Sitenin temel işlevlerini (oturum yönetimi, güvenlik) yerine getirmesi için gereklidir.</li>
                                            <li><b className="text-slate-300">Performans ve Analiz Çerezleri:</b> Sitemizin hızını anonim olarak ölçmemize yardımcı olur.</li>
                                            <li><b className="text-slate-300">Akıllı Eşleştirme Çerezleri:</b> Yapay zeka sistemlerimizin size en uyumlu ilanları sunabilmesi amacıyla kullanılır.</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white">3. Çerez Yönetimi</h4>
                                        <p>Çerezleri kabul etmek zorunda değilsiniz. Tarayıcı ayarlarınızdan çerezleri engelleyebilirsiniz.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                                        <span className="text-xs text-primary font-medium">Tam metin için politikayı görüntüleyin:</span>
                                        <Link
                                            href="/cerez-politikasi"
                                            onClick={() => setShowModal(false)}
                                            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                                        >
                                            Tam Metin <ExternalLink size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
