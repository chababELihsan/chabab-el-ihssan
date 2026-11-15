# شباب الإحسان — الموقع (النسخة 9)

موقع جمعية شباب الإحسان (القبة، الجزائر) — React + Vite + Tailwind، ثلاث لغات (عربي / Français / English).
**الجديد في v9:** لوحة تحكم لتعديل المحتوى بدون برمجة، وقسم يعرض آخر منشورات فيسبوك وإنستغرام تلقائيًا.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # الناتج في مجلد dist/
```

---

## 1) لوحة التحكم (`/admin`)

كل المحتوى صار في ملفات `src/content/*.json`، ولوحة **Decap CMS** تعدّلها بواجهة سهلة:
أخبار، أنشطة، **الأرقام** («أثرنا في المجتمع»)، **الحملة** (المبلغ المجموع والعدّ التنازلي)، آراء، معرض الصور، الفروع، الاتصال وروابط التواصل.
عند الضغط على «Publier» تُحفظ التعديلات في GitHub ثم يُعاد نشر الموقع تلقائيًا خلال دقيقة أو دقيقتين.

| أريد أن أغيّر… | أين؟ في `/admin` |
|---|---|
| رقمًا في «أثرنا» | الأرقام والحملة ← أرقام «أثرنا في المجتمع» |
| المبلغ المجموع / الهدف / تاريخ نهاية الحملة | الأرقام والحملة ← الحملة الحالية |
| خبرًا جديدًا | الأخبار ← ＋ خبر |
| صور المعرض | الصور والوسائط ← معرض الصور |
| الهاتف، البريد، فيسبوك، إنستغرام… | إعدادات الموقع |

### الإعداد (مرة واحدة فقط)

1. ارفعوا هذا المجلد إلى مستودع على **GitHub**.
2. على **Netlify**: *Add new site ← Import from Git* واختاروا المستودع (الإعدادات جاهزة في `netlify.toml`).
3. في الملف `public/admin/config.yml` غيّروا السطر
   `repo: YOUR_GITHUB_USERNAME/YOUR_REPOSITORY` إلى اسم حسابكم/اسم المستودع.
4. على GitHub: *Settings ← Developer settings ← OAuth Apps ← New OAuth App*
   - Homepage URL: رابط موقعكم
   - Authorization callback URL: `https://api.netlify.com/auth/done`
5. على Netlify: *Site configuration ← Access & security ← OAuth ← Install provider ← GitHub* وألصقوا Client ID و Client Secret.
6. افتحوا `https://موقعكم/admin` وسجّلوا الدخول بحساب GitHub.
7. لإضافة عضو: أضيفوه **Collaborator** في المستودع (يحتاج حساب GitHub مجاني).

> لتجربة اللوحة على جهازكم بدون نشر: شغّلوا `npm run cms` في نافذة و `npm run dev` في أخرى، ثم افتحوا `http://localhost:5173/admin/`.

---

## 2) منشورات فيسبوك وإنستغرام

القسم يظهر في الصفحة الرئيسية قبل «شاركنا» (`id="social"`) ويتحكم فيه `/admin ← إعدادات الموقع`.

- **فيسبوك**: يعمل مباشرة عبر Page Plugin الرسمي (لا يحتاج أي مفتاح) بشرط أن تكون الصفحة عامة وغير مقيّدة بالعمر/البلد.
- **إنستغرام**: أنشئوا حسابًا مجانيًا على [behold.so](https://behold.so)، اربطوا حساب الجمعية (يجب أن يكون **Business أو Creator**)،
  أضيفوا Feed من نوع **JSON**، وانسخوا الرابط (يبدأ بـ `https://feeds.behold.so/`) إلى خانة «رابط خلاصة إنستغرام».
  الخطة المجانية: 6 منشورات، تحديث مرة في اليوم، 1200 مشاهدة شهريًا — لذلك يحفظ الموقع الخلاصة 6 ساعات في متصفح الزائر لتوفير الحصة.
  عند عدم وضع الرابط أو تعذّر الجلب تظهر «منشورات إنستغرام اليدوية» ثم بطاقة «تابعونا».

---

## 3) هيكل المحتوى

```
src/content/
  news/*.json          ملف لكل خبر
  activities/*.json    ملف لكل نشاط/مشروع
  testimonials/*.json  ملف لكل رأي
  impact.json          أرقام «أثرنا»
  campaign.json        الحملة الحالية
  gallery.json         المعرض
  projects.json        فئات المشاريع
  branches.json        الفروع
  media.json           فيديو، قبل/بعد، خريطة، صدقة جارية
  settings.json        الاتصال، الروابط، قسم السوشيال
public/admin/          لوحة التحكم (config.yml يعرّف الحقول)
public/images/uploads/ الصور المرفوعة من اللوحة
```

الترجمات الثابتة للواجهة (الأزرار، العناوين العامة) ما تزال في `src/translations.js`.
إذا تُرك حقل لغة فارغًا يُستعمل الفرنسي ثم العربي ثم الإنجليزي تلقائيًا.

## 4) تحسينات v9 الأخرى

- SEO: عنوان ووصف يتبدّلان مع اللغة، Open Graph/Twitter للمعاينة عند المشاركة، بيانات منظّمة (JSON-LD) لـ Google، `sitemap.xml` و`robots.txt` تُولَّدان عند البناء من `site_url` في الإعدادات.
- الأداء: الخطوط لا تحجب العرض، ترويسات كاش وأمان في `netlify.toml`، حذف صور غير مستعملة.
- الإتاحة: رابط «انتقل إلى المحتوى»، مؤشر تركيز واضح، احترام «تقليل الحركة».
- إصلاح: شعار وصورة خلفية كانا يخصّان جمعية أخرى (AABV) وتم استبدالهما بصور الجمعية.

---

## Français (résumé)

Contenu éditable via `/admin` (Decap CMS, backend GitHub). Configurer `repo` dans `public/admin/config.yml`,
créer une OAuth App GitHub (callback `https://api.netlify.com/auth/done`) et l'ajouter dans Netlify → Access & security → OAuth.
Fil Facebook : Page Plugin officiel. Fil Instagram : flux JSON gratuit (behold.so) à coller dans *Paramètres du site*.
