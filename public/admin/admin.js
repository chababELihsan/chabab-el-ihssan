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
    btn.style.display = 'none';
    btn.onclick = openGuide;
    document.body.appendChild(btn);
    var autoDone = false;
    // الزر والدليل لا يظهران إلا بعد تسجيل الدخول (عندما تظهر القائمة الجانبية)
    setInterval(function () {
      var logged = !!document.querySelector('[class*="SidebarContainer"]');
      btn.style.display = logged ? 'block' : 'none';
      if (logged && !autoDone) {
        autoDone = true;
        var seen = false;
        try { seen = localStorage.getItem('cei_guide_seen') === '1'; } catch (e) {}
        /* الصفحة الرئيسية الجديدة تظهر تلقائياً بدل الدليل */
      }
    }, 500);
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

  function shrink(file) {
    if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size < MIN_BYTES || !window.createImageBitmap) return Promise.resolve(file);
    return createImageBitmap(file).then(function (bmp) {
      var s = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
      var w = Math.round(bmp.width * s), hh = Math.round(bmp.height * s);
      var c = document.createElement('canvas'); c.width = w; c.height = hh;
      c.getContext('2d').drawImage(bmp, 0, 0, w, hh);
      var wantType = file.type === 'image/jpeg' ? 'image/jpeg' : 'image/webp';
      return new Promise(function (res) { c.toBlob(res, wantType, 0.85); }).then(function (blob) {
        if (!blob || blob.size >= file.size) return file;          // لا فائدة من التصغير
        var ext = blob.type === 'image/jpeg' ? '.jpg' : blob.type === 'image/webp' ? '.webp' : '.png';
        var name = file.name.replace(/\.[^.]+$/, '') + ext;
        toast('✅ تم تصغير الصورة تلقائياً: ' + kb(file.size) + ' ← ' + kb(blob.size));
        return new File([blob], name, { type: blob.type, lastModified: Date.now() });
      });
    }).catch(function () { return file; });
  }

  function initShrink() {
    document.addEventListener('change', function (e) {
      var inp = e.target;
      if (!inp || inp.type !== 'file' || e._cei || !inp.files || !inp.files.length) return;
      e.stopImmediatePropagation();
      var files = Array.prototype.slice.call(inp.files);
      Promise.all(files.map(shrink)).then(function (out) {
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
   * 4) الصفحة الرئيسية للوحة: خريطة الموقع + رفع سريع للصور + حالة النشر
   * ------------------------------------------------------------- */
  var REPO = 'chababELihsan/chabab-el-ihssan', BRANCH = 'main', UP_DIR = 'public/images/uploads/';
  var SITE = (location.origin || '') + '/';
  var thumbs = {};          // zone-id -> رابط صورة حالية

  // أقسام الصفحة الرئيسية بنفس ترتيبها الحقيقي في الموقع
  // drop: يقبل سحب صورة وإفلاتها مباشرة | go: رابط قسم التعديل
  var MAP = [
    { id: 'logo',  t: 'الشعار', s: 'الشريط العلوي في كل الصفحات', ic: '🏷️', go: '#/collections/settings/entries/settings', drop: 'logo' },
    { id: 'hero',  t: 'الواجهة الكبيرة', s: 'أول صورة يراها الزائر', ic: '🏠', go: '#/collections/media/entries/media', drop: 'hero', big: 1 },
    { id: 'camp',  t: 'الحملة الحالية', s: 'المبلغ المجموع والعدّ التنازلي', ic: '💰', go: '#/collections/numbers/entries/campaign' },
    { id: 'nums',  t: 'أرقام «أثرنا»', s: 'وجبات، قوافل، مستفيدون…', ic: '📊', go: '#/collections/numbers/entries/impact' },
    { id: 'prog',  t: 'برامجنا (فئات المشاريع)', s: 'بطاقات بصور: مياه، قفة، ملابس…', ic: '🏗️', go: '#/collections/media/entries/projects', thumbKey: 'prog' },
    { id: 'ba',    t: 'قبل / بعد', s: 'شريط التمرير بين صورتين', ic: '↔️', go: '#/collections/media/entries/media', thumbKey: 'ba' },
    { id: 'map',   t: 'خريطة الإنجازات', s: 'الولايات والأعمال المنجزة', ic: '🗺️', go: '#/collections/media/entries/media' },
    { id: 'gal',   t: 'شريط المعرض', s: 'الصور المتحركة + صفحة «المعرض»', ic: '🖼️', go: '#/collections/media/entries/gallery', drop: 'gallery', thumbKey: 'gal' },
    { id: 'test',  t: 'آراء المتابعين', s: 'صور دائرية مع الآراء', ic: '💬', go: '#/collections/testimonials' },
    { id: 'soc',   t: 'منشورات فيسبوك وإنستغرام', s: 'روابط التواصل والمنشورات', ic: '📱', go: '#/collections/settings/entries/settings' },
    { id: 'br',    t: 'الفروع والاتصال', s: 'العناوين، الهاتف، الخريطة', ic: '📍', go: '#/collections/settings/entries/branches' }
  ];
  var PAGES = [
    { t: '📰 الأخبار', s: 'صفحة /news', go: '#/collections/news', add: '#/collections/news/new' },
    { t: '🎯 الأنشطة والمشاريع', s: 'صفحة /programs', go: '#/collections/activities', add: '#/collections/activities/new' }
  ];

  function token() {
    try { var u = JSON.parse(localStorage.getItem('decap-cms-user') || localStorage.getItem('netlify-cms-user') || 'null'); return u && u.token; } catch (e) { return null; }
  }
  function gh(path, opt) {
    opt = opt || {};
    var tk = token();
    if (!tk) return Promise.reject(new Error('no-token'));
    opt.headers = Object.assign({ Authorization: 'token ' + tk, Accept: 'application/vnd.github+json' }, opt.headers || {});
    return fetch('https://api.github.com/repos/' + REPO + '/contents/' + path + (opt.method === 'PUT' ? '' : '?ref=' + BRANCH), opt)
      .then(function (r) { if (!r.ok) throw new Error('GitHub ' + r.status); return r.json(); });
  }
  function b64utf8(str) { var b = new TextEncoder().encode(str), s = ''; for (var i = 0; i < b.length; i++) s += String.fromCharCode(b[i]); return btoa(s); }
  function utf8b64(b64) { var bin = atob(b64.replace(/\s/g, '')), a = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return new TextDecoder().decode(a); }
  function readJson(file) { return gh(file).then(function (r) { return { sha: r.sha, data: JSON.parse(utf8b64(r.content)) }; }); }
  function writeJson(file, sha, data, msg) {
    return gh(file, { method: 'PUT', body: JSON.stringify({ message: msg, branch: BRANCH, sha: sha, content: b64utf8(JSON.stringify(data, null, 2) + '\n') }) });
  }
  function fileToB64(file) {
    return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(String(r.result).split(',')[1]); }; r.onerror = rej; r.readAsDataURL(file); });
  }
  function safeName(n) {
    var m = n.match(/\.[a-z0-9]+$/i), ext = m ? m[0].toLowerCase() : '.jpg';
    return 'img-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5) + ext;
  }
  function uploadImage(file) {
    return shrink(file).then(function (f) {
      var name = safeName(f.name);
      return fileToB64(f).then(function (b64) {
        return gh(UP_DIR + name, { method: 'PUT', body: JSON.stringify({ message: 'رفع صورة: ' + name, branch: BRANCH, content: b64 }) });
      }).then(function () { return '/images/uploads/' + name; });
    });
  }

  // ------ لافتة "جارٍ النشر" مع عدّاد، ثم زر "شاهد النتيجة" ------
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
    paint();
    bannerT = setInterval(function () { left--; paint(); }, 1000);
    banner.onclick = function (e) { if (e.target.tagName === 'BUTTON') banner.style.display = 'none'; };
  }

  // ------ عمليات الرفع السريع ------
  function quickApply(kind, file) {
    var tag = document.querySelector('[data-zone="' + (kind === 'logo' ? 'logo' : kind === 'hero' ? 'hero' : 'gal') + '"]');
    if (tag) tag.classList.add('busy');
    return uploadImage(file).then(function (url) {
      if (kind === 'hero') return readJson('src/content/media.json').then(function (r) { r.data.heroImage = url; return writeJson('src/content/media.json', r.sha, r.data, 'تغيير صورة الواجهة'); }).then(function () { return url; });
      if (kind === 'logo') return readJson('src/content/settings.json').then(function (r) { r.data.logo_url = url; return writeJson('src/content/settings.json', r.sha, r.data, 'تغيير الشعار'); }).then(function () { return url; });
      return readJson('src/content/gallery.json').then(function (r) {
        r.data.images = r.data.images || [];
        r.data.images.unshift({ image_url: url, caption: { ar: '', fr: '', en: '' }, is_featured: false });
        return writeJson('src/content/gallery.json', r.sha, r.data, 'إضافة صورة للمعرض');
      }).then(function () { return url; });
    }).then(function (url) {
      if (tag) { tag.classList.remove('busy'); }
      thumbs[kind === 'gallery' ? 'gal' : kind] = url;
      renderHome(); deployBanner(); toast('✅ تم رفع الصورة ووضعها في الموقع');
    }).catch(function (err) {
      if (tag) tag.classList.remove('busy');
      toast(err.message === 'no-token' ? '⚠️ سجّل الدخول بحساب GitHub أولاً (الرفع السريع لا يعمل في الوضع المحلي)' : '⚠️ تعذّر الرفع: ' + err.message + ' — جرّب من قسم التعديل العادي');
    });
  }
  function pickFiles(multi, cb) {
    var i = document.createElement('input'); i.type = 'file'; i.accept = 'image/*'; i.multiple = !!multi;
    i.onchange = function () { if (i.files && i.files.length) cb(Array.prototype.slice.call(i.files)); };
    i.click();
  }
  function absUrl(u) { return !u ? '' : /^https?:/.test(u) ? u : SITE.replace(/\/$/, '') + u; }

  function loadThumbs() {
    if (!token()) return;
    readJson('src/content/media.json').then(function (r) {
      if (r.data.heroImage) thumbs.hero = r.data.heroImage;
      var b = (r.data.beforeAfter || [])[0]; if (b) thumbs.ba = b.after;
      renderHome();
    }).catch(function () {});
    readJson('src/content/settings.json').then(function (r) { thumbs.logo = r.data.logo_url; renderHome(); }).catch(function () {});
    readJson('src/content/gallery.json').then(function (r) { var f = (r.data.images || [])[0]; if (f) thumbs.gal = f.image_url; thumbs.galN = (r.data.images || []).length; renderHome(); }).catch(function () {});
    readJson('src/content/projects.json').then(function (r) { var c = (r.data.categories || [])[0]; if (c) thumbs.prog = c.image; renderHome(); }).catch(function () {});
  }

  function renderHome() {
    var el = document.getElementById('cei-home'); if (!el) return;
    var blocks = MAP.map(function (z) {
      var img = z.drop === 'logo' ? thumbs.logo : z.drop === 'hero' ? thumbs.hero : thumbs[z.thumbKey || ''];
      var th = img ? '<img src="' + absUrl(img) + '" alt="" onerror="this.style.display=\'none\'">' : '<span class="ph">' + z.ic + '</span>';
      var drop = z.drop ? '<div class="dz">⬇️ اسحب صورة هنا أو <u>اضغط لاختيارها</u> — تُوضع مباشرة في الموقع</div>' : '<div class="dz soft">اضغط للتعديل ‹</div>';
      return '<div class="blk' + (z.big ? ' big' : '') + (z.drop ? ' can-drop' : '') + '" data-zone="' + (z.drop === 'gallery' ? 'gal' : z.id) + '" data-go="' + z.go + '" data-drop="' + (z.drop || '') + '">' +
        '<div class="th">' + th + '</div><div class="tx"><b>' + z.t + '</b><small>' + z.s + '</small>' + drop + '</div></div>';
    }).join('');
    var pages = PAGES.map(function (p) {
      return '<div class="pg"><a href="' + p.go + '" data-close="1"><b>' + p.t + '</b><small>' + p.s + '</small></a><a class="add" href="' + p.add + '" data-close="1">＋ إضافة</a></div>';
    }).join('');
    el.innerHTML =
      '<div class="hm-top"><div><h1>👋 أهلاً بك في لوحة التحكم</h1><p>اضغط على أي جزء من الموقع لتعديله — أو اسحب صورة فوقه لتغييرها فوراً.</p></div>' +
      '<div class="hm-act"><a class="btn red" href="' + SITE + '" target="_blank" rel="noopener">👁 فتح الموقع</a><button class="btn dark" data-act="edit" type="button">فتح أدوات التحرير ›</button></div></div>' +
      '<div class="hm-quick"><button data-act="addgal" type="button">🖼️ أضف صوراً للمعرض<small>اختر عدة صور دفعة واحدة</small></button>' +
      '<a href="#/collections/news/new" data-close="1">📰 خبر جديد<small>بصورة ونص</small></a>' +
      '<a href="#/collections/activities/new" data-close="1">🎯 نشاط جديد<small>مشروع / فعالية</small></a>' +
      '<a href="#/collections/testimonials/new" data-close="1">💬 رأي جديد<small>صورة دائرية</small></a></div>' +
      '<h2>🗺️ خريطة الصفحة الرئيسية <small>(من الأعلى إلى الأسفل كما يراها الزائر)</small></h2>' +
      '<div class="hm-map">' + blocks + '</div>' +
      '<h2>📄 صفحات أخرى في الموقع</h2><div class="hm-pages">' + pages + '</div>' +
      '<div class="hm-tip">💡 كل تغيير يظهر في الموقع بعد حوالي دقيقة. ستظهر لك لافتة تعدّ الوقت وتفتح لك الموقع عند الجاهزية.<br>💡 الصور تُصغَّر تلقائياً — ارفع الصورة كما هي من الهاتف.<br>💡 للتغييرات من «أدوات التحرير»: لا شيء يتغير في الموقع إلا بعد الضغط على «نشر».</div>';
  }

  function openHome() { var h = document.getElementById('cei-home-wrap'); if (h) { h.classList.add('open'); renderHome(); loadThumbs(); } }
  function closeHome() { var h = document.getElementById('cei-home-wrap'); if (h) h.classList.remove('open'); }

  function initHome() {
    var wrap = document.createElement('div'); wrap.id = 'cei-home-wrap';
    wrap.innerHTML = '<div id="cei-home"></div>';
    document.body.appendChild(wrap);
    var fab = document.createElement('button'); fab.id = 'cei-home-btn'; fab.type = 'button'; fab.textContent = '🏠 الرئيسية'; fab.style.display = 'none';
    fab.onclick = openHome; document.body.appendChild(fab);

    wrap.addEventListener('click', function (e) {
      var t = e.target, act = t.closest && t.closest('[data-act]'), go = t.closest && t.closest('[data-go]'), cl = t.closest && t.closest('[data-close]');
      if (cl) { setTimeout(closeHome, 0); return; }
      if (act && act.dataset.act === 'edit') return closeHome();
      if (act && act.dataset.act === 'addgal') return pickFiles(true, function (fs) { fs.reduce(function (p, f) { return p.then(function () { return quickApply('gallery', f); }); }, Promise.resolve()); });
      if (go) {
        var d = go.dataset.drop;
        if (d) return pickFiles(d === 'gallery', function (fs) { fs.reduce(function (p, f) { return p.then(function () { return quickApply(d, f); }); }, Promise.resolve()); });
        location.hash = go.dataset.go; closeHome();
      }
    });
    // سحب وإفلات الصور على الأقسام
    ['dragenter', 'dragover'].forEach(function (n) { wrap.addEventListener(n, function (e) { var b = e.target.closest && e.target.closest('.can-drop'); if (b) { e.preventDefault(); b.classList.add('over'); } }); });
    wrap.addEventListener('dragleave', function (e) { var b = e.target.closest && e.target.closest('.can-drop'); if (b) b.classList.remove('over'); });
    wrap.addEventListener('drop', function (e) {
      var b = e.target.closest && e.target.closest('.can-drop'); if (!b) return;
      e.preventDefault(); b.classList.remove('over');
      var fs = Array.prototype.slice.call(e.dataTransfer.files || []).filter(function (f) { return /^image\//.test(f.type); });
      if (!fs.length) return toast('⚠️ هذا ليس ملف صورة');
      var kind = b.dataset.drop; if (kind !== 'gallery') fs = fs.slice(0, 1);
      fs.reduce(function (p, f) { return p.then(function () { return quickApply(kind, f); }); }, Promise.resolve());
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeHome(); });

    var auto = false;
    setInterval(function () {
      var logged = !!document.querySelector('[class*="SidebarContainer"]');
      fab.style.display = logged ? 'block' : 'none';
      if (logged && !auto) { auto = true; openHome(); }
    }, 500);

    if (window.CMS && CMS.registerEventListener) {
      var last = 0;
      ['postSave', 'postPublish'].forEach(function (n) {
        try { CMS.registerEventListener({ name: n, handler: function () { if (Date.now() - last > 3000) { last = Date.now(); deployBanner(); } } }); } catch (e) {}
      });
    }
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
    // Decap يعرّف window.CMS و window.h بعد تحميل السكربت
    var tries = 0, iv = setInterval(function () {
      if (window.CMS && window.h) { clearInterval(iv); initPreviews(); }
      else if (++tries > 100) clearInterval(iv);
    }, 100);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
