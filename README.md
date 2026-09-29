# Banka Giriş Frontend

Modern, responsive ve özgün bir banka giriş ekranı tasarımı.

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

1. Repo ayarlarına girin.
2. **Settings > Pages** bölümünü açın.
3. **Build and deployment** altında kaynak olarak **GitHub Actions** veya **Deploy from branch** seçin.
4. Eğer branch tabanlı yayın yapıyorsanız `main` branch ve `/root` klasörünü seçin.
5. Yayınlandıktan sonra site şu formatta açılır:
   `https://Massacre888.github.io/banka-giris-frontend/`

## Railway ile yayınlama

Bu proje, `dist` klasörünü servis eden basit bir Node.js (`server.js`) sunucusu içerir ve Railway'de aşağıdaki adımlarla yayınlanabilir:

1. [Railway](https://railway.app) üzerinde yeni bir proje oluşturun ve **Deploy from GitHub repo** seçeneğini seçin.
2. Bu GitHub deposunu (`Massacre888/banka-giris-frontend`) bağlayın ve listeden seçin.
3. Gerekirse **Build Command** alanına şunu girin:
   ```bash
   npm install && npm run build
   ```
4. **Start Command** alanına şunu girin:
   ```bash
   npm start
   ```
5. `PORT` ortam değişkenini elle ayarlamanıza gerek yoktur; `server.js`, Railway'in otomatik sağladığı `PORT` değerini okuyup sunucuyu `0.0.0.0` üzerinde başlatır.
6. Deploy tamamlandıktan sonra, projenin **Settings > Networking** bölümünden **Generate Domain** ile oluşturulan genel (public) adresi bulabilirsiniz.

Yerelde Railway sunucusunu denemek için:

```bash
npm install
npm run build
npm start
```

## Not

Bu proje, gerçek bir bankanın arayüzünü birebir kopyalamaz; gerçek kimlik doğrulama yapmaz ve hiçbir kimlik bilgisi toplamaz/saklamaz. Okul projesi için hazırlanmış özgün bir örnektir.
