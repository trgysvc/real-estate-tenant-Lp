import React from 'react';
import { APP_NAME } from '@/constants/config';
import { Building2, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
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
                            Gayrimenkul sektörünü yapay zeka ve modern teknik altyapı ile dönüştürüyoruz. Hız, güvenlik ve verimlilik odaklı yeni nesil işletim sistemi.
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
                        <h4 className="font-bold mb-6">Ürün</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#features" className="hover:text-primary transition-colors">Özellikler</a></li>
                            <li><a href="#solutions" className="hover:text-primary transition-colors">Çözümler</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Yol Haritası</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sık Sorulanlar</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6">Kurumsal</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Kariyer</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">İletişim</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-6">Yasal</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Kullanım Şartları</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Çerez Politikası</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">KVKK</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} {APP_NAME}. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">Powered by Typesense, Kinde, Supabase & Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
