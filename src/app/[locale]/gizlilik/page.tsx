import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - Gizlilik Politikası`,
    description: `${APP_NAME} gizlilik politikası ve veri işleme süreçleri hakkında detaylı bilgi.`,
};

export default function PrivacyPolicy() {
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">GİZLİLİK POLİTİKASI</h1>
                    <p className="text-slate-400 mb-12">Son Güncelleme: 01/01/2026</p>

                    <div className="space-y-10 text-slate-300 leading-relaxed">
                        <section>
                            <p>
                                <span className="font-bold text-white">{APP_NAME}</span> olarak, kullanıcılarımızın ("Emlak Danışmanı", "Ofis Yöneticisi" veya "Kiracı Adayı") gizliliğine önem veriyoruz. Bu metin, verilerinizin işlenme süreçlerini şeffaf bir şekilde açıklar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Toplanan Veriler ve Kaynakları</h2>
                            <p className="mb-4">Hizmet sunumu sırasında projemizdeki veritabanı şeması ve teknik altyapı gereği aşağıdaki verileri topluyoruz:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">Kimlik ve İletişim Bilgileri:</span> Ad-soyad, e-posta adresi, telefon numarası, profil fotoğrafı (avatarUrl) ve sistem üzerindeki benzersiz kullanıcı kimlikleri (UUID/CUID).</li>
                                <li><span className="text-white font-medium">Profesyonel ve Ofis Verileri:</span> Gayrimenkul ofisi lisans bilgileri (taşınmaz ticareti yetki belgesi), ticari unvan, ofis yerleşkesi (adres, koordinatlar), kurumsal sosyal medya hesapları (X, Facebook, Instagram, LinkedIn, YouTube) ve web sitesi URL'si.</li>
                                <li><span className="text-white font-medium">Taşınmaz (Gayrimenkul) Verileri:</span> Portföyünüzdeki mülklerin detaylı özellikleri (fiyat, alan, oda sayısı, kat bilgisi, imar durumu, ada/parsel numaraları), konum koordinatları (enlem/boylam), tapu durumu, ilan görselleri ve videoları (3D kaynaklar dahil).</li>
                                <li><span className="text-white font-medium">Talep ve İletişim Kayıtları:</span> Kiracı adaylarının veya müşterilerin gönderdiği mesaj içerikleri, iletişim formları, danışman puanlamaları ve yorumları (OfficeWorkerReview).</li>
                                <li><span className="text-white font-medium">Kullanım ve Tercih Verileri:</span> Platform üzerindeki içerik arama/filtreleme alışkanlıkları, KVKK ve pazarlama izinlerine ilişkin onay kayıtları (marketingConsent, kvkkConsent).</li>
                                <li><span className="text-white font-medium">Teknik ve Cihaz Bilgileri:</span> IP adresi, işletim sistemi, tarayıcı türü, sisteme giriş kayıtları (createdAt, updatedAt timestamps) ve içerik yönetim anahtarları.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Verilerin İşlenme Amaçları</h2>
                            <p className="mb-4">Verileriniz şu amaçlarla işlenir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">SaaS Hizmetinin Sağlanması:</span> Emlak portföyünüzün yönetilmesi, dijital kartvizit ve ofis profillerinin oluşturulması, ilan yayınlama süreçlerinin yürütülmesi.</li>
                                <li><span className="text-white font-medium">Akıllı Eşleştirme ve Analiz:</span> Müşteri talepleri ile gayrimenkul özelliklerinin teknik olarak karşılaştırılması, bölge bazlı konum analizleri ve operasyonel verimlilik.</li>
                                <li><span className="text-white font-medium">Güvenlik ve Denetim:</span> Yetkisiz erişimlerin engellenmesi, işlem geçmişinin (activity_log) tutulması ve sistem optimizasyonu.</li>
                                <li><span className="text-white font-medium">İletişim Yönetimi:</span> Müşteri taleplerinin ilgili danışmanlara yönlendirilmesi ve hizmet kalitesinin ölçülmesi.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Veri Saklama ve Altyapı</h2>
                            <p>
                                <span className="font-bold text-white">{APP_NAME}</span> altyapısı, yüksek performanslı Nvidia donanımları ve multi-agent yapay zeka sistemleri (Antigravity mimarisi) ile desteklenmektedir. Verileriniz, Postgres tabanlı ilişkisel veritabanlarında, endüstri standardı şifreleme yöntemleri kullanılarak güvenli sunucularda barındırılır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Veri Paylaşımı</h2>
                            <p className="mb-4">Verileriniz, kullanıcının açık rızası olmaksızın üçüncü taraflara satılmaz. Ancak;</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">Entegrasyonlar:</span> İlan yayınlama işlemleri için yetkilendirdiğiniz platformlarla,</li>
                                <li><span className="text-white font-medium">Ödemeler:</span> Ödeme altyapısı sağlayıcıları ve lisanslı ödeme kuruluşlarıyla,</li>
                                <li><span className="text-white font-medium">Yasal Yükümlülükler:</span> Mevzuat gereği adli veya idari makamlarca talep edilmesi durumunda.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Kullanıcı Hakları</h2>
                            <p>
                                Kullanıcılar; verilerine erişme, düzeltme, silme (unutulma hakkı) ve veri işleme faaliyetine itiraz etme hakkına sahiptir. Bu talepleriniz için
                                <a href="mailto:support@tukanft.com" className="text-primary hover:underline ml-1">support@tukanft.com</a> adresi üzerinden bizimle iletişime geçebilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
