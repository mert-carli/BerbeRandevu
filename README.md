<div align="center">

# 💈 Ramazan Toz — Akıllı Berber Randevu ve Kasa Yönetimi PWA

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-10b981?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge)](./LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zero Backend](https://img.shields.io/badge/Storage-LocalStorage-8b5cf6?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

<p align="center">
  <strong>Mobil öncelikli, Türkçe sesli asistanlı, akıllı çakışma motorlu, kasa ve ciro takipli modern berber randevu PWA uygulaması.</strong>
</p>

</div>

---

## 🌟 Öne Çıkan Özellikler

- 🎙️ **Doğal Türkçe Sesli Randevu Asistanı:** Web Speech API destekli ses motoru; konuşma kalıplarını (örn: *"Yarın saat 3'te Ahmet saç sakal"*, *"Akşam 8'de Mehmet"* vb.) doğrudan analiz edip randevuya dönüştürür.
- ⚡ **Akıllı Çakışma Kontrol Motoru:** Seçilen berber koltuğu ve saat aralığında başka bir randevu olup olmadığını milisaniyelik tarar, çakışma durumunda alternatif slot önerir ve kullanıcı onayına sunar.
- 💰 **Kasa & Ciro Takip Sistemi:**
  - Nakit, Kredi Kartı ve Havale/EFT kırılımlı ödeme takibi.
  - Günlük toplam ciro, işlem sayısı ve ortalama sepet hesaplaması.
  - Ödeme yöntemleri oran çubuğu ve güncel ay ciro özeti.
  - Tamamlanan randevuların ödeme türünü ve tutarını tek dokunuşla güncelleyebilme.
- 📱 **Mobil Öncelikli & PWA Desteği:**
  - iOS Dynamic Island / Çentik ve Home Bar güvenli alan (`safe-area-inset`) koruması.
  - "Ana Ekrana Ekle" ile bağımsız bir mobil uygulama (standalone) gibi çalışabilme.
  - Service Worker (`sw.js`) ile internetsiz (offline) çalışabilme yeteneği.
- 💬 **WhatsApp Entegrasyonu:** Tek dokunuşla müşteriye özel şablonlu randevu onay ve bilgilendirme mesajı hazırlama.
- ⚙️ **Özelleştirilebilir Hizmet & Fiyat Listesi:** Hizmet süreleri, fiyat tarifeleri ve dükkan açılış/kapanış saatlerini kolayca yapılandırma.
- 🔒 **Sıfır Sunucu Bağımlılığı & Gizlilik:** Tüm veriler kullanıcının cihazında (`localStorage`) şifresiz ve üçüncü taraflara aktarılmadan güvenle saklanır.

---

## 🚀 Hızlı Başlangıç

Bu proje herhangi bir derleme (build) veya harici veritabanı kurulumu gerektirmez.

### Seçenek 1: Node.js ile Çalıştırma
```bash
# Bağımlılık gerektirmez, doğrudan dahili sunucuyu başlatır
npm start
```
Tarayıcınızda `http://localhost:3000` adresini açın.

### Seçenek 2: Doğrudan Tarayıcıda Açma
Herhangi bir web sunucusu kullanmadan da `index.html` dosyasını çift tıklayarak modern bir tarayıcıda çalıştırabilirsiniz.

### Seçenek 3: Canlıya Alma (Vercel / Netlify / GitHub Pages)
- **Vercel / Netlify:** Repoyu bağlayın, `Framework Preset: Other`, Build komutu boş bırakarak doğrudan yayınlayın.
- **GitHub Pages:** Repository Settings > Pages > Source: `Deploy from a branch (main / root)` seçeneğini aktif edin.

---

## 🎙️ Sesli Komut Örnekleri

Uygulamanın alt navigasyonundaki mikrofon butonuna basarak aşağıdaki formatlarda konuşabilirsiniz:

| Sesli Komut | Algılanan Bilgiler |
| :--- | :--- |
| *"Ahmet saat 14:30 saç sakal"* | İsim: Ahmet, Saat: 14:30, Hizmet: Saç + Sakal |
| *"Yarın 11'de Mehmet çocuk tıraşı"* | Tarih: Yarın, İsim: Mehmet, Saat: 11:00, Hizmet: Çocuk Tıraşı |
| *"Pazartesi akşam 8'de Can fön"* | Tarih: Pazartesi, İsim: Can, Saat: 20:00, Hizmet: Yıkama & Fön |
| *"Bugün 17:00 Ali"* | Tarih: Bugün, İsim: Ali, Saat: 17:00, Hizmet: Varsayılan Kesim |

---

## 📲 PWA Olarak Telefona Yükleme

1. **iOS (Safari):**
   - Siteyi Safari'de açın.
   - Alt çubuktaki Paylaş (Share) simgesine dokunun.
   - **"Ana Ekrana Ekle" (Add to Home Screen)** seçeneğini seçin.

2. **Android (Chrome):**
   - Siteyi Chrome'da açın.
   - Sağ üstteki üç nokta menüsüne dokunun veya altta beliren bildirime tıklayın.
   - **"Uygulamayı Yükle"** seçeneğini seçin.

---

## 📂 Proje Yapısı

```text
BerbeRandevu/
├── index.html          # Ana uygulama UI, Tailwind arayüzü ve SPA mantığı
├── sw.js               # Offline önbellek ve PWA Service Worker yöneticisi
├── manifest.json       # PWA uygulama tanımlayıcısı ve tema yapılandırması
├── server.js           # Hafif yerel HTTP geliştirme sunucusu
├── package.json        # Proje meta verileri ve npm komutları
├── icon.png            # PWA uygulama ikonu (512x512)
├── apple-touch-icon.png# iOS ana ekran ikonu
├── IMG/                # Görsel ve medya varlıkları
├── LICENSE             # MIT Açık Kaynak Lisansı
└── README.md           # Proje dokümantasyonu
```

---

## 🛠️ Teknolojiler

- **HTML5 & Vanilla JavaScript (ES6+):** Saf, yalın ve yüksek performanslı kod tabanı.
- **Tailwind CSS (CDN):** Modern koyu tema berber lounge ambiyansı ve duyarlı (responsive) ızgaralar.
- **Lucide Icons:** Temiz ve minimalist SVG ikon seti.
- **Web Speech API:** Tarayıcı tabanlı ses tanıma desteği.
- **PWA (Progressive Web App):** Service Worker cache ve web manifest standardı.

---

## 📄 Lisans

Bu proje [MIT Lisansı](./LICENSE) kapsamında lisanslanmıştır.
