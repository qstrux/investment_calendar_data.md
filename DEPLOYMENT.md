# Deployment Guide - Investment Calendar 2025

This document provides step-by-step instructions for deploying the Investment Calendar application.

## ✅ Project Status

- ✅ Complete project restructure
- ✅ All dependencies installed
- ✅ Production build tested and working
- ✅ Git repository configured
- ✅ Pull Request created: https://github.com/qstrux/investment_calendar_data.md/pull/1
- ✅ Ready for deployment

## 🚀 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

Cloudflare Pages offers excellent performance, global CDN, and is free for most use cases.

#### Steps:

1. **Login to Cloudflare**
   - Visit: https://dash.cloudflare.com/
   - Sign in with your account

2. **Create New Pages Project**
   - Go to "Workers & Pages"
   - Click "Create application"
   - Choose "Pages"
   - Click "Connect to Git"

3. **Connect GitHub Repository**
   - Select "GitHub" as the Git provider
   - Authorize Cloudflare to access your repositories
   - Select repository: `qstrux/investment_calendar_data.md`
   - Choose branch: `main` (after merging PR) or `genspark_ai_developer`

4. **Configure Build Settings**
   ```
   Framework preset: None (or Vite)
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

5. **Environment Variables** (Optional)
   - No environment variables are required for basic deployment
   - If you want to add analytics, add:
     - `VITE_ANALYTICS_ENDPOINT`
     - `VITE_ANALYTICS_WEBSITE_ID`

6. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-5 minutes for the build to complete
   - Your site will be live at: `https://investment-calendar-2025.pages.dev`

7. **Custom Domain** (Optional)
   - In Cloudflare Pages settings, go to "Custom domains"
   - Add your domain and follow the DNS setup instructions

#### Automatic Deployments

Once set up, Cloudflare Pages will automatically:
- Deploy every push to the main branch
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

---

### Option 2: Vercel

Vercel automatically detects Vite projects and configures everything.

#### Steps:

1. **Login to Vercel**
   - Visit: https://vercel.com/
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import `qstrux/investment_calendar_data.md`

3. **Configure Project**
   - Framework Preset: Vite (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at: `https://investment-calendar-2025.vercel.app`

---

### Option 3: Netlify

Netlify provides similar functionality to Vercel.

#### Steps:

1. **Login to Netlify**
   - Visit: https://www.netlify.com/
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `qstrux/investment_calendar_data.md`

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `https://investment-calendar-2025.netlify.app`

---

## 📋 Pre-Deployment Checklist

- [x] All source code committed to Git
- [x] Pull Request created and reviewed
- [x] Build successfully completes locally (`npm run build`)
- [x] All dependencies in package.json
- [x] TypeScript compiles without errors
- [x] Proper directory structure in place

## 🔧 Build Configuration

### Build Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run typecheck

# Production build
npm run build

# Preview production build
npm run preview
```

### Build Output
- Output directory: `dist/`
- Entry point: `dist/index.html`
- Assets: `dist/assets/`

## 🌐 Expected Deployment URLs

After deployment, your site will be accessible at:

- **Cloudflare Pages**: `https://investment-calendar-2025.pages.dev`
- **Vercel**: `https://investment-calendar-2025.vercel.app`
- **Netlify**: `https://investment-calendar-2025.netlify.app`

You can also configure custom domains through each platform's settings.

## 📊 Performance

The built application is optimized for:
- Fast initial load (< 2s on 3G)
- Code splitting for optimal bundle sizes
- Tree shaking to remove unused code
- Minified and compressed assets
- CDN distribution (when using Cloudflare/Vercel/Netlify)

## 🔒 Security

- No sensitive data in frontend code
- All API calls (if any) should use environment variables
- HTTPS enforced on all platforms
- CSP headers can be configured in platform settings

## 📱 Device Support

The application is fully responsive and supports:
- Desktop (1024px+)
- Tablet (640px - 1023px)
- Mobile (< 640px)
- Print media

## 🐛 Troubleshooting

### Build Fails

If the build fails:
1. Check Node.js version (requires 18+)
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
4. Check for TypeScript errors: `npm run typecheck`

### Page Shows Error

If deployed page shows errors:
1. Check browser console for errors
2. Verify all assets are loaded correctly
3. Check platform logs for deployment errors
4. Ensure build output directory is set to `dist`

### Styles Not Loading

If styles don't appear:
1. Check that Tailwind CSS is compiled correctly
2. Verify postcss.config.js exists
3. Check that index.css is imported in main.tsx

## 📞 Support

For deployment issues:
- Cloudflare: https://developers.cloudflare.com/pages/
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/

## 🎉 Post-Deployment

After successful deployment:
1. Test all features on the live site
2. Check calendar functionality
3. Test export features
4. Verify responsive design on mobile
5. Check print layout
6. Test all interactive elements
7. Share the URL with stakeholders

---

**Current Status**: Ready for deployment ✅

**Pull Request**: https://github.com/qstrux/investment_calendar_data.md/pull/1

**Next Steps**: 
1. Merge the PR to main branch
2. Connect GitHub repository to your chosen deployment platform
3. Configure build settings
4. Deploy!
