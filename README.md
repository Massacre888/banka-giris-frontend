# Mavi Banka Giriş Arayüzü

GitHub Pages ile uyumlu, Türkçe ve responsive örnek banka giriş arayüzü. Bu proje gerçek bir bankaya bağlanmaz ve giriş bilgilerini göndermez.

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

Vite, proje sitesi için `/banka-giris-frontend/` taban yolunu kullanır.

1. Repoda **Settings > Pages** bölümünü açın.
2. **Deploy from a branch** seçin.
3. Yayın kaynağı olarak `main` branch ve `/ (root)` klasörünü seçip kaydedin.
4. Site `https://Massacre888.github.io/banka-giris-frontend/` adresinde açılır.

Kök klasördeki HTML, CSS ve JavaScript göreli yollarla bağlandığından branch tabanlı yayın doğrudan çalışır. Vite build çıktısı `dist/` klasörüne yazılır; bunu yayınlamak için Pages kaynağını bir Actions iş akışına yönlendirmek gerekir.
