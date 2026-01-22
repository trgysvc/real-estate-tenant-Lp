import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - Gizlilik Politikası`,
    description: `${APP_NAME} gizlilik politikası ve veri işleme süreçleri hakkında detaylı bilgi.`,
};

import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
    const t = useTranslations('PrivacyPolicy');
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{t('title')}</h1>
                    <p className="text-slate-400 mb-12">{t('lastUpdated')}</p>

                    <div className="space-y-10 text-slate-300 leading-relaxed">
                        <section>
                            <p>
                                {t.rich('intro', {
                                    appName: APP_NAME,
                                    bold: (chunks) => <span className="font-bold text-white">{chunks}</span>
                                })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.1.title')}</h2>
                            <p className="mb-4">{t('sections.1.content')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <li key={i}>{t.rich(`sections.1.items.${i}`, {
                                        bold: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                    })}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.2.title')}</h2>
                            <p className="mb-4">{t('sections.2.content')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <li key={i}>{t.rich(`sections.2.items.${i}`, {
                                        bold: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                    })}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.3.title')}</h2>
                            <p>
                                {t.rich('sections.3.content', {
                                    appName: APP_NAME,
                                    bold: (chunks) => <span className="font-bold text-white">{chunks}</span>
                                })}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.4.title')}</h2>
                            <p className="mb-4">{t('sections.4.content')}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {[0, 1, 2].map((i) => (
                                    <li key={i}>{t.rich(`sections.4.items.${i}`, {
                                        bold: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                    })}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.5.title')}</h2>
                            <p>
                                {t.rich('sections.5.content', {
                                    link: (chunks) => <a href="mailto:support@tukanft.com" className="text-primary hover:underline ml-1">{chunks}</a>
                                })}
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
