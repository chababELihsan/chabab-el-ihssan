// Vidéo d'accueil, avant/après, carte des réalisations, projets Sadaqa Jariya.
// Contenu éditable depuis /admin → src/content/media.json
import { media, withIds } from './content';

export const heroVideo = media.heroVideo || { src: '', youtubeId: '', poster: '' };
export const beforeAfterProjects = withIds(media.beforeAfter, 'ba');
export const achievementPlaces = withIds(media.achievementPlaces, 'place', (p) => p.name?.fr || p.name?.ar)
    .map((p) => ({ ...p, actions: p.actions || [] }));
export const sadaqaProjects = withIds(media.sadaqaProjects, 'sadaqa', (p) => p.icon);
export const heroImage = media.heroImage || 'https://chababelihssan.com/wp-content/uploads/2025/05/IMG_5154-scaled.jpg';
