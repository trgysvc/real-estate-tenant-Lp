import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Solutions } from "@/components/Solutions";
import { Footer } from "@/components/Footer";
import { APP_NAME, APP_DESCRIPTION } from "@/constants/config";

export const metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
  description: "Next-generation real estate operating system powered by AI and lightning-fast search.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <div className="flex flex-col w-full">
        <Hero />
        <BentoGrid />
        <Solutions />

        {/* Simple Call to Action before Footer */}
        <section id="contact" className="py-24 bg-gradient-to-b from-background to-slate-950">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />

              <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
                Geleceğin Gayrimenkul Dünyasına <br />
                <span className="text-gradient">Hazır mısınız?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 relative z-10">
                Teknik gücümüzü sizin başarınız için kullanıyoruz. {APP_NAME} ile bugün tanışın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/25">
                  Ücretsiz Deneyin
                </button>
                <button className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                  Ekibimizle Konuşun
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
