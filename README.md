# Shelter in a Storm

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-id/deploy-status)](https://app.netlify.com/sites/shelter-in-a-storm/deploys)

Providing emergency assistance and support to those in need in our Lake Ozark community.

## 🏠 About

Shelter in a Storm is a 24/7 emergency assistance initiative by Lake Ozark Christian Church. Our mission is to share the love of Jesus Christ by providing emergency basic needs for our neighbors in Miller and Camden counties through loving donations.

## 🌟 Key Features

- **24/7 Emergency Food Pantry**: Located under our portico, following the principle "Take what you need, leave some for others"
- **Emergency Assistance**: Support for low-income individuals with housing and transportation needs
- **Community Support**: Serving Miller and Camden counties with essential services

## 📍 Location

**Pantry of Blessings**
1560 Bagnell Dam Blvd.
Lake Ozark, MO 65049

Located on the west side of Lake Ozark Christian Church

## 🤝 Community Partners

- Dierbergs
- HyVee
- Smart Postal Center
- Target
- UPS Store
- Woods
- Hope House of Miller County

## 💻 Technical Details

### Tech Stack
- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://netlify.com) for hosting and deployment

### Project Structure
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── config/
├── package.json
└── netlify.toml    # Netlify configuration
```

### Development Commands

| Command           | Action                                      |
| :--------------- | :------------------------------------------ |
| `npm install`    | Installs dependencies                       |
| `npm run dev`    | Starts local dev server at `localhost:4321` |
| `npm run build`  | Build production site to `./dist/`          |
| `npm run preview`| Preview build locally                       |

### Deployment

This site is automatically deployed to Netlify. Every push to the main branch triggers a new deployment.

#### Manual Deployment
1. Install Netlify CLI:
```bash
npm install netlify-cli -g
```

2. Connect to your Netlify site:
```bash
netlify link
```

3. Deploy:
```bash
netlify deploy
```

#### Environment Variables
Required environment variables in Netlify:
- `SITE_URL`: Production URL of the site
- Add any other environment variables your site needs

## 📞 Contact

- **Emergency Assistance**: (573) 365-3366
- **Hours**: 24/7 for emergency food assistance

## 🛠️ Development

Developed and maintained by [PixelPulse Creations, LLC](https://benji.services/)

For bug reports or issues, please visit our [report page](/report)
