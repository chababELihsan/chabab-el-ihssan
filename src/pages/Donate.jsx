import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaHeart, FaUniversity } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const Donate = () => {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pb-12 md:pb-20 bg-brand-paper min-h-screen transition-colors duration-300"
        >
            <PageHeader title={t.donate_title} subtitle={t.donate_hero_desc} />
            <div className="container mx-auto px-4 pt-12">
                <div className="max-w-xl mx-auto">
                    {/* Bank Transfer */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-900 dark:border-blue-500 transition-colors duration-300">
                        <div className="text-blue-900 dark:text-blue-400 text-4xl mb-6 flex justify-center">
                            <FaUniversity />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">{t.bank_transfer}</h3>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <p className="flex justify-between border-b dark:border-gray-700 pb-2">
                                <span className="font-semibold">{t.bank_label}</span>
                                <span className="text-right">{t.bank_name_value}</span>
                            </p>
                            <p className="flex justify-between border-b dark:border-gray-700 pb-2">
                                <span className="font-semibold">{t.account_name_label}</span>
                                <span className="text-right">{t.account_name_value}</span>
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-center font-mono text-sm break-all dark:text-white">
                                {t.bank_details}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center bg-blue-50 dark:bg-gray-800 p-10 rounded-2xl max-w-4xl mx-auto transition-colors duration-300">
                    <FaHeart className="text-red-500 text-5xl mx-auto mb-6 animate-pulse" />
                    <h2 className="font-display text-3xl md:text-4xl text-[var(--brand-navy)] dark:text-white mb-4">{t.impact_title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        {t.impact_desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Donate;
