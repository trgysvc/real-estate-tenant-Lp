"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export default function TermsOfServicePage() {
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">Kullanım Şartları</h1>
                    <p className="text-slate-400 mb-12">Son Güncelleme: 22/01/2026</p>

                    <div className="space-y-10 text-slate-300 leading-relaxed">
                        <section>
                            <p>
                                İşbu Kullanım Şartları, <span className="font-bold text-white">{APP_NAME}</span> ("Platform") üzerinden sunulan hizmetlerin kullanımına ilişkin kuralları ve tarafların haklarını belirler. Platformu kullanarak bu şartları peşinen kabul etmiş sayılırsınız.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Hizmet Tanımı ve Kapsamı</h2>
                            <p>
                                {APP_NAME}, gayrimenkul veri yönetimi, ilan portföy takibi, müşteri talepleri ile mülklerin yapay zeka destekli akıllı eşleştirilmesi ve dijital asistan hizmetleri sunan bulut tabanlı bir SaaS (Software as a Service) platformudur. Platform, seçilen abonelik paketine göre farklı teknik kapasiteler sunar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Üyelik ve Hesap Güvenliği</h2>
                            <p>
                                Kullanıcılar, kayıt sırasında verdikleri bilgilerin doğruluğundan ve güncelliğinden sorumludur. Hesabınıza erişim sağlayan şifrelerin güvenliği tamamen kullanıcının sorumluluğundadır. Yetkisiz bir erişim fark edildiğinde derhal destek ekibimize bildirilmesi gerekmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Abonelik Paketleri ve Ödeme</h2>
                            <div className="space-y-4">
                                <p>
                                    Kullanıcı, seçtiği paketin (Bireysel Lite/Pro, Profesyonel Lite/Pro, Kurumsal) teknik limitlerini (ilan sayısı, kullanıcı sayısı vb.) kabul eder. Ücretler, seçilen faturalandırma dönemine (aylık/yıllık) göre dönem başında tahsil edilir.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><span className="text-white font-medium">Yükseltme (Upgrade):</span> Dilediğiniz zaman üst pakete geçebilirsiniz. Mevcut bakiyeniz yeni paketten mahsup edilir.</li>
                                    <li><span className="text-white font-medium">Düşürme (Downgrade):</span> Paket düşürme işlemleri dönem sonunda aktifleşir. Dönem ortası iade yapılmaz.</li>
                                    <li><span className="text-white font-medium">Teknik Limit Aşımı:</span> Limitlerin aşılması durumunda sistem uyarı verir. Limit aşımı nedeniyle oluşabilecek veri kayıplarından {APP_NAME} sorumlu tutulamaz.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Kullanım Kuralları ve Sorumluluklar</h2>
                            <p>
                                Platformun tersine mühendislik yöntemleriyle kopyalanması, sistem güvenliğinin zorlanması veya platform üzerinden yasaya aykırı içerik paylaşılması kesinlikle yasaktır. Kullanıcı, platformu sadece ticari ve etik kurallar çerçevesinde kullanmayı taahhüt eder.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Yapay Zeka ve Veri İşleme</h2>
                            <p>
                                {APP_NAME}, yüksek performanslı Nvidia donanımları ve multi-agent yapay zeka sistemleri (Antigravity mimarisi) kullanarak verimlilik analizi yapar. Bu sistemler, verilerinizi anonimleştirilmiş istatistiksel veriler olarak işleyerek eşleştirme algoritmalarını optimize eder.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Fikri Mülkiyet Hakları</h2>
                            <p>
                                Platformun tüm yazılım kodları, tasarımı, logoları ve algoritmaları {APP_NAME}'in mülkiyetindedir. Kullanıcılara sağlanan erişim hakkı, sınırlı ve devredilemez bir kullanım lisansıdır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Sorumluluk Sınırlandırması</h2>
                            <p>
                                {APP_NAME}, teknik arızalardan, siber saldırılardan veya mücbir sebeplerden kaynaklanabilecek veri kayıpları veya geçici erişim kesintilerinden sorumlu tutulamaz. Platform "olduğu gibi" sunulmaktadır ve kesin ticari kazanç garantisi vermez.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Değişiklikler</h2>
                            <p>
                                Platform yönetimi, işbu kullanım şartlarını dilediği zaman güncelleme hakkını saklı tutar. Önemli değişiklikler kullanıcılara e-posta veya sistem içi bildirimler aracılığıyla duyurulur. Güncel şartlar yayınlandığı andan itibaren yürürlüğe girer.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
