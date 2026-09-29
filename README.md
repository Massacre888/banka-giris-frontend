# MaviRota Finans — Banka Giriş Arayüzü

Okul projesi için hazırlanmış, özgün ve duyarlı bir Türkçe banka giriş ekranı demosu. Gerçek bir bankayı temsil etmez; herhangi bir sunucuya bağlanmaz ve girilen bilgileri göndermez veya kaydetmez.

## Yerel olarak çalıştırma

1. Depoyu bilgisayarınıza indirin veya klonlayın.
2. `index.html` dosyasını güncel bir tarayıcıda açın.

İsterseniz kök dizinde bir terminal açıp basit bir yerel sunucu da başlatabilirsiniz:

```bash
python3 -m http.server 8000
```

Ardından [http://localhost:8000](http://localhost:8000) adresini ziyaret edin. Uygulama derleme adımı veya paket kurulumu gerektirmez.

## GitHub Pages ile yayınlama

1. Değişiklikleri GitHub deposunun varsayılan dalına (`main`) gönderin.
2. Depoda **Settings → Pages** sayfasını açın.
3. **Build and deployment** bölümünde kaynak olarak **Deploy from a branch** seçin.
4. Dal olarak `main`, klasör olarak `/(root)` seçip **Save** düğmesine tıklayın.
5. Yayınlama tamamlandığında aynı sayfada gösterilen bağlantıdan siteyi açın. İlk yayın birkaç dakika sürebilir.

## Dosyalar

- `index.html` — Türkçe giriş formu ve sayfa içeriği
- `styles.css` — duyarlı görünüm ve erişilebilir odak durumları
- `script.js` — parola görünürlüğü ve demo bilgilendirmesi
