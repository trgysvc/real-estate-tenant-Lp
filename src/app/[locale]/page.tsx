import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Solutions } from "@/components/Solutions";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { APP_NAME } from "@/constants/config";

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
                <Pricing />
                <CTA />
            </div>

            <Footer />
        </main>
    );
}
