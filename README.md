# Investment Calendar 2025

[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen)](https://github.com/qstrux/investment_calendar_data.md)
[![Build](https://img.shields.io/badge/build-passing-success)](https://github.com/qstrux/investment_calendar_data.md)
[![License](https://img.shields.io/badge/license-proprietary-blue)](https://github.com/qstrux/investment_calendar_data.md)

A professional investment calendar showcasing key financial events including FOMC meetings, economic data releases, and tech earnings reports for 2025.

## 🌐 Live Demo

🚀 **[View Live Application](https://project-cd4688b0.pages.dev)** ← Click to see the live site!

**Deployment URLs:**
- **Production**: https://project-cd4688b0.pages.dev
- **Latest Deploy**: https://368032c0.project-cd4688b0.pages.dev

✅ Deployed successfully on Cloudflare Pages

## Features

- 📅 Interactive monthly calendar view
- 💼 FOMC meeting dates and insights
- 📊 Economic data release tracking (CPI, PPI, Non-farm Payrolls)
- 💻 Tech company earnings reports (Apple, Microsoft, Tesla, NVIDIA)
- 📥 Calendar export functionality (Google, Apple, Outlook)
- 🔍 Event search and filtering
- 📱 Responsive design for all devices
- 🎨 Premium black and gold design theme

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Wouter (routing)
- Radix UI components
- date-fns

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qstrux/investment_calendar_data.md.git
cd investment_calendar_data.md
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5000` to view the app.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

This project is ready for deployment to multiple platforms. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

**Cloudflare Pages (Recommended)**
1. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Connect this GitHub repository
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

**Alternative Platforms**
- [Vercel](https://vercel.com) - One-click deploy
- [Netlify](https://netlify.com) - Automatic setup

For complete deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   ├── lib/            # Utility functions and data
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## License

This project is proprietary and confidential.

## Author

Jenna Ryan, CFA  
Alpha Wealth Capital  
StreamAlphaX
