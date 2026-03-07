# North Ledger Advisory

A modern, luxury fintech website for North Ledger Advisory - a boutique accounting and financial advisory firm.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 18+ 
- pnpm 10+

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

This builds the frontend to `dist/public/`

### Preview Production Build

```bash
pnpm preview
```

## Deployment to Vercel

This project is configured for deployment on Vercel.

### Automatic Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the configuration and deploy

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables (Optional)

If you want to use analytics, set these in Vercel's environment variables:

- `VITE_ANALYTICS_ENDPOINT` - Your Umami analytics endpoint URL
- `VITE_ANALYTICS_WEBSITE_ID` - Your Umami website ID

For Google Maps (if using the Map component):

- `VITE_FRONTEND_FORGE_API_KEY` - Google Maps API key
- `VITE_FRONTEND_FORGE_API_URL` - Forge API URL (optional, defaults to https://forge.butterfly-effect.dev)

### Build Configuration

Vercel is configured via `vercel.json`:
- Build command: `pnpm build`
- Output directory: `dist/public`
- Framework: Vite
- SPA routing: All routes rewrite to `index.html`

## Project Structure

```
.
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── ...
│   └── index.html
├── server/           # Express server (optional, not needed for Vercel)
├── shared/           # Shared constants and utilities
├── dist/             # Build output
└── vercel.json       # Vercel configuration
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark luxury fintech aesthetic
- ✅ Smooth animations and transitions
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Production ready

## License

MIT
