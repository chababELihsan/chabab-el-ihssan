import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import settings from '../data/settings';

const L = {
    ar: { donate: 'تبرّع الآن', wa: 'واتساب' },
    fr: { donate: 'Faire un don', wa: 'WhatsApp' },
    en: { donate: 'Donate now', wa: 'WhatsApp' },
};

// Barre fixe en bas de l'écran — mobile uniquement. Cachée sur la page /donate elle-même.
const DonateBar = () => {
    const { language } = useLanguage();
    const visible = useLocation().pathname !== '/donate';
    const lb = L[language] || L.ar;
    const wa = settings.whatsapp ? `https://wa.me/${String(settings.whatsapp).replace(/\D/g, '')}` : '';

    if (!visible) return null;

    return (
        <div
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-t border-gray-200 dark:border-gray-700 px-3 pt-2 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
            style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
        >
            <div className="flex gap-2">
                <Link
                    to="/donate"
                    className="flex-1 min-h-[52px] rounded-xl bg-[var(--brand-red)] hover:brightness-110 text-white text-lg font-bold flex items-center justify-center gap-2 transition active:scale-95"
                >
                    <FaHeart /> {lb.donate}
                </Link>
                {wa && (
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={lb.wa}
                        className="min-h-[52px] min-w-[52px] px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white text-2xl flex items-center justify-center transition active:scale-95"
                    >
                        <FaWhatsapp />
                    </a>
                )}
            </div>
        </div>
    );
};

export default DonateBar;
