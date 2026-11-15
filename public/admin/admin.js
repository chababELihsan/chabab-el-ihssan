/* =====================================================================
   إضافات لوحة التحكم — لا تغيّر أي بيانات، فقط تسهّل الاستعمال:
   1) دليل مصوّر "أين تظهر كل صورة؟" (زر ❓ المساعدة)
   2) معاينة حيّة لكل قسم أثناء التعديل
   3) تصغير الصور تلقائياً قبل رفعها (سرعة الموقع + حجم المستودع)
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------
   * 0) ترجمة واجهة Decap إلى العربية (غير متوفرة جاهزة)
   *    المفاتيح غير المترجمة تبقى بالإنجليزية تلقائياً.
   * ------------------------------------------------------------- */
  var AR = {
  "editor.editorWidgets.image.choose": "📷 اختر صورة",
  "editor.editorWidgets.image.chooseMultiple": "📷 اختر صوراً",
  "editor.editorWidgets.image.chooseUrl": "إدراج من رابط",
  "editor.editorWidgets.image.replaceUrl": "استبدال برابط",
  "editor.editorWidgets.image.promptUrl": "الصق رابط الصورة",
  "editor.editorWidgets.image.chooseDifferent": "📷 تغيير الصورة",
  "editor.editorWidgets.image.addMore": "إضافة صور أخرى",
  "editor.editorWidgets.image.remove": "حذف الصورة",
  "editor.editorWidgets.image.removeAll": "حذف كل الصور",
  "editor.editorWidgets.datetime.now": "اليوم",
  "editor.editorWidgets.datetime.clear": "مسح",
  "editor.editorWidgets.datetime.setToNow": "ضبط %{fieldLabel} على اليوم",
  "editor.editorWidgets.list.add": "＋ إضافة %{item}",
  "editor.editorWidgets.list.addType": "＋ إضافة %{item}",
  "editor.editorWidgets.object.expand": "توسيع",
  "editor.editorWidgets.object.collapse": "طيّ",
    "auth.login": "دخول",
    "auth.loggingIn": "جارٍ الدخول...",
    "auth.loginWithGitHub": "الدخول بحساب GitHub",
    "app.header.content": "المحتوى",
    "app.header.workflow": "سير العمل",
    "app.header.deploys": "حالة النشر",
    "app.header.deploysDeployed": "تم النشر",
    "app.header.deploysPublishing": "جارٍ النشر…",
    "app.header.deploysBuilding": "جارٍ البناء",
    "app.header.deploysFailed": "فشل البناء",
    "app.header.media": "مكتبة الصور",
    "app.header.quickAdd": "إضافة سريعة",
    "app.app.errorHeader": "خطأ في تحميل الإعدادات",
    "app.app.configErrors": "أخطاء الإعدادات",
    "app.app.checkConfigYml": "تحقّق من ملف config.yml",
    "app.app.loadingConfig": "جارٍ التحميل...",
    "app.app.waitingBackend": "جارٍ الاتصال...",
    "app.notFoundPage.header": "الصفحة غير موجودة",
    "collection.sidebar.collections": "الأقسام",
    "collection.sidebar.allCollections": "كل الأقسام",
    "collection.sidebar.searchAll": "ابحث في كل شيء",
    "collection.sidebar.searchIn": "ابحث في",
    "collection.collectionTop.sortBy": "ترتيب حسب",
    "collection.collectionTop.viewAs": "طريقة العرض",
    "collection.collectionTop.viewAsList": "عرض قائمة",
    "collection.collectionTop.viewAsGrid": "عرض شبكة بالصور",
    "collection.collectionTop.newButtonAriaLabel": "إضافة: %{collectionLabel}",
    "collection.collectionTop.ascending": "تصاعدي",
    "collection.collectionTop.descending": "تنازلي",
    "collection.collectionTop.searchResults": "نتائج البحث عن «%{searchTerm}»",
    "collection.collectionTop.searchResultsInCollection": "نتائج البحث عن «%{searchTerm}» في %{collection}",
    "collection.collectionTop.filterBy": "تصفية حسب",
    "collection.collectionTop.groupBy": "تجميع حسب",
    "collection.entries.loadingEntries": "جارٍ التحميل...",
    "collection.entries.cachingEntries": "جارٍ التحضير...",
    "collection.entries.longerLoading": "قد يستغرق هذا بضع دقائق",
    "collection.entries.noEntries": "لا يوجد شيء هنا بعد",
    "collection.entries.unpublishedHeader": "غير منشور",
    "collection.groups.other": "أخرى",
    "collection.defaultFields.author.label": "الكاتب",
    "collection.defaultFields.updatedOn.label": "آخر تعديل",
    "editor.editorControl.field.optional": "اختياري",
    "editor.editor.onLeavePage": "هل تريد مغادرة الصفحة؟ قد تضيع تعديلاتك غير المحفوظة.",
    "editor.editor.onUpdatingWithUnsavedChanges": "لديك تعديلات غير محفوظة، اضغط «حفظ» أولاً.",
    "editor.editor.onPublishingNotReady": "غيّر الحالة إلى «جاهز» قبل النشر.",
    "editor.editor.onPublishingWithUnsavedChanges": "لديك تعديلات غير محفوظة، اضغط «حفظ» قبل النشر.",
    "editor.editor.onPublishing": "هل تريد نشر هذا التعديل على الموقع؟",
    "editor.editor.onUnpublishing": "هل تريد إلغاء نشر هذا العنصر؟",
    "editor.editor.onDeleteWithUnsavedChanges": "هل تريد حذف هذا العنصر المنشور مع تعديلاتك غير المحفوظة؟",
    "editor.editor.onDeletePublishedEntry": "هل تريد فعلاً حذف هذا العنصر من الموقع؟",
    "editor.editor.onDeleteUnpublishedChangesWithUnsavedChanges": "سيتم حذف كل التعديلات غير المنشورة وغير المحفوظة. متابعة؟",
    "editor.editor.onDeleteUnpublishedChanges": "سيتم حذف كل التعديلات غير المنشورة. متابعة؟",
    "editor.editor.loadingEntry": "جارٍ التحميل...",
    "editor.editor.confirmLoadBackup": "وُجدت نسخة احتياطية محلية لهذا العنصر، هل تريد استعمالها؟",
    "editor.editorInterface.togglePreview": "إظهار / إخفاء المعاينة",
    "editor.editorInterface.toggleScrollSync": "تمرير متزامن",
    "editor.editorInterface.toggleNotes": "الملاحظات",
    "editor.editorToolbar.publishing": "جارٍ النشر...",
    "editor.editorToolbar.publish": "نشر",
    "editor.editorToolbar.published": "تم النشر",
    "editor.editorToolbar.unpublish": "إلغاء النشر",
    "editor.editorToolbar.duplicate": "نسخ العنصر",
    "editor.editorToolbar.unpublishing": "جارٍ إلغاء النشر...",
    "editor.editorToolbar.publishAndCreateNew": "نشر وإضافة جديد",
    "editor.editorToolbar.publishAndDuplicate": "نشر ونسخ",
    "editor.editorToolbar.deleteUnpublishedChanges": "حذف التعديلات غير المنشورة",
    "editor.editorToolbar.deleteUnpublishedEntry": "حذف العنصر غير المنشور",
    "editor.editorToolbar.deletePublishedEntry": "حذف العنصر المنشور",
    "editor.editorToolbar.deleteEntry": "حذف",
    "editor.editorToolbar.saving": "جارٍ الحفظ...",
    "editor.editorToolbar.save": "حفظ",
    "editor.editorToolbar.deleting": "جارٍ الحذف...",
    "editor.editorToolbar.updating": "جارٍ التحديث...",
    "editor.editorToolbar.status": "الحالة: %{status}",
    "editor.editorToolbar.backCollection": "الكتابة في: %{collectionLabel}",
    "editor.editorToolbar.unsavedChanges": "تعديلات غير محفوظة",
    "editor.editorToolbar.changesSaved": "تم الحفظ",
    "editor.editorToolbar.draft": "مسودة",
    "editor.editorToolbar.inReview": "قيد المراجعة",
    "editor.editorToolbar.ready": "جاهز",
    "editor.editorToolbar.publishNow": "نشر الآن",
    "editor.editorToolbar.deployPreviewPendingButtonLabel": "تحقق من المعاينة",
    "editor.editorToolbar.deployPreviewButtonLabel": "عرض المعاينة",
    "editor.editorToolbar.deployButtonLabel": "عرض الموقع",
    "mediaLibrary.mediaLibraryCard.draft": "مسودة",
    "mediaLibrary.mediaLibraryCard.copy": "نسخ",
    "mediaLibrary.mediaLibraryCard.copyUrl": "نسخ الرابط",
    "mediaLibrary.mediaLibraryCard.copyPath": "نسخ المسار",
    "mediaLibrary.mediaLibraryCard.copyName": "نسخ الاسم",
    "mediaLibrary.mediaLibraryCard.copied": "تم النسخ",
    "mediaLibrary.mediaLibrary.onDelete": "هل تريد حذف الصور المحددة؟",
    "mediaLibrary.mediaLibrary.fileTooLarge": "الملف كبير جداً (الحد %{size} كيلوبايت).",
    "mediaLibrary.mediaLibraryModal.loading": "جارٍ التحميل...",
    "mediaLibrary.mediaLibraryModal.close": "إغلاق",
    "mediaLibrary.mediaLibraryModal.noResults": "لا توجد نتائج.",
    "mediaLibrary.mediaLibraryModal.noAssetsFound": "لا توجد ملفات بعد.",
    "mediaLibrary.mediaLibraryModal.noImagesFound": "لا توجد صور بعد.",
    "mediaLibrary.mediaLibraryModal.private": "خاص",
    "mediaLibrary.mediaLibraryModal.images": "الصور",
    "mediaLibrary.mediaLibraryModal.mediaAssets": "مكتبة الصور",
    "mediaLibrary.mediaLibraryModal.search": "بحث...",
    "mediaLibrary.mediaLibraryModal.uploading": "جارٍ الرفع...",
    "mediaLibrary.mediaLibraryModal.upload": "⬆️ رفع صورة جديدة",
    "mediaLibrary.mediaLibraryModal.download": "تنزيل",
    "mediaLibrary.mediaLibraryModal.deleting": "جارٍ الحذف...",
    "mediaLibrary.mediaLibraryModal.deleteSelected": "حذف المحدد",
    "mediaLibrary.mediaLibraryModal.chooseSelected": "✔ اختيار هذه الصورة",
    "ui.default.goBackToSite": "العودة إلى الموقع",
    "ui.settingsDropdown.logOut": "تسجيل الخروج",
    "ui.settingsDropdown.account": "الحساب",
    "ui.deploys.heading": "حالة النشر",
    "ui.deploys.refresh": "تحديث",
    "ui.deploys.refreshing": "جارٍ التحديث…",
    "ui.deploys.viewSite": "عرض الموقع",
    "ui.deploys.summaryBuilding": "الموقع قيد البناء.",
    "ui.deploys.summaryFailed": "فشل البناء الأخير، آخر تعديل لم يظهر بعد.",
    "ui.toast.missingRequiredField": "ينقصك حقل إجباري، أكمله ثم احفظ.",
    "ui.toast.entrySaved": "تم الحفظ ✅",
    "ui.toast.entryPublishing": "تم الحفظ · جارٍ النشر…",
    "ui.toast.entryLive": "تعديلك على «%{entry}» أصبح مباشراً على الموقع",
    "ui.toast.entryDeployFailed": "فشل بناء الموقع",
    "ui.toast.entryPublished": "تم النشر ✅ سيظهر في الموقع بعد دقيقة أو دقيقتين",
    "ui.toast.entryUnpublished": "تم إلغاء النشر",
    "ui.toast.onFailToPersist": "تعذّر الحفظ: %{details}",
    "ui.toast.onFailToDelete": "تعذّر الحذف: %{details}",
    "ui.toast.onFailToPublishEntry": "تعذّر النشر: %{details}",
    "ui.toast.onLoggedOut": "تم تسجيل خروجك، انسخ ما كتبته ثم ادخل من جديد."
  };

  function unflatten(flat) {
    var out = {};
    Object.keys(flat).forEach(function (k) {
      var parts = k.split('.'), o = out;
      for (var i = 0; i < parts.length - 1; i++) o = o[parts[i]] = o[parts[i]] || {};
      o[parts[parts.length - 1]] = flat[k];
    });
    return out;
  }

  /* ---------------------------------------------------------------
   * 1) الدليل المصوّر
   * ------------------------------------------------------------- */
  var ZONES = [
    ['الشريط العلوي: الشعار', 'يظهر في أعلى كل صفحة', '⚙️ إعدادات الموقع ← الشعار', '#/collections/settings/entries/settings'],
    ['الواجهة الكبيرة (أول ما يراه الزائر)', 'الصورة الكبيرة أعلى الصفحة الرئيسية', '🖼️ الصور ← 🏠 صورة الواجهة', '#/collections/media/entries/media'],
    ['الحملة الحالية والأرقام', 'المبلغ المجموع، العدّ التنازلي، «أثرنا في المجتمع»', '📊 الأرقام والحملة', '#/collections/numbers'],
    ['صور المشاريع (قسم «برامجنا»)', 'بطاقات الفئات: مياه، قفة، ملابس…', '🖼️ الصور ← 🏗️ فئات المشاريع', '#/collections/media/entries/projects'],
    ['قبل / بعد', 'شريط التمرير بين صورتين', '🖼️ الصور ← 🏠 … ← ↔️ قبل/بعد', '#/collections/media/entries/media'],
    ['شريط المعرض المتحرك', 'الصور التي تمرّ تلقائياً + صفحة «المعرض»', '🖼️ الصور ← 🖼️ معرض الصور', '#/collections/media/entries/gallery'],
    ['آراء المتابعين', 'الصور الدائرية الصغيرة مع الآراء', '💬 آراء المتابعين', '#/collections/testimonials'],
    ['صفحة الأخبار (/news)', 'بطاقات الأخبار وصورة كل خبر', '📰 الأخبار', '#/collections/news'],
    ['صفحة البرامج (/programs)', 'الأنشطة والفعاليات بصورها', '🎯 الأنشطة والمشاريع', '#/collections/activities']
  ];

  function buildGuide() {
    var zones = ZONES.map(function (z, i) {
      return '<a class="zone" href="' + z[3] + '" data-close="1"><span class="num">' + (i + 1) + '</span>' +
        '<span><div class="z-title">' + z[0] + '</div><div class="z-sub">' + z[1] + '</div></span>' +
        '<span class="z-go">' + z[2] + ' ‹</span></a>';
    }).join('');
    var el = document.createElement('div');
    el.id = 'cei-guide';
    el.innerHTML =
      '<div class="box" role="dialog" aria-modal="true">' +
      '<h2>👋 كيف أغيّر صورة في الموقع؟</h2>' +
      '<p class="sub">اضغط على المكان الذي تريد تغييره — يفتحك مباشرة على القسم المناسب.</p>' +
      '<div class="steps">' +
      '<div class="step"><b>1</b>اختر القسم من القائمة</div>' +
      '<div class="step"><b>2</b>اضغط على الصورة ← «اختر صورة» ← «رفع»</div>' +
      '<div class="step"><b>3</b>اضغط «نشر» ← انتظر دقيقتين</div></div>' +
      '<div class="map">' + zones + '</div>' +
      '<div class="tip">💡 <b>لست بحاجة لتصغير الصور</b> — اللوحة تصغّرها تلقائياً.<br>' +
      '💡 على اليسار ستجد <b>«معاينة»</b> تُظهر شكل الصورة قبل النشر.<br>' +
      '💡 أخطأت؟ لا تقلق: لا يتغير الموقع إلا بعد الضغط على <b>«نشر»</b>.</div>' +
      '<button class="close" type="button">فهمت، ابدأ العمل</button></div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (e) {
      var t = e.target;
      if (t === el || (t.classList && t.classList.contains('close')) || (t.closest && t.closest('[data-close]'))) closeGuide();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeGuide(); });
  }
  function openGuide() { document.getElementById('cei-guide').classList.add('open'); }
  function closeGuide() {
    var g = document.getElementById('cei-guide');
    if (g) g.classList.remove('open');
    try { localStorage.setItem('cei_guide_seen', '1'); } catch (e) {}
  }
  function initGuide() {
    buildGuide();
    var btn = document.createElement('button');
    btn.id = 'cei-help-btn'; btn.type = 'button'; btn.textContent = '❓ كيف أغيّر الصور؟';
    btn.onclick = openGuide;
    document.body.appendChild(btn);
  }

  /* ---------------------------------------------------------------
   * 2) المعاينة الحيّة
   * ------------------------------------------------------------- */
  function initPreviews() {
    var CMS = window.CMS, h = window.h;
    if (!CMS || !h) return;

    CMS.registerPreviewStyle(
      "@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');" +
      "body{font-family:'Cairo',sans-serif;background:#f3f4f6;margin:0;padding:16px;color:#1f2937}" +
      ".lbl{font-size:12px;color:#6b7280;margin:0 0 8px;font-weight:600}" +
      ".card{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.08);margin-bottom:14px}" +
      ".card img{display:block;width:100%;height:190px;object-fit:cover;background:#e5e7eb}" +
      ".noimg{height:190px;background:#e5e7eb;color:#9ca3af;display:grid;place-items:center;font-weight:600}" +
      ".body{padding:14px}.body h3{margin:0 0 6px;font-size:18px}.body p{margin:0;color:#4b5563;font-size:14px;line-height:1.8}" +
      ".meta{font-size:12px;color:#c8102e;font-weight:700;margin-bottom:4px}" +
      ".grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}" +
      ".grid img{width:100%;height:90px;object-fit:cover;border-radius:8px;background:#e5e7eb}" +
      ".grid small{display:block;font-size:11px;color:#6b7280;margin-top:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}" +
      ".avatar{width:84px;height:84px;border-radius:50%;object-fit:cover;background:#e5e7eb;display:block;margin:0 auto 8px}" +
      ".hero{position:relative;border-radius:14px;overflow:hidden;height:220px;background:#111;color:#fff}" +
      ".hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.75}" +
      ".hero div{position:absolute;inset:auto 0 0 0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,.7));font-weight:700}" +
      ".ba{display:grid;grid-template-columns:1fr 1fr;gap:4px}.ba img{height:120px;border-radius:8px}" +
      ".bar{background:#fff;border-radius:12px;padding:10px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 2px 10px rgba(0,0,0,.08)}" +
      ".bar img{width:48px;height:48px;object-fit:contain}" +
      ".prog{height:14px;background:#e5e7eb;border-radius:99px;overflow:hidden}.prog i{display:block;height:100%;background:#c8102e}" +
      ".nums{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.nums div{background:#fff;border-radius:12px;padding:12px;text-align:center}" +
      ".nums b{display:block;font-size:24px;color:#c8102e}",
      { raw: true }
    );

    var T = function (o) { return (o && (o.ar || o.fr || o.en)) || ''; };
    var D = function (p) { var d = p.entry.get('data'); return d && d.toJS ? d.toJS() : {}; };
    var A = function (p, path) {
      if (!path) return '';
      try { return String(p.getAsset(path)); } catch (e) { return path; }
    };
    var Img = function (p, path, cls) {
      var u = A(p, path);
      return u ? h('img', { src: u, className: cls || '' }) : h('div', { className: 'noimg' }, 'لم تُختر صورة بعد');
    };

    var NewsCard = function (p) {
      var d = D(p);
      return h('div', null,
        h('div', { className: 'lbl' }, 'هكذا ستظهر البطاقة في الموقع:'),
        h('div', { className: 'card' },
          Img(p, d.image_url),
          h('div', { className: 'body' },
            h('div', { className: 'meta' }, [d.date, T(d.location)].filter(Boolean).join(' — ')),
            h('h3', null, T(d.title)),
            h('p', null, T(d.description)))));
    };
    CMS.registerPreviewTemplate('news', NewsCard);
    CMS.registerPreviewTemplate('activities', NewsCard);

    CMS.registerPreviewTemplate('testimonials', function (p) {
      var d = D(p);
      return h('div', { className: 'card' }, h('div', { className: 'body', style: { textAlign: 'center' } },
        Img(p, d.image_url, 'avatar'),
        h('h3', null, d.name || ''), h('div', { className: 'meta' }, T(d.role)),
        h('p', null, T(d.content))));
    });

    CMS.registerPreviewTemplate('gallery', function (p) {
      var d = D(p), list = d.images || [];
      return h('div', null,
        h('div', { className: 'lbl' }, 'الصور (' + list.length + ') — بهذا الترتيب تظهر في الموقع:'),
        h('div', { className: 'grid' }, list.map(function (it) {
          return h('div', null, Img(p, it.image_url), h('small', null, T(it.caption)));
        })));
    });

    CMS.registerPreviewTemplate('projects', function (p) {
      var d = D(p), cats = d.categories || [];
      return h('div', null, cats.map(function (c) {
        return h('div', { className: 'card' }, Img(p, c.image),
          h('div', { className: 'body' }, h('h3', null, T(c.title)), h('p', null, T(c.description)),
            h('div', { className: 'grid', style: { marginTop: '8px' } }, (c.items || []).map(function (it) {
              return h('div', null, Img(p, it.image), h('small', null, T(it.title)));
            }))));
      }));
    });

    CMS.registerPreviewTemplate('media', function (p) {
      var d = D(p);
      return h('div', null,
        h('div', { className: 'lbl' }, '🏠 الواجهة الرئيسية:'),
        h('div', { className: 'hero' }, d.heroImage ? h('img', { src: A(p, d.heroImage) }) : null,
          h('div', null, 'شباب الإحسان')),
        (d.beforeAfter || []).length ? h('div', { className: 'lbl', style: { marginTop: '16px' } }, '↔️ قبل / بعد:') : null,
        (d.beforeAfter || []).map(function (b) {
          return h('div', { className: 'card' }, h('div', { className: 'ba' },
            b.before ? Img(p, b.before) : h('div', { className: 'noimg' }, 'قبل (تلقائي)'), Img(p, b.after)),
            h('div', { className: 'body' }, h('h3', null, T(b.title))));
        }));
    });

    CMS.registerPreviewTemplate('settings', function (p) {
      var d = D(p);
      return h('div', null,
        h('div', { className: 'lbl' }, 'الشريط العلوي للموقع:'),
        h('div', { className: 'bar' }, d.logo_url ? Img(p, d.logo_url) : null,
          h('b', null, 'شباب الإحسان')),
        h('div', { className: 'lbl', style: { marginTop: '14px' } }, [d.email, d.phone_display].filter(Boolean).join(' • ')));
    });

    CMS.registerPreviewTemplate('announcement', function (p) {
      var d = D(p), bg = { red: '#c8102e', green: '#15803d', gold: '#f59e0b', dark: '#111827' }[d.color] || '#c8102e', fg = d.color === 'gold' ? '#1f2937' : '#fff';
      return h('div', null, h('div', { className: 'lbl' }, d.enabled ? 'هكذا سيظهر الشريط أعلى الموقع:' : '⚠️ الشريط متوقف حالياً — فعّله ليظهر:'),
        h('div', { style: { background: bg, color: fg, padding: '10px 16px', borderRadius: '10px', textAlign: 'center', fontWeight: 700 } },
          T(d.text) || 'اكتب نص الإعلان…', d.link && T(d.button) ? h('u', { style: { marginInlineStart: '10px' } }, T(d.button)) : null));
    });

    CMS.registerPreviewTemplate('campaign', function (p) {
      var d = D(p), pct = d.goal ? Math.min(100, Math.round((d.raised || 0) * 100 / d.goal)) : 0;
      return h('div', { className: 'card' }, h('div', { className: 'body' },
        h('h3', null, T(d.title)), h('p', null, T(d.description)),
        h('div', { className: 'prog', style: { margin: '12px 0 6px' } }, h('i', { style: { width: pct + '%' } })),
        h('p', null, (d.raised || 0).toLocaleString() + ' / ' + (d.goal || 0).toLocaleString() + ' دج — ' + pct + '%')));
    });

    CMS.registerPreviewTemplate('impact', function (p) {
      var d = D(p);
      return h('div', null, h('h3', null, T(d.title)),
        h('div', { className: 'nums' }, (d.stats || []).map(function (s) {
          return h('div', null, h('b', null, s.number), h('span', null, T(s.label)));
        })));
    });
  }

  /* ---------------------------------------------------------------
   * 3) تصغير الصور تلقائياً قبل الرفع
   *    أكبر ضلع 1600px — JPEG بجودة 85% (أو WebP للـ PNG).
   *    أي خطأ ⇒ تُرفع الصورة الأصلية كما هي (لا شيء يتعطل).
   * ------------------------------------------------------------- */
  var MAX_SIDE = 1600, MIN_BYTES = 300 * 1024;

  function toast(msg) {
    var t = document.getElementById('cei-toast');
    if (!t) { t = document.createElement('div'); t.id = 'cei-toast'; document.body.appendChild(t); }
    t.textContent = msg; t.style.display = 'block';
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.style.display = 'none'; }, 5000);
  }
  function kb(n) { return n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.round(n / 1024) + ' KB'; }

  // تحويل كل صورة (JPG/PNG) إلى WebP مع تصغير أكبر ضلع إلى 1600px.
  // إن لم يكن الناتج أصغر من الأصل أو لم يدعم المتصفح WebP تبقى الصورة الأصلية.
  // quiet=true: لا رسالة لكل صورة (تُستعمل عند رفع عدّة صور دفعة واحدة).
  var shrinkStats = null;
  function shrink(file, quiet) {
    if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < MIN_BYTES || !window.createImageBitmap) return Promise.resolve(file);
    return createImageBitmap(file).then(function (bmp) {
      var s = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
      var w = Math.round(bmp.width * s), hh = Math.round(bmp.height * s);
      var c = document.createElement('canvas'); c.width = w; c.height = hh;
      c.getContext('2d').drawImage(bmp, 0, 0, w, hh);
      return new Promise(function (res) { c.toBlob(res, 'image/webp', 0.82); }).then(function (blob) {
        if (!blob || blob.type !== 'image/webp' || blob.size >= file.size) return file;   // لا فائدة من التحويل
        var name = file.name.replace(/\.[^.]+$/, '') + '.webp';
        if (shrinkStats) { shrinkStats.n++; shrinkStats.from += file.size; shrinkStats.to += blob.size; }
        else if (!quiet) toast('✅ تم تحويل الصورة إلى WebP: ' + kb(file.size) + ' ← ' + kb(blob.size));
        return new File([blob], name, { type: 'image/webp', lastModified: Date.now() });
      });
    }).catch(function () { return file; });
  }

  function initShrink() {
    document.addEventListener('change', function (e) {
      var inp = e.target;
      if (!inp || inp.type !== 'file' || e._cei || !inp.files || !inp.files.length) return;
      e.stopImmediatePropagation();
      var files = Array.prototype.slice.call(inp.files);
      shrinkStats = { n: 0, from: 0, to: 0 };
      Promise.all(files.map(function (f) { return shrink(f, true); })).then(function (out) {
        var st = shrinkStats; shrinkStats = null;
        if (st && st.n) toast('✅ تم تحويل ' + st.n + (st.n === 1 ? ' صورة' : ' صور') + ' إلى WebP: ' + kb(st.from) + ' ← ' + kb(st.to));
        try {
          var dt = new DataTransfer();
          out.forEach(function (f) { dt.items.add(f); });
          inp.files = dt.files;
        } catch (err) { /* نبقي الملفات الأصلية */ }
        var ev = new Event('change', { bubbles: true }); ev._cei = true;
        inp.dispatchEvent(ev);
      });
    }, true);
  }


  /* ---------------------------------------------------------------
   * 4) مركز التحكم: خريطة الموقع + تبويبات الصور + معاينة حيّة + آخر التعديلات
   * ------------------------------------------------------------- */
  var REPO = 'chababELihsan/chabab-el-ihssan', BRANCH = 'main', UP_DIR = 'public/images/uploads/';
  var SITE = (location.origin || '') + '/';
  var thumbs = {}, tab = 'map', L = { news: null, activities: null, testimonials: null }, G = null, commits = null, loaded = false, lastUndo = null, C = null, P = null, M = null, A = null;
  function todayStr() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }

  var MAP = [
    { id: 'logo', t: 'الشعار', s: 'الشريط العلوي في كل الصفحات', ic: '🏷️', go: '#/collections/settings/entries/settings', drop: 'logo' },
    { id: 'hero', t: 'الواجهة الكبيرة', s: 'أول صورة يراها الزائر', ic: '🏠', go: '#/collections/media/entries/media', drop: 'hero', big: 1 },
    { id: 'camp', t: 'الحملة الحالية', s: 'المبلغ المجموع والعدّ التنازلي', ic: '💰', go: '#/collections/numbers/entries/campaign' },
    { id: 'nums', t: 'أرقام «أثرنا»', s: 'وجبات، قوافل، مستفيدون…', ic: '📊', go: '#/collections/numbers/entries/impact' },
    { id: 'prog', t: 'برامجنا (فئات المشاريع)', s: 'بطاقات بصور: مياه، قفة، ملابس…', ic: '🏗️', go: '#/collections/media/entries/projects', thumbKey: 'prog' },
    { id: 'ba', t: 'قبل / بعد', s: 'شريط التمرير بين صورتين', ic: '↔️', go: '#/collections/media/entries/media', thumbKey: 'ba' },
    { id: 'map', t: 'خريطة الإنجازات', s: 'الولايات والأعمال المنجزة', ic: '🗺️', go: '#/collections/media/entries/media' },
    { id: 'gal', t: 'شريط المعرض', s: 'الصور المتحركة + صفحة «المعرض»', ic: '🖼️', go: '', drop: 'gallery', thumbKey: 'gal', tab: 'gallery' },
    { id: 'test', t: 'آراء المتابعين', s: 'صور دائرية مع الآراء', ic: '💬', go: '', tab: 'testimonials' },
    { id: 'soc', t: 'منشورات فيسبوك وإنستغرام', s: 'روابط التواصل والمنشورات', ic: '📱', go: '#/collections/settings/entries/settings' },
    { id: 'br', t: 'الفروع والاتصال', s: 'العناوين، الهاتف، الخريطة', ic: '📍', go: '#/collections/settings/entries/branches' }
  ];
  var TABS = [['map', '🗺️ خريطة الموقع'], ['news', '📰 الأخبار'], ['activities', '🎯 الأنشطة'], ['testimonials', '💬 الآراء'], ['gallery', '🖼️ المعرض'], ['other', '🏗️ صور أخرى']];
  var COLN = { news: 'خبر', activities: 'نشاط', testimonials: 'رأي' };

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function token() {
    try { var u = JSON.parse(localStorage.getItem('decap-cms-user') || localStorage.getItem('netlify-cms-user') || 'null'); return u && u.token; } catch (e) { return null; }
  }
  function ghx(p, opt) {
    opt = opt || {};
    var tk = token();
    if (!tk) return Promise.reject(new Error('no-token'));
    opt.headers = Object.assign({ Authorization: 'token ' + tk, Accept: 'application/vnd.github+json' }, opt.headers || {});
    return fetch('https://api.github.com/repos/' + REPO + '/' + p, opt).then(function (r) { if (!r.ok) throw new Error('GitHub ' + r.status); return r.json(); });
  }
  function gh(path, opt) { return ghx('contents/' + path + (opt && opt.method === 'PUT' ? '' : '?ref=' + BRANCH), opt); }
  function b64utf8(str) { var b = new TextEncoder().encode(str), s = ''; for (var i = 0; i < b.length; i++) s += String.fromCharCode(b[i]); return btoa(s); }
  function utf8b64(b64) { var bin = atob(b64.replace(/\s/g, '')), a = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return new TextDecoder().decode(a); }
  function readJson(file) { return gh(file).then(function (r) { return { sha: r.sha, data: JSON.parse(utf8b64(r.content)) }; }); }
  function writeJson(file, sha, data, msg) {
    return gh(file, { method: 'PUT', body: JSON.stringify({ message: msg, branch: BRANCH, sha: sha, content: b64utf8(JSON.stringify(data, null, 2) + '\n') }) });
  }
  function fileToB64(file) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1]); }; r.onerror = rej; r.readAsDataURL(file); }); }
  function safeName(n) { var m = n.match(/\.[a-z0-9]+$/i), ext = m ? m[0].toLowerCase() : '.jpg'; return 'img-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5) + ext; }
  function uploadImage(file) {
    return shrink(file).then(function (f) {
      var name = safeName(f.name);
      return fileToB64(f).then(function (b64) {
        return gh(UP_DIR + name, { method: 'PUT', body: JSON.stringify({ message: 'رفع صورة: ' + name, branch: BRANCH, content: b64 }) });
      }).then(function () { return '/images/uploads/' + name; });
    });
  }
  function absUrl(u) { return !u ? '' : /^https?:/.test(u) ? u : SITE.replace(/\/$/, '') + u; }
  function T3(o) { return (o && (o.ar || o.fr || o.en)) || ''; }
  function ago(d) {
    var s = (Date.now() - new Date(d).getTime()) / 1000, m = Math.floor(s / 60), h = Math.floor(m / 60), dd = Math.floor(h / 24);
    return s < 60 ? 'الآن' : m < 60 ? 'منذ ' + m + ' دقيقة' : h < 24 ? 'منذ ' + h + ' ساعة' : 'منذ ' + dd + ' يوم';
  }

  /* ---- لافتة النشر ---- */
  var banner, bannerT;
  function deployBanner() {
    if (!banner) { banner = document.createElement('div'); banner.id = 'cei-deploy'; document.body.appendChild(banner); }
    clearInterval(bannerT);
    var left = 75;
    function paint() {
      if (left > 0) banner.innerHTML = '<b>⏳ تم الحفظ — الموقع يتحدّث الآن</b><span>سيظهر التغيير خلال ' + left + ' ثانية</span><i style="width:' + (100 - left / 75 * 100) + '%"></i>';
      else { banner.innerHTML = '<b>✅ التغيير أصبح مباشراً</b><a href="' + SITE + '?v=' + Date.now() + '" target="_blank" rel="noopener">👁 شاهد الموقع</a><button type="button">إغلاق</button>'; clearInterval(bannerT); }
      banner.style.display = 'flex';
    }
    paint(); bannerT = setInterval(function () { left--; paint(); }, 1000);
    banner.onclick = function (e) { if (e.target.tagName === 'BUTTON') banner.style.display = 'none'; };
  }
  function busy(on) {
    var b = document.getElementById('cei-busy');
    if (!b) { b = document.createElement('div'); b.id = 'cei-busy'; b.textContent = '⏳ جارٍ الرفع… لا تغلق الصفحة'; document.body.appendChild(b); }
    b.style.display = on ? 'block' : 'none';
  }
  function fail(err) {
    busy(0);
    toast(err && err.message === 'no-token' ? '⚠️ سجّل الدخول بحساب GitHub أولاً (الرفع السريع لا يعمل في الوضع المحلي)' : '⚠️ تعذّر التنفيذ: ' + (err && err.message) + ' — جرّب من أدوات التحرير');
  }
  function done(msg) { busy(0); render(); deployBanner(); toast('✅ ' + msg); }
  function seq(files, fn) { return files.reduce(function (p, f) { return p.then(function () { return fn(f); }); }, Promise.resolve()); }

  /* ---- عمليات ---- */
  function setHeroLogo(kind, file) {
    busy(1);
    return uploadImage(file).then(function (url) {
      var f = kind === 'hero' ? 'src/content/media.json' : 'src/content/settings.json', key = kind === 'hero' ? 'heroImage' : 'logo_url';
      return modify(f, function (d) { d[key] = url; }, kind === 'hero' ? 'تغيير صورة الواجهة' : 'تغيير الشعار')
        .then(function () { thumbs[kind] = url; done(kind === 'hero' ? 'تم تغيير صورة الواجهة' : 'تم تغيير الشعار'); });
    }).catch(fail);
  }
  function galleryEdit(fn, msg, okMsg) {
    busy(1);
    return modify('src/content/gallery.json', function (d) { d.images = d.images || []; fn(d); }, msg)
      .then(function (d) { G = d; thumbs.gal = (d.images[0] || {}).image_url; done(okMsg); }).catch(fail);
  }
  function addGallery(files) {
    busy(1); var urls = [];
    return seq(files, function (f) { return uploadImage(f).then(function (u) { urls.push(u); }); }).then(function () {
      return galleryEdit(function (d) { urls.slice().reverse().forEach(function (u) { d.images.unshift({ image_url: u, caption: { ar: '', fr: '', en: '' }, is_featured: false }); }); }, 'إضافة صور للمعرض', 'أُضيفت ' + urls.length + ' صورة للمعرض');
    }).catch(fail);
  }
  function swapImage(col, i, file) {
    if (col === 'slot') return swapSlot(i, file);
    var it = L[col][i]; busy(1);
    return uploadImage(file).then(function (url) {
      return modify(it.path, function (d) { d.image_url = url; }, 'تغيير صورة: ' + (it.data.name || T3(it.data.title)))
        .then(function () { it.data.image_url = url; done('تم تغيير الصورة'); });
    }).catch(fail);
  }
  function modify(file, fn, msg) {
    return readJson(file).then(function (r) {
      var before = JSON.stringify(r.data); fn(r.data);
      return writeJson(file, r.sha, r.data, msg).then(function () { lastUndo = { file: file, before: before, msg: msg }; return r.data; });
    });
  }
  function undo() {
    if (!lastUndo) return; var u = lastUndo; busy(1);
    readJson(u.file).then(function (r) { return writeJson(u.file, r.sha, JSON.parse(u.before), 'تراجع: ' + u.msg); })
      .then(function () { lastUndo = null; done('تم التراجع عن آخر تغيير'); loadAll(); }).catch(fail);
  }
  function setPath(d, path, v) { var o = d; for (var i = 0; i < path.length - 1; i++) o = o[path[i]]; o[path[path.length - 1]] = v; }
  function getPath(d, path) { var o = d; for (var i = 0; i < path.length && o; i++) o = o[path[i]]; return o; }
  function slots() {
    var out = [];
    if (P) (P.categories || []).forEach(function (c, ci) {
      out.push({ g: 'برامجنا — فئات المشاريع', lbl: T3(c.title), file: 'src/content/projects.json', path: ['categories', ci, 'image'], url: c.image });
      (c.items || []).forEach(function (it, ii) { out.push({ g: 'برامجنا — مشاريع «' + T3(c.title) + '»', lbl: T3(it.title), file: 'src/content/projects.json', path: ['categories', ci, 'items', ii, 'image'], url: it.image }); });
    });
    if (M) (M.beforeAfter || []).forEach(function (b, bi) {
      out.push({ g: 'قبل / بعد', lbl: T3(b.title) + ' — «قبل»', file: 'src/content/media.json', path: ['beforeAfter', bi, 'before'], url: b.before });
      out.push({ g: 'قبل / بعد', lbl: T3(b.title) + ' — «بعد»', file: 'src/content/media.json', path: ['beforeAfter', bi, 'after'], url: b.after });
    });
    return out;
  }
  function swapSlot(i, file) {
    var s = slots()[i]; if (!s) return; busy(1);
    return uploadImage(file).then(function (url) {
      return modify(s.file, function (d) { setPath(d, s.path, url); }, 'تغيير صورة: ' + s.lbl).then(function (d) {
        if (/projects/.test(s.file)) P = d; else M = d; done('تم تغيير الصورة');
      });
    }).catch(fail);
  }
  function pickFiles(multi, cb) {
    var i = document.createElement('input'); i.type = 'file'; i.accept = 'image/*'; i.multiple = !!multi;
    i.onchange = function () { if (i.files && i.files.length) cb(Array.prototype.slice.call(i.files)); }; i.click();
  }

  /* ---- تحميل البيانات ---- */
  function loadList(col) {
    return gh('src/content/' + col).then(function (arr) {
      return Promise.all(arr.filter(function (f) { return /\.json$/.test(f.name); }).map(function (f) {
        return readJson(f.path).then(function (r) { return { file: f.name.replace(/\.json$/, ''), path: f.path, data: r.data }; });
      }));
    }).then(function (items) {
      items.sort(function (a, b) { return String(b.data.date || '').localeCompare(String(a.data.date || '')); });
      L[col] = items; render();
    }).catch(function () {});
  }
  function loadAll() {
    if (!token()) { loaded = true; render(); return; }
    ['news', 'activities', 'testimonials'].forEach(loadList);
    readJson('src/content/media.json').then(function (r) { M = r.data; thumbs.hero = r.data.heroImage; var b = (r.data.beforeAfter || [])[0]; if (b) thumbs.ba = b.after; render(); }).catch(function () {});
    readJson('src/content/settings.json').then(function (r) { thumbs.logo = r.data.logo_url; render(); }).catch(function () {});
    readJson('src/content/gallery.json').then(function (r) { G = r.data; thumbs.gal = (r.data.images[0] || {}).image_url; render(); }).catch(function () {});
    readJson('src/content/projects.json').then(function (r) { P = r.data; var c = (r.data.categories || [])[0]; if (c) thumbs.prog = c.image; render(); }).catch(function () {});
    readJson('src/content/campaign.json').then(function (r) { C = r.data; render(); }).catch(function () {});
    readJson('src/content/announcement.json').then(function (r) { A = r.data; render(); }).catch(function () {});
    ghx('commits?per_page=6&sha=' + BRANCH).then(function (c) { commits = c; render(); }).catch(function () {});
    loaded = true;
  }

  /* ---- الرسم ---- */
  function thumbHtml(url, ic) { return url ? '<img src="' + esc(absUrl(url)) + '" alt="" onerror="this.style.display=\'none\'">' : '<span class="ph">' + ic + '</span>'; }

  function viewMap() {
    var cnt = function (a) { return a ? a.length : '–'; };
    var stats = '<div class="stats">' +
      [['📰', cnt(L.news), 'خبر', 'news'], ['🎯', cnt(L.activities), 'نشاط', 'activities'], ['🖼️', G ? (G.images || []).length : '–', 'صورة في المعرض', 'gallery'], ['💬', cnt(L.testimonials), 'رأي', 'testimonials']]
        .map(function (s) { return '<button data-act="tab" data-v="' + s[3] + '" type="button"><span>' + s[0] + '</span><b>' + s[1] + '</b><small>' + s[2] + '</small></button>'; }).join('') + '</div>';
    var quick = '<div class="quick"><a href="#/collections/news/new" data-close="1">📰 خبر جديد<small>بصورة ونص</small></a><a href="#/collections/activities/new" data-close="1">🎯 نشاط جديد<small>مشروع / فعالية</small></a><a href="#/collections/testimonials/new" data-close="1">💬 رأي جديد<small>صورة دائرية</small></a><button data-act="addgal" type="button">🖼️ صور للمعرض<small>اختر عدة صور دفعة واحدة</small></button></div>';
    var camp = '';
    if (C) { var pc = C.goal ? Math.min(100, Math.round((C.raised || 0) * 100 / C.goal)) : 0;
      camp = '<div class="camp"><div class="ch"><b>💰 ' + esc(T3(C.title)) + '</b><span>' + pc + '%</span></div><div class="pr"><i style="width:' + pc + '%"></i></div>' +
        '<div class="cf"><label>المبلغ المجموع (دج)<input id="cei-raised" type="number" min="0" value="' + (C.raised || 0) + '"></label><label>الهدف (دج)<input id="cei-goal" type="number" min="0" value="' + (C.goal || 0) + '"></label><button class="btn red" data-act="saveraised" type="button">💾 حفظ</button></div></div>'; }
    var ann = '';
    if (A) {
      var cols = [['red', 'أحمر'], ['green', 'أخضر'], ['gold', 'ذهبي'], ['dark', 'أسود']];
      ann = '<div class="camp ann' + (A.enabled ? ' on' : '') + '"><div class="ch"><b>📢 شريط الإعلان (أعلى كل صفحات الموقع)</b><label class="sw"><input id="cei-a-on" type="checkbox"' + (A.enabled ? ' checked' : '') + '> مفعّل</label></div>' +
        '<div class="cf"><label style="flex:1;min-width:230px">نص الإعلان<input id="cei-a-txt" type="text" style="width:100%" value="' + esc((A.text && A.text.ar) || '') + '" placeholder="مثال: آخر يوم للتبرع هو الجمعة"></label>' +
        '<label>اللون<select id="cei-a-col">' + cols.map(function (c) { return '<option value="' + c[0] + '"' + (A.color === c[0] ? ' selected' : '') + '>' + c[1] + '</option>'; }).join('') + '</select></label>' +
        '<label>يختفي بعد يوم<input id="cei-a-end" type="date" value="' + esc(String(A.end_date || '').slice(0, 10)) + '"></label>' +
        '<button class="btn red" data-act="annsave" type="button">💾 حفظ</button></div>' +
        '<small class="note">النسخ الفرنسية والإنجليزية تُعدَّل من «أدوات التحرير ← إعدادات الموقع ← شريط الإعلان». عند تغيير النص هنا تُمسح لتجنّب نص قديم.</small></div>';
    }
    var blocks = MAP.map(function (z) {
      var img = z.drop === 'logo' ? thumbs.logo : z.drop === 'hero' ? thumbs.hero : thumbs[z.thumbKey || ''];
      var hint = z.drop ? '<div class="dz">⬇️ اسحب صورة هنا أو <u>اضغط لاختيارها</u> — تُوضع مباشرة في الموقع</div>' : '<div class="dz soft">اضغط للتعديل ‹</div>';
      return '<div class="blk' + (z.big ? ' big' : '') + (z.drop ? ' can-drop' : '') + '" data-go="' + z.go + '" data-tab="' + (z.tab || '') + '" data-drop="' + (z.drop || '') + '"><div class="th">' + thumbHtml(img, z.ic) + '</div><div class="tx"><b>' + z.t + '</b><small>' + z.s + '</small>' + hint + '</div></div>';
    }).join('');
    var rec = '';
    if (commits && commits.length) rec = '<h2>🕒 آخر التعديلات</h2><div class="rec">' + commits.map(function (c) {
      return '<div><span>' + esc((c.commit.message || '').split('\n')[0]) + '</span><small>' + ago(c.commit.author.date) + '</small></div>'; }).join('') + '</div>';
    return stats + ann + camp + quick + '<h2>🗺️ خريطة الصفحة الرئيسية <small>(من الأعلى إلى الأسفل كما يراها الزائر)</small></h2><div class="map">' + blocks + '</div>' + rec +
      '<div class="tipbox">💡 كل تغيير يظهر في الموقع بعد حوالي دقيقة، وستظهر لافتة تعدّ الوقت.<br>💡 الصور تُصغَّر تلقائياً — ارفعها كما هي من الهاتف.<br>💡 زر «معاينة حيّة» يريك الموقع كما يراه الزائر على الكمبيوتر والهاتف.</div>';
  }
  function viewList(col) {
    var items = L[col];
    var head = '<div class="lh"><h2>' + TABS.filter(function (t) { return t[0] === col; })[0][1] + '</h2><a class="btn red" href="#/collections/' + col + '/new" data-close="1">＋ إضافة ' + COLN[col] + ' جديد</a></div>';
    if (!token()) return head + '<div class="empty">⚠️ هذه الصفحة تحتاج تسجيل الدخول بحساب GitHub. من أدوات التحرير يمكنك التعديل كالعادة.</div>';
    if (!items) return head + '<div class="empty">⏳ جارٍ التحميل…</div>';
    if (!items.length) return head + '<div class="empty">لا يوجد شيء بعد. اضغط «إضافة».</div>';
    return head + '<input id="cei-q" class="q" placeholder="🔍 ابحث بالعنوان…">' + (col === 'news' ? '<div class="schedtip">⏰ <b>جدولة خبر:</b> عند إضافة خبر اختر <b>تاريخاً مستقبلياً</b> — يبقى مخفياً ويظهر تلقائياً في ذلك اليوم.</div>' : '') + '<p class="hint">⬇️ اسحب صورة فوق أي بطاقة لتغييرها فوراً، أو اضغط على الصورة.</p><div class="cards">' + items.map(function (it, i) {
      var d = it.data, title = d.name || T3(d.title);
      var hid = col === 'testimonials' && d.is_approved === false ? '<em>مخفي</em>' : col === 'news' && d.date && String(d.date).slice(0, 10) > todayStr() ? '<em class="sch">⏰ مجدول — يُنشر يوم ' + esc(String(d.date).slice(0, 10)) + '</em>' : d.is_pinned ? '<em>📌 مثبّت</em>' : '';
      return '<div class="card can-drop' + (col === 'testimonials' ? ' round' : '') + '" data-swap="' + col + ':' + i + '"><div class="cimg">' + thumbHtml(d.image_url, '📷') + '<span class="chg">📷 تغيير الصورة</span></div>' +
        '<div class="cb"><b>' + esc(title) + '</b>' + hid + '<small>' + esc(d.date || T3(d.role) || '') + '</small>' +
        '<a class="edit" href="#/collections/' + col + '/entries/' + esc(it.file) + '" data-close="1">✏️ تعديل النص</a></div></div>';
    }).join('') + '</div>';
  }
  function viewOther() {
    var head = '<div class="lh"><h2>🏗️ صور أخرى في الموقع</h2></div>';
    if (!token()) return head + '<div class="empty">⚠️ هذه الصفحة تحتاج تسجيل الدخول بحساب GitHub.</div>';
    var ss = slots(); if (!ss.length) return head + '<div class="empty">⏳ جارٍ التحميل…</div>';
    var last = '', html = '';
    ss.forEach(function (s, i) {
      if (s.g !== last) { html += (last ? '</div>' : '') + '<h3>' + esc(s.g) + '</h3><div class="cards">'; last = s.g; }
      html += '<div class="card can-drop" data-swap="slot:' + i + '"><div class="cimg">' + thumbHtml(s.url, '📷') + '<span class="chg">📷 تغيير الصورة</span></div><div class="cb"><b>' + esc(s.lbl) + '</b></div></div>';
    });
    return head + '<p class="hint">⬇️ اسحب صورة فوق أي بطاقة لتغييرها فوراً (فئات البرامج، مشاريعها، وصور قبل/بعد).</p>' + html + '</div>';
  }
  function viewGallery() {
    var head = '<div class="lh"><h2>🖼️ المعرض</h2><button class="btn red" data-act="addgal" type="button">＋ أضف صوراً</button></div>';
    if (!token()) return head + '<div class="empty">⚠️ هذه الصفحة تحتاج تسجيل الدخول بحساب GitHub.</div>';
    if (!G) return head + '<div class="empty">⏳ جارٍ التحميل…</div>';
    var im = G.images || [];
    return head + '<p class="hint">↔️ <b>اسحب الصورة وأفلتها فوق صورة أخرى</b> لتغيير ترتيبها (أو زر ⏫ لنقلها للأول). اكتب التعليق تحت الصورة ثم اضغط Enter. الصورة الأولى تظهر أولاً في الموقع.</p>' +
      '<div class="gdrop can-drop" data-drop="gallery">⬇️ أفلت صوراً جديدة هنا (أو اضغط) — تُضاف في بداية المعرض</div><div class="ggrid">' + im.map(function (g, i) {
        return '<div class="g" draggable="true" data-gi="' + i + '"><img src="' + esc(absUrl(g.image_url)) + '" alt="" loading="lazy" draggable="false"><span class="gn">' + (i + 1) + '</span><div class="gt"><button data-act="gfeat" data-i="' + i + '" type="button" title="صورة مميزة" class="' + (g.is_featured ? 'on' : '') + '">★</button>' +
          (i ? '<button data-act="gfirst" data-i="' + i + '" type="button" title="نقل للأول">⏫</button>' : '') + '<button data-act="gdel" data-i="' + i + '" type="button" title="حذف">🗑</button></div>' +
          '<input class="gcap" data-i="' + i + '" value="' + esc((g.caption && g.caption.ar) || '') + '" placeholder="✏️ اكتب تعليقاً…"></div>'; }).join('') + '</div>';
  }

  function render() {
    var el = document.getElementById('cei-home'); if (!el) return;
    var h = new Date().getHours();
    var logo = thumbs.logo ? '<img src="' + esc(absUrl(thumbs.logo)) + '" alt="">' : '<span>🤝</span>';
    var body = tab === 'map' ? viewMap() : tab === 'gallery' ? viewGallery() : tab === 'other' ? viewOther() : viewList(tab);
    el.innerHTML =
      '<header class="top"><div class="brand"><div class="lg">' + logo + '</div><div><h1>' + (h < 12 ? '☀️ صباح الخير' : '🌙 مساء الخير') + '، مرحباً بك</h1><p>لوحة تحكم شباب الإحسان</p></div></div>' +
      '<div class="acts">' + (lastUndo ? '<button class="btn amber" data-act="undo" type="button">↩️ تراجع عن آخر تغيير</button>' : '') + '<button class="btn glass" data-act="dark" type="button" title="الوضع الليلي">🌓</button><button class="btn glass" data-act="live" type="button">🖥️ معاينة حيّة</button><a class="btn glass" href="' + SITE + '" target="_blank" rel="noopener">↗ فتح الموقع</a><button class="btn red" data-act="edit" type="button">أدوات التحرير ›</button></div></header>' +
      '<nav class="tabs">' + TABS.map(function (t) { return '<button type="button" data-act="tab" data-v="' + t[0] + '" class="' + (tab === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</nav>' +
      '<main>' + body + '</main>';
  }

  /* ---- معاينة حيّة ---- */
  function openLive() {
    var o = document.getElementById('cei-live');
    if (!o) {
      o = document.createElement('div'); o.id = 'cei-live';
      o.innerHTML = '<div class="lb"><b>🖥️ معاينة حيّة للموقع</b><span><button data-m="d" class="on" type="button">💻 كمبيوتر</button><button data-m="m" type="button">📱 هاتف</button><button data-m="r" type="button">↻ تحديث</button><button data-m="x" type="button">✕ إغلاق</button></span></div><div class="lf"><iframe title="live"></iframe></div>';
      document.body.appendChild(o);
      o.addEventListener('click', function (e) {
        var m = e.target.dataset && e.target.dataset.m, f = o.querySelector('iframe'); if (!m) return;
        if (m === 'x') o.classList.remove('open');
        if (m === 'r') f.src = SITE + '?v=' + Date.now();
        if (m === 'd' || m === 'm') { o.classList.toggle('mob', m === 'm'); o.querySelectorAll('[data-m=d],[data-m=m]').forEach(function (b) { b.classList.toggle('on', b.dataset.m === m); }); }
      });
    }
    o.querySelector('iframe').src = SITE + '?v=' + Date.now(); o.classList.add('open');
  }

  function openHome() { var h = document.getElementById('cei-home-wrap'); if (h) { h.classList.add('open'); render(); loadAll(); } }
  function closeHome() { var h = document.getElementById('cei-home-wrap'); if (h) h.classList.remove('open'); }

  function initHome() {
    var wrap = document.createElement('div'); wrap.id = 'cei-home-wrap'; wrap.innerHTML = '<div id="cei-home"></div>'; document.body.appendChild(wrap);
    var fab = document.createElement('button'); fab.id = 'cei-home-btn'; fab.type = 'button'; fab.textContent = '🏠 الرئيسية'; fab.onclick = openHome; document.body.appendChild(fab);

    wrap.addEventListener('click', function (e) {
      var t = e.target, q = function (s) { return t.closest && t.closest(s); };
      var act = q('[data-act]'), blk = q('[data-go],[data-drop],[data-swap]'), cl = q('[data-close]');
      if (cl) { setTimeout(closeHome, 0); return; }
      if (act) {
        var a = act.dataset.act, i = +act.dataset.i;
        if (a === 'edit') return closeHome();
        if (a === 'live') return openLive();
        if (a === 'undo') return undo();
        if (a === 'gfirst') return galleryEdit(function (d) { var x = d.images.splice(i, 1)[0]; d.images.unshift(x); }, 'نقل صورة للأول', 'نُقلت الصورة للأول');
        if (a === 'annsave') {
          var on = document.getElementById('cei-a-on').checked, tx = document.getElementById('cei-a-txt').value.trim(), co = document.getElementById('cei-a-col').value, en = document.getElementById('cei-a-end').value; busy(1);
          return modify('src/content/announcement.json', function (d) {
            d.text = d.text || {}; if (d.text.ar !== tx) { d.text.ar = tx; d.text.fr = ''; d.text.en = ''; }
            d.enabled = on; d.color = co; d.end_date = en || '';
          }, 'تحديث شريط الإعلان').then(function (d) { A = d; done(on ? 'شريط الإعلان مفعّل' : 'شريط الإعلان متوقف'); }).catch(fail);
        }
        if (a === 'dark') { var on = !wrap.classList.contains('dark'); wrap.classList.toggle('dark', on); try { localStorage.setItem('cei_dark', on ? '1' : '0'); } catch (x) {} return; }
        if (a === 'saveraised') {
          var rv = +document.getElementById('cei-raised').value || 0, gv = +document.getElementById('cei-goal').value || 0; busy(1);
          return modify('src/content/campaign.json', function (d) { d.raised = rv; d.goal = gv; }, 'تحديث مبلغ الحملة').then(function (d) { C = d; done('تم تحديث مبلغ الحملة'); }).catch(fail);
        }
        if (a === 'tab') { tab = act.dataset.v; render(); return; }
        if (a === 'addgal') return pickFiles(true, addGallery);
        if (a === 'gdel') return confirm('حذف هذه الصورة من المعرض؟') && galleryEdit(function (d) { d.images.splice(i, 1); }, 'حذف صورة من المعرض', 'تم حذف الصورة');
        if (a === 'gfeat') return galleryEdit(function (d) { d.images[i].is_featured = !d.images[i].is_featured; }, 'تمييز صورة', 'تم التحديث');
      }
      if (blk) {
        if (blk.dataset.swap) { var s = blk.dataset.swap.split(':'); return pickFiles(false, function (fs) { swapImage(s[0], +s[1], fs[0]); }); }
        var d = blk.dataset.drop;
        if (d) return pickFiles(d === 'gallery', function (fs) { d === 'gallery' ? addGallery(fs) : setHeroLogo(d, fs[0]); });
        if (blk.dataset.tab) { tab = blk.dataset.tab; render(); return; }
        if (blk.dataset.go) { location.hash = blk.dataset.go; closeHome(); }
      }
    });
    var dragI = null;
    ['dragenter', 'dragover'].forEach(function (n) { wrap.addEventListener(n, function (e) { if (dragI != null) return; var b = e.target.closest && e.target.closest('.can-drop'); if (b) { e.preventDefault(); b.classList.add('over'); } }); });
    wrap.addEventListener('dragleave', function (e) { var b = e.target.closest && e.target.closest('.can-drop'); if (b) b.classList.remove('over'); });
    wrap.addEventListener('dragstart', function (e) { var g = e.target.closest && e.target.closest('.g'); if (g) { dragI = +g.dataset.gi; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', 'g'); g.classList.add('dragging'); } });
    wrap.addEventListener('dragend', function () { dragI = null; wrap.querySelectorAll('.dragging,.gover').forEach(function (x) { x.classList.remove('dragging', 'gover'); }); });
    wrap.addEventListener('dragover', function (e) { if (dragI == null) return; var g = e.target.closest && e.target.closest('.g'); if (g) { e.preventDefault(); wrap.querySelectorAll('.gover').forEach(function (x) { x.classList.remove('gover'); }); g.classList.add('gover'); } });
    wrap.addEventListener('change', function (e) {
      var t = e.target; if (!t.classList || !t.classList.contains('gcap')) return; var i = +t.dataset.i, v = t.value.trim();
      galleryEdit(function (d) { var im = d.images[i]; if (!im) return; im.caption = im.caption || {}; im.caption.ar = v; }, 'تعديل تعليق صورة', 'تم حفظ التعليق');
    });
    wrap.addEventListener('drop', function (e) {
      if (dragI != null) { var tg = e.target.closest && e.target.closest('.g'); e.preventDefault(); var from = dragI; dragI = null; wrap.querySelectorAll('.dragging,.gover').forEach(function (x) { x.classList.remove('dragging', 'gover'); });
        if (tg && +tg.dataset.gi !== from) { var to = +tg.dataset.gi; galleryEdit(function (d) { var x = d.images.splice(from, 1)[0]; d.images.splice(to, 0, x); }, 'ترتيب صور المعرض', 'تم تغيير الترتيب'); }
        return; }
      var b = e.target.closest && e.target.closest('.can-drop'); if (!b) return;
      e.preventDefault(); b.classList.remove('over');
      var fs = Array.prototype.slice.call(e.dataTransfer.files || []).filter(function (f) { return /^image\//.test(f.type); });
      if (!fs.length) return toast('⚠️ هذا ليس ملف صورة');
      if (b.dataset.swap) { var s = b.dataset.swap.split(':'); return swapImage(s[0], +s[1], fs[0]); }
      if (b.dataset.drop === 'gallery') return addGallery(fs);
      setHeroLogo(b.dataset.drop, fs[0]);
    });
    wrap.addEventListener('input', function (e) {
      if (e.target.id !== 'cei-q') return; var v = e.target.value.trim().toLowerCase();
      wrap.querySelectorAll('.card').forEach(function (c) { c.style.display = c.textContent.toLowerCase().indexOf(v) > -1 ? '' : 'none'; });
    });
    try { if (localStorage.getItem('cei_dark') === '1') wrap.classList.add('dark'); } catch (x) {}
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var l = document.getElementById('cei-live'); if (l && l.classList.contains('open')) l.classList.remove('open'); else closeHome(); } });

    if (window.CMS && CMS.registerEventListener) {
      var last = 0;
      ['postSave', 'postPublish'].forEach(function (n) { try { CMS.registerEventListener({ name: n, handler: function () { if (Date.now() - last > 3000) { last = Date.now(); deployBanner(); } } }); } catch (e) {} });
    }
  }

  /* ---------------------------------------------------------------
   * واجهة مستقرّة: شاشة تحميل تختفي مرة واحدة عندما تصبح اللوحة جاهزة،
   * والأزرار العائمة تظهر بنعومة (CSS) بعد تسجيل الدخول — بدون قفزات.
   * ------------------------------------------------------------- */
  function watchUi() {
    var root = document.documentElement, t0 = Date.now();
    var iv = setInterval(function () {
      var logged = !!document.querySelector('[class*="SidebarContainer"]');
      var login = !!document.querySelector('[class*="AuthenticationPage"]');
      document.body.classList.toggle('cei-in', logged);
      if (!root.classList.contains('cei-ready') && (logged || login || Date.now() - t0 > 10000)) {
        setTimeout(function () { root.classList.add('cei-ready'); }, 120);
      }
    }, 200);
    return iv;
  }

  /* ------------------------------------------------------------- */
  function start() {
    if (window.CMS) {
      CMS.registerLocale('ar', unflatten(AR));
      if (window.CMS_MANUAL_INIT) CMS.init();
    }
    initGuide();
    initShrink();
    initHome();
    watchUi();
    // Decap يعرّف window.CMS و window.h بعد تحميل السكربت
    var tries = 0, iv = setInterval(function () {
      if (window.CMS && window.h) { clearInterval(iv); initPreviews(); }
      else if (++tries > 100) clearInterval(iv);
    }, 100);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
