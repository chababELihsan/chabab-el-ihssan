import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../context/LanguageContext';
import { achievementPlaces } from '../data/media';
import { getLocalizedContent } from '../utils/languageUtils';
import SectionHeading from './SectionHeading';

const L = {
    ar: { eyebrow: 'حضورنا في الميدان', title: 'خريطة إنجازاتنا', subtitle: 'الولايات التي وصلتها حملاتنا وقوافلنا.', note: 'بتوفيق من الله وفقنا لـ 25 قافلة نحو الولايات المعلَّمة على الخريطة.' },
    fr: { eyebrow: 'Notre présence sur le terrain', title: 'Carte de nos réalisations', subtitle: 'Les wilayas atteintes par nos campagnes et nos caravanes.', note: 'Par la grâce de Dieu, nous avons réalisé 25 caravanes vers les wilayas indiquées sur la carte.' },
    en: { eyebrow: 'Our presence on the ground', title: 'Map of our achievements', subtitle: 'The provinces reached by our campaigns and caravans.', note: 'By the grace of God, we completed 25 caravans to the provinces marked on the map.' },
};

const ALGERIA_CENTER = [28.2, 2.6];

const AchievementsMap = () => {
    const { language } = useLanguage();
    const lb = L[language] || L.en;
    const dir = language === 'ar' ? 'rtl' : 'ltr';

    return (
        <section id="achievements-map" dir={dir} className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <SectionHeading eyebrow={lb.eyebrow} title={lb.title} subtitle={lb.subtitle} />

                <div dir="ltr" className="max-w-5xl mx-auto h-[420px] md:h-[620px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md relative z-0">
                    <MapContainer center={ALGERIA_CENTER} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {achievementPlaces.map((p) => (
                            <CircleMarker
                                key={p.id}
                                center={[p.lat, p.lng]}
                                radius={9}
                                pathOptions={{ color: '#ffffff', weight: 3, fillColor: '#c8102e', fillOpacity: 0.95 }}
                            >
                                <Tooltip permanent direction={p.label_side === 'left' ? 'left' : 'right'} offset={[p.label_side === 'left' ? -6 : 6, 0]}>
                                    <span className="font-arabic font-bold">{getLocalizedContent(p.name, language)}</span>
                                </Tooltip>
                            </CircleMarker>
                        ))}
                    </MapContainer>
                </div>

                <p className="text-center font-arabic text-lg md:text-xl font-bold text-[var(--brand-navy)] dark:text-white mt-8 max-w-3xl mx-auto leading-relaxed">
                    {lb.note}
                </p>
            </div>
        </section>
    );
};

export default AchievementsMap;
