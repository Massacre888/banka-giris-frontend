# Banka Giriş Frontend

Türkçe, responsive ve özgün bir dijital bankacılık giriş ekranı demosu. Form
gerçek bir bankacılık hizmetine bağlanmaz ve giriş bilgilerini göndermez.

## Çalıştırma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages ile yayınlama

1. `npm install` ve `npm run build` komutlarını çalıştırın.
2. Oluşan `dist` klasörünün içeriğini yayınlamak istediğiniz branch'in köküne
   veya `docs` klasörüne kopyalayıp commit edin.
3. **Settings > Pages** bölümünde **Deploy from a branch** seçin; ilgili
   branch'i ve kopyaladığınız konumu (`/ (root)` veya `/docs`) belirleyin.
4. Yayınlandıktan sonra site şu formatta açılır:
   `https://Massacre888.github.io/banka-giris-frontend/`

Vite, göreli dosya yolları üretecek şekilde yapılandırılmıştır; proje alt
dizininde yayınlandığında da derlenmiş sayfanın kaynakları bulunabilir.

## Not

Bu proje gerçek bir bankanın arayüzünü, markasını veya varlıklarını kopyalamaz;
örnek amaçlı özgün bir tasarımdır.
