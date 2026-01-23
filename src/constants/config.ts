export const APP_NAME = "Investrong CRM";
export const APP_DESCRIPTION = "Gayrimenkul İçin Modern Yapay Zeka Destekli İşletim Sistemi.";

export const COLORS = {
  primary: "#6366f1", // Deep Indigo
  secondary: "#a855f7", // Electric Purple
  accent: "#3b82f6", // Electric Blue
  background: "#0f172a", // Slate Dark
  surface: "#1e293b", // Slate Light
};

export const NAV_LINKS = [
  { id: "features", href: "#features" },
  { id: "solutions", href: "#solutions" },
  { id: "pricing", href: "#pricing" },
  { id: "contact", href: "#contact" },
];

export const TECHNICAL_BENEFITS = [
  {
    title: "Milisaniyeler süren aramalar",
    description: "Typesense altyapısı ile binlerce ilan arasından anlık ve akıllı arama sonuçları elde edin.",
    icon: "Search",
    tech: "Typesense",
  },
  {
    title: "Banka düzeyinde koruma",
    description: "Kinde ve Stripe entegrasyonu ile verileriniz ve ödemeleriniz en üst düzeyde güvendedir.",
    icon: "ShieldCheck",
    tech: "Kinde / Stripe",
  },
  {
    title: "Akıllı Asistan",
    description: "Yapay zeka asistanı ile ilan açıklamalarını otomatik oluşturun ve müşteri taleplerini akıllıca yönetin.",
    icon: "Zap",
    tech: "Multi-Agent AI",
  },
  {
    title: "Global Altyapı",
    description: "Modern bulut mimarisi ile her yerden, her cihazdan kesintisiz erişim ve yüksek performans.",
    icon: "Globe",
    tech: "Next.js / Supabase",
  },
];
