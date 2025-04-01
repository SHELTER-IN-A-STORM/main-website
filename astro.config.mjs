// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://shelterinastorm.org',
  integrations: [
    tailwind(),
    sentry({
      dsn: "https://c8ec12480f7c8b87809f74bb9d180976@o4509076918239232.ingest.us.sentry.io/4509076919549952",
      replaysSessionSampleRate: 0.2,
      tracesSampleRate: 0,
      replaysOnErrorSampleRate: 1.0,
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    })
  ],
  redirects: {
    '/admin/mail': 'https://glacier.mxrouting.net/roundcube/'
  }
});