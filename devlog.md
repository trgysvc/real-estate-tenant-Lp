# Devlog - 22/01/2026

## 🌟 Özet
Bugün, **Investrong CRM** landing page projesinde globalleşme, kullanıcı deneyimi iyileştirmeleri ve içerik zenginleştirme odaklı kapsamlı geliştirmeler yapıldı. Site rotaları İngilizce standartlarına çekildi, detaylı özellik modalları eklendi ve marka kimliği (başlık, favicon vb.) güncellendi.

---

## 🚀 Yapılan Geliştirmeler

### 1. Rota ve Navigasyon Standardizasyonu (Global Uyumluluk)
Tüm yasal ve ürün sayfalarının rotaları, global standartlara uygun olacak şekilde İngilizceye çevrildi. Bu değişiklik, hem SEO hem de uluslararası kullanıcı deneyimi için yapıldı.
-   `/gizlilik` → **/privacy**
-   `/kullanim-sartlari` → **/terms**
-   `/cerez-politikasi` → **/cookies**
-   `/kvkk` → **/data-protection**
-   `/ozellikler` (veya `#features`) → **/features**

> **Not:** Footer ve modal içindeki tüm ilgili linkler bu yeni yapıya göre güncellendi.

### 2. Özellik Detay Modalları ve Derin Linkleme (Deep Linking)
kullanıcıların sayfayı terk etmeden detaylı bilgi alabilmesi için gelişmiş bir modal yapısı kuruldu.
-   **Dinamik İçerik:** Her özellik kartı (High Speed Search, AI Assistant vb.), tıklandığında kendine özel içeriği (`title`, `description`, `tech stack`) modal içinde açıyor.
-   **URL Parametreleri:** Modallar açıldığında URL güncelleniyor (örn: `/features?item=ai-assistant`). Bu sayede kullanıcılar belirli bir özelliğin direkt linkini paylaşabiliyor.
-   **Teknik Detay:** `FeatureDetailModal.tsx` bileşeni oluşturuldu ve `BentoGrid` ile entegre edildi.

### 3. İçerik ve Çeviri (i18n) Güncellemeleri
-   **Detaylı Açıklamalar:** Landing page üzerindeki 4 ana özellik için (Search, Security, AI, Infrastructure) hem Türkçe hem İngilizce detaylı ve profesyonel metinler yazıldı.
-   **Investrong CRM Markalaması:** Proje ismi ve açıklamaları güncellendi. Pencere başlığı (Window Title) *"Investrong CRM - Modern Gayrimenkul İçin Yapay Zeka Destekli İşletim Sistemi"* olarak ayarlandı.
-   **Favicon:** Site ikonları (favicon, apple-touch-icon vb.) güncellendi ve tüm cihazlar için optimize edildi.

### 4. UI/UX İyileştirmeleri
-   **Logo:** Kullanıcı isteği üzerine logo üzerinde denemeler yapıldı, ancak orijinal "Building2" ikonunun daha iyi durduğuna karar verilerek eski haline getirildi (Revert işlemi).
-   **Footer ve Navbar:** Link yapıları `next/link` kullanılarak SPA (Single Page Application) performansına uygun hale getirildi. Sayfa yenilemesi olmadan geçişler sağlandı.

### 5. Dokümantasyon
-   **README.md:** Projenin son halini yansıtacak şekilde; kullanılan teknolojiler, yeni özellikler ve proje amacı detaylandırılarak güncellendi.

---

## 📦 Teknik Notlar
-   **Build Durumu:** `npm run build` hatasız tamamlandı.
-   **Deploy:** Kodlar `main` branch'ine başarıyla push edildi.
-   **Performans:** Lighthouse ve yerel testlerde (dev modu) rotaların ve modalların performansı doğrulandı.
