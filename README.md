# MaviKare Banka Giriş Arayüzü

Mobil uyumlu, özgün bir Türkçe bankacılık giriş ekranı demosu. Statik sayfa içeriği JavaScript çalışmasa da görüntülenir; herhangi bir bankacılık hizmetine veya gerçek giriş sistemine bağlanmaz.

## Yerelde çalıştırma ve önizleme

Node.js 20 veya üzeri gerekir.

```bash
npm install
npm run dev
```

Vite'ın terminalde gösterdiği yerel adresi (genellikle `http://localhost:5173/`) tarayıcıda açın. Yayın derlemesini yerelde kontrol etmek için:

```bash
npm run build
npm run preview
```

Önizleme adresi genellikle `http://localhost:4173/` olur.

## GitHub Pages'de yayınlama

`.github/workflows/deploy-pages.yml`, `main` dalına her push yapıldığında bağımlılıkları kurar, siteyi derler, `dist` çıktısını artifact olarak yükler ve GitHub Pages'e dağıtır. Elle başlatmak için GitHub deposunda **Actions > Deploy to GitHub Pages > Run workflow** yolunu izleyin.

İlk dağıtımdan önce depoda **Settings > Pages > Build and deployment > Source** ayarını **GitHub Actions** olarak seçin. Ardından **Actions** sekmesinden `Deploy to GitHub Pages` çalışmasının tamamlanmasını bekleyin.

Canlı site adresi: <https://Massacre888.github.io/banka-giris-frontend/>
