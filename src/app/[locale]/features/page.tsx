import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BentoGrid } from "@/components/BentoGrid";
import { APP_NAME } from "@/constants/config";
import { useTranslations } from "next-intl";

export const metadata = {
    title: `${APP_NAME} - Features`,
    description: "Discover the AI-powered features of our real estate operating system.",
};

export default function FeaturesPage() {
    const t = useTranslations("BentoGrid");

    return (
        <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-white">
            {/* Background Noise */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Navbar />

            <div className="pt-20">
                <BentoGrid />
            </div>

            <Footer />
        </main>
    );
}
