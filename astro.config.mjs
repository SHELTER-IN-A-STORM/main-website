// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://shelterinastorm.org',
  integrations: [tailwind()],
  redirects: {
    '/admin/mail': 'https://glacier.mxrouting.net/roundcube/'
  }
});
