# Changelog

## v10 (v7 de l'admin)
- Page don : CCP/BaridiMob + CPA, boutons « Copier », code QR, reçu par WhatsApp, montant pré-rempli (?amount=).
- Mobile : barre « Faire un don » fixe en bas, boutons larges.
- Mode Ramadan : compte à rebours, couffin, Zakat el-Fitr (réglages dans /admin).
- Admin : interface stable (écran de chargement, plus d'ouverture automatique de « الرئيسية »), thème moderne aux couleurs de l'association.
- Admin : images converties en WebP, lot d'images avec un seul message.
- Traductions séparées (ar inclus, fr/en chargées à la demande) ; spinner traduit ; images en lazy-loading ; images de secours locales.
- Téléphone et logo lus depuis settings.json (index.html / SEO).

## v9.0.0
- Ajout de la interface d'administration `/admin` (Decap CMS) : tout le contenu est maintenant dans `src/content/*.json`.
- Chiffres « Impact », campagne en vedette, coordonnées et liens sociaux éditables sans toucher au code.
- Nouveau bloc `SocialFeed` : fil Facebook (Page Plugin) + grille Instagram (flux JSON, cache 6 h, repli manuel).
- SEO : title/description par langue, Open Graph, JSON-LD NGO, sitemap.xml + robots.txt générés au build.
- Performance : polices via <link> + preconnect, en-têtes de cache/sécurité Netlify, images inutilisées supprimées.
- Accessibilité : lien d'évitement, focus visible, prefers-reduced-motion.
- Correctif : logo/photo d'une autre association (AABV) remplacés ; `lang`/`dir` par défaut corrigés (ar/rtl).

## v8
Version fournie.

## لوحة التحكم v2 (الموقع الرئيسي لم يتغير)
- دليل مصوّر «كيف أغيّر الصور؟» يربط كل مكان في الموقع بقسمه في اللوحة.
- كل حقل صورة له تلميح: أين تظهر + المقاس المناسب.
- معاينة حيّة (أخبار، أنشطة، آراء، معرض، مشاريع، واجهة، قبل/بعد، شعار، حملة، أرقام).
- تصغير الصور تلقائياً قبل الرفع (أكبر ضلع 1600px).
- واجهة عربية، وأقسام مرتبة حسب الأكثر استعمالاً، وعناصر القوائم بعناوينها بدل «No id».
- الملفات: public/admin/{index.html, admin.js, admin.css, config.yml}
