import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import { LanguageContext } from './LanguageContext';

const SEO = {
    ar: {
        title: 'شباب الإحسان — جمعية خيرية بالقبة، الجزائر',
        description: 'جمعية شباب الإحسان، جمعية خيرية بالقبة (الجزائر العاصمة): قوافل الجنوب الكبير، سقيا، ملابس العيد، وجبة السحور وغيرها. تبرّع أو تطوّع معنا.',
    },
    fr: {
        title: 'Chabab El Ihssane — Association caritative à Kouba, Alger',
        description: "Chabab El Ihssane, association caritative de Kouba (Alger) : caravanes du Grand Sud, Siqaya (eau), vêtements de l'Aïd, repas du Suhoor… Faites un don ou devenez bénévole.",
    },
    en: {
        title: 'Chabab El Ihssane — Charity in Kouba, Algiers',
        description: 'Chabab El Ihssane is a charity based in Kouba, Algiers: Great South caravans, Siqaya (water), Eid clothes, Suhoor meals and more. Donate or volunteer with us.',
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ar');
    const t = translations[language];

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
        const seo = SEO[language] || SEO.ar;
        document.title = seo.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title);
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description);
        // We'll handle font classes in the component or global CSS based on lang attribute
        if (language !== 'ar') {
            document.body.classList.add('latin-font');
        } else {
            document.body.classList.remove('latin-font');
        }
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
