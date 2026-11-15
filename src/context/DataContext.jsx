import React from 'react';
import { getLocalizedContent } from '../utils/languageUtils';
import { DataContext } from './contexts';
import * as site from '../data/siteData';

// Version simple : toutes les données viennent de src/data/siteData.js
// (plus de base de données). Les listes sont triées/filtrées ici.
const withDefaults = (item) => ({ ...item, attendees: [], supporters: [] });

const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
const pinnedFirst = (a, b) => (b.is_pinned ? 1 : 0) - (a.is_pinned ? 1 : 0) || byDateDesc(a, b);

const news = [...site.news].map(withDefaults).sort(pinnedFirst);
const activities = [...site.activities].map(withDefaults).sort(pinnedFirst);

const value = {
    news,
    programs: activities.filter(a => a.category === 'program'),
    events: activities.filter(a => a.category === 'event'),
    projects: activities.filter(a => a.category === 'project'),
    projectCategories: site.projectCategories,
    testimonials: site.testimonials,
    partners: site.partners,
    galleryImages: site.galleryImages,
    getLocalizedContent,
    loading: false,
};

export const DataProvider = ({ children }) => (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
);
