# Shelter in a Storm - Technical Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://app.netlify.com/sites/shelter-in-a-storm/deploys)

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Netlify](https://netlify.com) - Hosting & Deployment

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/         # Site configuration
│   ├── content/        # Content collections (events)
│   ├── layouts/        # Page layouts
│   └── pages/          # Page components
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── netlify.toml        # Netlify configuration
```

## ⚙️ Common Configuration Tasks

### Site Configuration

The main site configuration is located in `src/config/site.ts`. Here you can modify:

- Site metadata (title, description, etc.)
- Theme colors and styling
- Contact information
- Mission statement and values
- Partner information
- Team members

Example:
```typescript
export const siteConfig = {
    name: "Your Site Name",
    description: "Your site description",
    theme: {
        colors: {
            primary: {
                DEFAULT: '#666ed8',
            }
        }
    }
}
```

### Adding New Events

1. Create a new markdown file in `src/content/events/`
2. Follow the event schema defined in `src/content/config.ts`:

```typescript
{
    title: "Event Title",
    description: "Event Description",
    date: new Date("2024-01-20"),
    image: "image-url",
    status: "upcoming", // 'upcoming' | 'ongoing' | 'past'
    location: "Event Location",
    time: "6:00 PM",
    registrationUrl: "optional-registration-url", // url to register for the event or external link
    featured: true, // show on the homepage
    donation: {
        enabled: true,
        title: "Donation Title",
        description: "Donation Description"
    },
    showPartners: true // show partners on the event page 
}
```

### Styling Customization

1. Global styles: Modify `tailwind.config.mjs`
2. Component-specific styles: Edit the respective component files in `src/components/`

Example tailwind customization:
```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#your-color',
                    light: '#light-variant',
                    dark: '#dark-variant',
                }
            }
        }
    }
}
```

### Environment Variables

Required in Netlify deployment:
- `SITE_URL`: Production URL of the site
- `API_KEY`: API key for admin functionality 
- `API_URL`: Backend API URL 

Local development:
1. Create `.env` file in project root
2. Add required variables:
```bash
SITE_URL=http://localhost:4321
API_KEY=your-api-key
API_URL=your-api-url
```

### Deployment

Automatic deployment via Netlify:
1. Push to main branch
2. Netlify automatically builds and deploys

Manual deployment:
```bash
# Install Netlify CLI
npm install netlify-cli -g

# Link to your Netlify site
netlify link

# Deploy
netlify deploy
```

## 📝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 🛟 Support

For technical issues:
1. Check the troubleshooting guide above
2. Search existing GitHub issues
3. Create a new issue if needed