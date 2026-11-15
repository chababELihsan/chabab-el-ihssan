import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { achievementPlaces } from '../data/media';
import { getLocalizedContent } from '../utils/languageUtils';
import SectionHeading from './SectionHeading';

const L = {
    ar: { eyebrow: 'حضورنا في الميدان', title: 'خريطة إنجازاتنا', subtitle: 'الولايات التي وصلتها حملاتنا وقوافلنا.', count: 'ولايات' },
    fr: { eyebrow: 'Notre présence sur le terrain', title: 'Carte de nos réalisations', subtitle: 'Les wilayas atteintes par nos campagnes et nos caravanes.', count: 'wilayas' },
    en: { eyebrow: 'Our presence on the ground', title: 'Map of our achievements', subtitle: 'The provinces reached by our campaigns and caravans.', count: 'provinces' },
};

const ALGERIA_CENTER = [28.2, 2.6];

// Déplace la carte vers la wilaya choisie dans la liste
const FlyTo = ({ target }) => {
    const map = useMap();
    useEffect(() => {
        if (target) map.flyTo([target.lat, target.lng], 7, { duration: 1.2 });
        else map.flyTo(ALGERIA_CENTER, 5, { duration: 1 });
    }, [target, map]);
    return null;
};

const AchievementsMap = () => {
    const { language } = useLanguage();
    const lb = L[language] || L.en;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    const [activeId, setActiveId] = useState(null);
    const active = achievementPlaces.find((p) => p.id === activeId) || null;

    return (
        <section id="achievements-map" dir={dir} className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <SectionHeading eyebrow={lb.eyebrow} title={lb.title} subtitle={lb.subtitle} />

                <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* List */}
                    <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-3">
                        <p className="font-arabic text-sm text-gray-500 dark:text-gray-400">
                            {achievementPlaces.length} {lb.count}
                        </p>
                        {achievementPlaces.map((p) => {
                            const isActive = p.id === activeId;
                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setActiveId(isActive ? null : p.id)}
                                    className={`text-start rounded-lg border p-4 transition font-arabic ${isActive ? 'border-[var(--brand-red)] bg-white dark:bg-gray-900 shadow-md' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-[var(--brand-navy)]'}`}
                                >
                                    <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                                        <FaMapMarkerAlt className="text-[var(--brand-red)]" />
                                        {getLocalizedContent(p.name, language)}
                                    </div>
                                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 list-disc ps-5 space-y-1">
                                        {p.actions.map((a, i) => <li key={i}>{getLocalizedContent(a, language)}</li>)}
                                    </ul>
                                </button>
                            );
                        })}
                    </div>

                    {/* Map */}
                    <div dir="ltr" className="lg:col-span-2 order-1 lg:order-2 h-[340px] md:h-[460px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md relative z-0">
                        <MapContainer center={ALGERIA_CENTER} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <FlyTo target={active} />
                            {achievementPlaces.map((p) => (
                                <CircleMarker
                                    key={p.id}
                                    center={[p.lat, p.lng]}
                                    radius={p.id === activeId ? 16 : 12}
                                    pathOptions={{ color: '#ffffff', weight: 3, fillColor: '#c8102e', fillOpacity: 0.95 }}
                                    eventHandlers={{ click: () => setActiveId(p.id) }}
                                >
                                    <Popup>
                                        <div dir={dir} className="font-arabic">
                                            <strong>{getLocalizedContent(p.name, language)}</strong>
                                            <ul className="mt-1 ps-4 list-disc text-sm">
                                                {p.actions.map((a, i) => <li key={i}>{getLocalizedContent(a, language)}</li>)}
                                            </ul>
                                        </div>
                                    </Popup>
                                </CircleMarker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsMap;
