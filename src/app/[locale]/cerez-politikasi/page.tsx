import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

export const metadata = {
    title: `${APP_NAME} - Çerez Politikası`,
    description: `${APP_NAME} çerez kullanımı ve yönetimi hakkında detaylı bilgi.`,
};

export default function CookiePolicyPage() {
    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight uppercase">ÇEREZ POLİTİKASI (COOKIE POLICY)</h1>
                    <p className="text-slate-400 mb-8">Son Güncelleme: 22/01/2026</p>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <p>
                                <span className="font-bold text-white">{APP_NAME}</span> ("Şirket") olarak, web sitemizi ve uygulamalarımızı ziyaretiniz sırasında deneyiminizi geliştirmek, hizmetlerimizi optimize etmek ve güvenliğinizi sağlamak amacıyla çerezler (cookies) kullanmaktayız.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Çerez Nedir?</h2>
                            <p>
                                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza bırakılan küçük metin dosyalarıdır. Bu dosyalar, sitemizin sizi tanımasını ve bir sonraki ziyaretinizde tercihlerinizi (dil, oturum durumu vb.) hatırlamasını sağlar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Hangi Çerezleri ve Neden Kullanıyoruz?</h2>
                            <p className="mb-4">Platformumuzda kullanılan çerezleri aşağıdaki kategorilere ayırıyoruz:</p>
                            <ul className="space-y-6">
                                <li>
                                    <span className="text-white font-bold block mb-1">Zorunlu Çerezler:</span>
                                    Sitenin temel işlevlerini (oturum yönetimi, güvenlik) yerine getirmesi için gereklidir. Bu çerezler olmadan platform düzgün çalışmaz.
                                </li>
                                <li>
                                    <span className="text-white font-bold block mb-1">Performans ve Analiz Çerezleri:</span>
                                    Sitemizin hızını (örneğin Typesense arama performansını) ve kullanıcıların sayfalar arasında nasıl gezindiğini anonim olarak ölçmemize yardımcı olur.
                                </li>
                                <li>
                                    <span className="text-white font-bold block mb-1">Fonksiyonel Çerezler:</span>
                                    "Beni Hatırla" seçeneği gibi tercihlerinizi kaydetmek ve size kişiselleştirilmiş bir deneyim sunmak için kullanılır.
                                </li>
                                <li>
                                    <span className="text-white font-bold block mb-1">Akıllı Eşleştirme ve Hedefleme Çerezleri:</span>
                                    Yapay zeka tabanlı sistemlerimizin, portföy tercihlerinizle en uyumlu ilanları ve özellikleri size sunabilmesi amacıyla kullanım alışkanlıklarınızı analiz eder.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Çerez Yönetimi ve Tercihler</h2>
                            <p className="mb-4">Çerezleri kabul etmek zorunda değilsiniz. Çoğu tarayıcı çerezleri otomatik olarak kabul eder ancak siz şu yöntemlerle bunları kontrol edebilirsiniz:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><span className="text-white font-medium">Tarayıcı Ayarları:</span> Tarayıcınızın ayarlar kısmından çerezleri tamamen engelleyebilir veya silinecek şekilde ayarlayabilirsiniz.</li>
                                <li><span className="text-white font-medium">Onay Çubuğu:</span> Web sitemize ilk girişinizde karşınıza çıkan onay çubuğu üzerinden tercihlerinizi yönetebilirsiniz.</li>
                            </ul>
                            <p className="mt-4 italic text-sm">Not: Zorunlu çerezlerin engellenmesi durumunda {APP_NAME} panelindeki bazı özelliklere erişiminiz kısıtlanabilir.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. İletişim</h2>
                            <p>
                                Çerez kullanımımızla ilgili her türlü sorunuz için bizimle iletişime geçebilirsiniz: <br />
                                <span className="text-white">E-posta:</span> <a href="mailto:support@tenancyestate.com" className="text-primary hover:underline">support@tenancyestate.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
