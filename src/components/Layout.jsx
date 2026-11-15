import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Toaster } from 'react-hot-toast';

import { useLanguage } from '../context/LanguageContext';

const Layout = () => {
    const { language } = useLanguage();
    const skip = { ar: 'انتقل إلى المحتوى', fr: 'Aller au contenu', en: 'Skip to content' }[language];

    return (
        <div
            className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col ${language === 'ar' ? 'font-arabic' : ''}`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
            <a href="#main-content" className="skip-link">{skip}</a>
            <Header />
            <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col w-full focus:outline-none">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Layout;
