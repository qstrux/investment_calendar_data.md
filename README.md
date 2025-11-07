# Investment Calendar 2025

A professional investment calendar showcasing key financial events including FOMC meetings, economic data releases, and tech earnings reports for 2025.

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

## Deployment

This project can be deployed to:
- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting service

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy!

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
