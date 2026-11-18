# نشر الموقع على DZSecurity تلقائيًا (GitHub ← DZSecurity)

الفكرة: **مجلد واحد (هذا المشروع) على GitHub**. عند كل تعديل (من لوحة `/admin` أو من الكمبيوتر) يبني GitHub الموقع ويرفعه بالـ FTP إلى DZSecurity. لا حاجة لرفع أي ملفات يدويًا ولا لمجلد «A».

## 1) رفع المشروع إلى GitHub (مرة واحدة)
ارفع **محتويات** هذا المجلد إلى المستودع `chababELihsan/chabab-el-ihssan` (فرع `main`). تأكد أن `package.json` و`src` و`.github` في جذر المستودع. لا ترفع `node_modules` ولا `dist`.

## 2) بيانات FTP من cPanel
cPanel ← **حسابات FTP** (FTP Accounts) ← أنشئ حسابًا أو استعمل الرئيسي، وسجّل: الخادم (Host)، اسم المستخدم، كلمة السر.

## 3) إضافتها في GitHub
المستودع ← Settings ← Secrets and variables ← Actions:
- تبويب **Secrets**: `FTP_SERVER` و`FTP_USERNAME` و`FTP_PASSWORD`.
- تبويب **Variables** (اختياري):
  - `SITE_URL` = دومينك الحقيقي، مثل `https://exemple.dz` (يظهر في sitemap والمشاركة). أو غيّر `site_url` من «إعدادات الموقع» في `/admin`.
  - `FTP_DIR` = مجلد الموقع على الخادم إن لم يكن `public_html/`.
  - `FTP_PROTOCOL` = `ftps` إن كان خادمك يدعمه (أفضل أمانًا)، وإلا يبقى `ftp`.

## 4) التشغيل
تبويب **Actions** ← «Deploy to DZSecurity» ← Run workflow. بعد دقيقة أو دقيقتين يظهر الموقع. وبعدها يتحدث تلقائيًا عند كل «حفظ ونشر» في `/admin`.

## 5) الدخول إلى `/admin` على DZSecurity
زر «الدخول بحساب GitHub» لا يعمل على Apache (يحتاج Worker). استعمل **«لديك مفتاح GitHub (Personal Access Token)؟»**:
GitHub ← Settings ← Developer settings ← Fine-grained tokens ← مستودع واحد فقط ← صلاحية **Contents: Read and write**. الحساب يجب أن يكون Collaborator في المستودع، ثم الرقم السري كالمعتاد.

## ملاحظات
- فعّل SSL (AutoSSL) في cPanel ثم أزل `#` من سطري https في `public/.htaccess`.
- إن كان المستودع عامًا فالتاريخ القديم قد يحتوي صورًا حُذفت الآن (منها وثيقة شخصية). احذفها من التاريخ أو اجعل المستودع خاصًا.
- Cloudflare ما زال ممكنًا (`wrangler.jsonc`) لكنه غير لازم لـ DZSecurity.
