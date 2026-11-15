# Changelog

## v9.0.0
- Ajout de la interface d'administration `/admin` (Decap CMS) : tout le contenu est maintenant dans `src/content/*.json`.
- Chiffres « Impact », campagne en vedette, coordonnées et liens sociaux éditables sans toucher au code.
- Nouveau bloc `SocialFeed` : fil Facebook (Page Plugin) + grille Instagram (flux JSON, cache 6 h, repli manuel).
- SEO : title/description par langue, Open Graph, JSON-LD NGO, sitemap.xml + robots.txt générés au build.
- Performance : polices via <link> + preconnect, en-têtes de cache/sécurité Netlify, images inutilisées supprimées.
- Accessibilité : lien d'évitement, focus visible, prefers-reduced-motion.
- Correctif : logo/photo d'une autre association (AABV) remplacés ; `lang`/`dir` par défaut corrigés (ar/rtl).

## v8
Version fournie.
