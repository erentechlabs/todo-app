# Proje Teslimi ve Yayınlama Kılavuzu

Uygulamamız başarıyla hazırlandı! Artık sadece bunu GitHub'a yüklemek ve Netlify'da yayınlamak kaldı.

## 1. GitHub'a Yükleme (Local'den Remote'a Push)
Git kurulumun yapıldı ve initial commit senin için atıldı. Sadece GitHub'da boş bir repo açıp onu buraya bağlayacaksın.

**Adımlar:**
1. [GitHub](https://github.com/new) üzerinden yeni ve **Public** bir Repository oluştur. İsim olarak `todo-app` verebilirsin. (Bunu yaparken "Initialize this repository with a README" seçeneğinin işaretli **olmadığına** emin ol).
2. Repo oluşturulduktan sonra ekranda çıkan terminal kodlarından "...or push an existing repository from the command line" altındaki kodları sırayla çalıştır:

Terminalini projende (`c:\Users\Eren\Desktop\WebApp\todo-app`) aç ve şunları gir:
```bash
git remote add origin https://github.com/KULLANICI_ADIN/todo-app.git
git branch -M main
git push -u origin main
```
*Not: KULLANICI_ADIN yazan yeri kendi kullanıcı adınla değiştirmeyi unutma!*

## 2. Netlify Üzerinden Yayına Alma (Deploy)
1. [Netlify](https://app.netlify.com/)'a GitHub hesabınla giriş yap.
2. Sağ üstten **Add new site** -> **Import an existing project** seçeneklerine tıkla.
3. Listeden **GitHub**'ı seç. 
4. Açılan pencerden az önce oluşturduğun `todo-app` reposunu bul ve seç.
5. Netlify ayarları otomatik olarak tanımlayacaktır (Vite kullandığımız için):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Doğruysa aşağı inip **Deploy site** butonuna bas.
7. Yaklaşık 1 dakika içinde projen canlıya çıkacaktır! Sana atanan (örn: `https://mellow-platypus-123.netlify.app/`) linki özelleştirebilirsin.

## 3. Görev Teslimi
Proje görev formuna aşağıdaki linkleri ekle:
1. **GitHub Linki:** `https://github.com/KULLANICI_ADIN/todo-app`
2. **Canlı Site Linki (Netlify):** `https://KENDI_NETLIFY_LINKIN.netlify.app`
