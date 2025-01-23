export async function GET() {
  const pages = [
    '',                   // Home page
    'about',             
    'donate',
    'events',
    'get-help',
    'services/food-pantry',
    'volunteer',
    'report',
    'thank-you',
    'legal/privacy-policy',
    'legal/terms-of-service'
  ];

  // Base URL from environment or default
  const baseUrl = import.meta.env.SITE_URL || 'https://shelterinastorm.org';

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Return the sitemap with proper headers
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
} 