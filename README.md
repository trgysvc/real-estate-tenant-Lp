# Investory CRM - Gayrimenkul İşletim Sistemi

**Investory CRM**, modern gayrimenkul profesyonelleri için tasarlanmış, yapay zeka destekli bir gayrimenkul yönetim platformudur. Bu proje, platformun tanıtımını yapan, potansiyel müşterilerden talep toplayan ve ürün özelliklerini sergileyen "Landing Page" (Açılış Sayfası) arayüzüdür.

## 🎯 Projenin Amacı

Bu projenin temel amacı, klasik emlak yönetim araçlarının ötesine geçerek; hız, güvenlik ve yapay zeka teknolojilerini tek bir çatı altında sunan **Investory CRM**'in dijital vitrinini oluşturmaktır.

Ziyaretçilere şu imkanları sunar:
- Ürünün yapay zeka tabanlı özelliklerini keşfetme.
- Farklı ölçekteki işletmeler için (Bireysel, Profesyonel, Kurumsal) abonelik paketlerini inceleme.
- Hukuki süreçler (KVKK, Gizlilik Politikası, Kullanım Şartları) hakkında şeffaf bilgi alma.
- **Demo ve Ücretsiz Deneme** taleplerini hızlıca iletme.

## 🚀 Öne Çıkan Özellikler

*   **Modern & Premium Tasarım:** "Glassmorphism" efektleri, canlı gradyanlar ve akıcı animasyonlarla zenginleştirilmiş kullanıcı deneyimi.
*   **Çoklu Dil Desteği (i18n):** Türkçe ve İngilizce dil seçenekleri ile global erişim (`next-intl` altyapısı).
*   **Dinamik Fiyatlandırma:** Aylık ve Yıllık ödeme planları arasında geçiş yapılabilen interaktif fiyatlandırma tablosu.
*   **Lead Toplama Sistemi:** Ziyaretçi bilgilerini (Ad, İletişim, Firma) toplayan ve **Google Sheets**'e otomatik kaydeden entegre modal yapısı.
*   **Hukuki Altyapı:** KVKK, Gizlilik Politikası, Çerez Politikası ve Kullanım Şartları sayfaları tam uyumlu şekilde hazırlanmıştır.
*   **Responsive Yapı:** Mobil, tablet ve masaüstü cihazlarda kusursuz görünüm.

## 🛠️ Kullanılan Teknolojiler

Proje, en güncel web teknolojileri kullanılarak performans, SEO ve geliştirici deneyimi ön planda tutularak inşa edilmiştir.

### Core (Çekirdek)
*   **[Next.js 15 (App Router)](https://nextjs.org/)**  - [📖 Dökümantasyon](https://nextjs.org/docs)
    *   React tabanlı full-stack framework. Server Component'ler ve modern routing yapısı.
*   **[React 19](https://react.dev/)** - [📖 Dökümantasyon](https://react.dev/learn)
    *   Kullanıcı arayüzü kütüphanesi.
*   **[TypeScript](https://www.typescriptlang.org/)** - [📖 Dökümantasyon](https://www.typescriptlang.org/docs/)
    *   Tip güvenliği ve ölçeklenebilir kod yapısı.

### Stil ve Animasyon
*   **[Tailwind CSS](https://tailwindcss.com/)** - [📖 Dökümantasyon](https://tailwindcss.com/docs)
    *   Utility-first CSS framework'ü.
*   **[Framer Motion](https://www.framer.com/motion/)** - [📖 Dökümantasyon](https://www.framer.com/motion/introduction/)
    *   Gelişmiş, GPU hızlandırmalı animasyonlar (Modal açılışları, sayfa geçişleri).
*   **[Lucide React](https://lucide.dev/icons/)** - [📖 Dökümantasyon](https://lucide.dev/guide/)
    *   Modern ve hafif ikon seti.

### Entegrasyon ve Backend
*   **[Google Sheets API](https://developers.google.com/sheets/api/guides/concepts)** - [📖 Dökümantasyon](https://developers.google.com/sheets/api/reference/rest)
    *   Demo formu verilerinin sunucu tarafında (Server-side) işlenip Google E-Tablolar'a kaydedilmesi. `googleapis` paketi kullanılır.
*   **Next.js API Routes** - [📖 Dökümantasyon](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
    *   Frontend'den gelen form verilerini güvenli bir şekilde işleyen backend endpoints.

### Uluslararasılaştırma (i18n)
*   **[next-intl](https://next-intl-docs.vercel.app/)** - [📖 Dökümantasyon](https://next-intl-docs.vercel.app/docs/getting-started)
    *   Routing, çeviri yönetimi ve dil algılama işlemleri.

### Dağıtım (Deployment)
*   Proje **Vercel**, **Netlify** veya herhangi bir Node.js destekleyen sunucuda çalışmaya uygundur.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için:

1.  **Repoyu klonlayın:**
    ```bash
    git clone https://github.com/kullaniciadi/proje-adi.git
    cd proje-adi
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Çevre Değişkenlerini (.env) Ayarlayın:**
    Google Sheets entegrasyonunun çalışması için proje kök dizininde `.env` dosyası oluşturun ve gerekli Google Cloud Service Account bilgilerini ekleyin. (Detaylar `implementation_plan.md` dosyasında mevcuttur).

4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

5.  Tarayıcınızda `http://localhost:3000` adresine gidin.
