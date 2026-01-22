import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - KVKK Aydınlatma Metni`,
    description: `${APP_NAME} 6698 sayılı KVKK uyarınca kişisel verilerin işlenmesine ilişkin aydınlatma metni.`,
};

export default function KVKKPage() {
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">6698 SAYILI KVKK UYARINCA AYDINLATMA METNİ</h1>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <p className="font-bold text-white mb-2">Veri Sorumlusu: {APP_NAME} (Şirket Unvanı Buraya Gelecek)</p>
                            <p>
                                {APP_NAME} olarak, kişisel verilerinizin güvenliğine ve hukuka uygun işlenmesine azami önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla sizi bilgilendirmek isteriz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. İşlenen Kişisel Verileriniz</h2>
                            <p className="mb-4">Platformumuzu kullanımınız sırasında şu verileriniz işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">Kimlik Bilgileri:</span> Ad, soyad, T.C. kimlik numarası (doğrulama gerektiren durumlarda).</li>
                                <li><span className="text-white font-medium">İletişim Bilgileri:</span> E-posta adresi, telefon numarası.</li>
                                <li><span className="text-white font-medium">Müşteri İşlem Bilgileri:</span> Seçilen abonelik paketi (Bireysel/Profesyonel/Kurumsal), ilan detayları, randevu kayıtları.</li>
                                <li><span className="text-white font-medium">İşlem Güvenliği:</span> IP adresi, giriş-çıkış kayıtları, şifre bilgileri.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
                            <p className="mb-4">Kişisel verileriniz;</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sözleşme süreçlerinin yürütülmesi ve hizmetin (SaaS) ifası,</li>
                                <li>Yapay zeka destekli akıllı eşleştirme ve emlak yönetim sisteminin optimizasyonu,</li>
                                <li>Finans ve muhasebe işlerinin (fatura/ödeme) takibi,</li>
                                <li>Mevzuattan kaynaklanan hukuki yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Kişisel Verilerin Aktarılması</h2>
                            <p className="mb-4">Verileriniz, yalnızca aşağıdaki durumlarda üçüncü taraflarla paylaşılır:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">Hizmet Sağlayıcılar:</span> Altyapı ve barındırma hizmeti alınan iş ortakları (Örn: Donanım ve yapay zeka altyapısı sağlayıcıları).</li>
                                <li><span className="text-white font-medium">Ödeme Kuruluşları:</span> Abonelik ücretlerinin tahsil edilmesi amacıyla lisanslı ödeme firmaları.</li>
                                <li><span className="text-white font-medium">Hukuki Talepler:</span> Yetkili kamu kurum ve kuruluşları ile adli makamlara yasal zorunluluklar dahilinde.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Veri Toplama Yöntemi ve Hukuki Sebepler</h2>
                            <p>
                                Kişisel verileriniz, {APP_NAME} web sitesi ve mobil uygulaması üzerinden tamamen otomatik yöntemlerle; "bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve "veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi" hukuki sebeplerine dayanarak toplanmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Veri Sahibi Olarak Haklarınız (Madde 11)</h2>
                            <p className="mb-4">KVKK kapsamında; verilerinizin işlenip işlenmediğini öğrenme, yanlış verilerin düzeltilmesini isteme, verilerin silinmesini talep etme ve uğradığınız zararın giderilmesini isteme haklarına sahipsiniz.</p>
                            <p>
                                Haklarınızı kullanmak için <a href="mailto:support@tenancyestate.com" className="text-primary hover:underline">support@tenancyestate.com</a> adresine başvurabilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
