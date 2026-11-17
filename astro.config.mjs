// @ts-check
import { defineConfig } from 'astro/config';

/*
 * Voorvertoning op GitHub Pages (https://dimahodonovich22.github.io/dd-contracting/).
 * Enkel bij een build met GITHUB_PAGES=true; lokaal blijft de site op "/".
 * TODO: `site` instellen op het definitieve domein van DD Contracting zodra dat bevestigd is
 * (nodig voor canonical-URL's, Open Graph en een sitemap).
 */
const pages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  ...(pages ? { site: 'https://dimahodonovich22.github.io', base: '/dd-contracting' } : {}),
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
