# Cricket Academy Website - Deployment Guide

## 📚 Complete Setup & Deployment Instructions

### Prerequisites
- Node.js 18+
- Git
- GitHub account
- Vercel or Railway account
- npm or yarn

---

## 🚀 Phase 1: Local Development Setup

### Step 1: Install Dependencies

```bash
# Navigate to project directory
cd cricket-academy-web

# Install dependencies
npm install

# Or if using yarn
yarn install
```

### Step 2: Setup Environment Variables

```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local with your configuration
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Run Development Server

```bash
npm run dev
# or
yarn dev

# Visit http://localhost:3000 in your browser
```

---

## 🔨 Phase 2: Development & Customization

### Customize Academy Information

Edit these files to add your academy details:

1. **Update Colors & Branding**
   - Edit `tailwind.config.js` to change primary/secondary colors
   - Update logo/favicon in `public/`

2. **Update Content**
   - Edit component files in `app/` for text, images, and data
   - Replace sample data with real academy data

3. **Add Real Data**
   - Replace hardcoded data in each page
   - Connect API routes to database (optional)

### Add Your Images

```bash
# Place images in public/images/
# Reference them in components like:
# <img src="/images/your-image.jpg" alt="Description" />
```

---

## ✅ Phase 3: Testing Locally

### Run Linter
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

### Test Build
```bash
npm run build
npm start
```

### Test in Production Mode
```bash
npm run build
npm start
# Visit http://localhost:3000
```

---

## 🌐 Phase 4: Deploy to Vercel (RECOMMENDED)

### Option A: Using Vercel Dashboard (Easiest)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub account

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cricket Academy Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cricket-academy-web.git
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

4. **Configure Project**
   - **Project Name**: cricket-academy-web
   - **Framework Preset**: Next.js
   - **Root Directory**: ./ (default)
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel will automatically build and deploy
   - Your site will be live at: `https://cricket-academy-web.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set production environment
# - Confirm settings

# Deploy to production
vercel --prod
```

---

## 🚂 Phase 5: Deploy to Railway (Alternative)

### Prerequisites
- Railway account: https://railway.app
- GitHub account

### Deployment Steps

1. **Push Code to GitHub** (same as Vercel)

2. **Connect Railway to GitHub**
   - Go to https://railway.app/dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect GitHub account
   - Select your repository

3. **Configure Railway Project**
   - **Environment Variables**: Add from `.env.example`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Port**: `3000`

4. **Deploy**
   - Railway will automatically deploy on pushes to main
   - Your site will be live at: `https://your-project.railway.app`

---

## 🏗️ Phase 6: Custom Domain Setup

### For Vercel
1. Go to Vercel Dashboard → Project Settings
2. Click "Domains"
3. Add your custom domain (e.g., cricketacademy.com)
4. Update DNS records as instructed
5. Wait for SSL certificate (usually 5-15 minutes)

### For Railway
1. Go to Railway Dashboard → Settings
2. Click "Domain"
3. Add your custom domain
4. Update DNS records as instructed
5. Enable custom domain

---

## 📝 Phase 7: Post-Deployment Configuration

### Setup Email Service (Optional but Recommended)

For contact form emails to work, set up one of these services:

#### Using Resend (Recommended for Next.js)

1. Sign up: https://resend.com
2. Get API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Update `.env.local`:
   ```
   RESEND_API_KEY=your_api_key
   ```
5. Update `/app/api/contact/route.ts` to send emails

#### Using SendGrid

1. Sign up: https://sendgrid.com
2. Get API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
4. Configure in API route

### Setup Analytics (Optional)

```bash
# Install Google Analytics (or similar)
npm install react-ga4

# Add to layout.tsx and enable tracking
```

---

## 🔄 Phase 8: Continuous Deployment

### Automatic Deployment

Your site automatically deploys when you push to `main` branch:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main

# Vercel/Railway automatically deploys!
```

### Manual Deployment

```bash
# Redeploy current commit
vercel --prod        # Vercel
railway deploy       # Railway (if CLI installed)
```

---

## 🛠️ Phase 9: Monitoring & Maintenance

### Check Deployment Status
- **Vercel**: https://vercel.com/dashboard
- **Railway**: https://railway.app/dashboard

### View Logs
- **Vercel**: Click project → "Deployments" → select deployment → "Logs"
- **Railway**: Click project → "Logs"

### Monitor Performance
- **Vercel Analytics**: https://vercel.com/analytics
- **Google Analytics**: (if configured)

---

## 📋 Pre-Launch Checklist

- [ ] All pages tested locally
- [ ] Images and content updated
- [ ] Links verified
- [ ] Mobile responsiveness checked
- [ ] Contact form working
- [ ] Analytics configured (optional)
- [ ] Email service configured (optional)
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Performance optimized
- [ ] SEO metadata updated
- [ ] Sitemap generated (auto in Next.js)
- [ ] robots.txt created (auto in Next.js)

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Page Not Loading
- Check browser console for errors
- View deployment logs
- Verify environment variables are set
- Check database connection (if using database)

### Contact Form Not Working
- Check browser network tab
- Verify API route exists
- Check email service configuration
- Review server logs

### Domain Not Resolving
- Verify DNS records updated
- Wait 24-48 hours for DNS propagation
- Check domain registrar settings
- Ensure CNAME/A records correct

---

## 📚 Useful Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

## ✨ Next Steps

1. **Customize Content**
   - Update all team, player, and achievement data
   - Add your academy's branding
   - Upload actual photos

2. **Add Database** (Optional)
   - Set up PostgreSQL on Supabase
   - Use Prisma ORM
   - Connect API routes to database

3. **Add Admin Dashboard** (Optional)
   - Build admin panel for content management
   - Create authentication system
   - Manage data from web UI

4. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Caching strategies

5. **SEO Optimization**
   - Add meta descriptions
   - Create sitemap
   - Add schema markup
   - Setup Google Search Console

---

## 🎉 Congratulations!

Your Cricket Academy website is now live! Share the link with your academy members, students, and friends.

For questions or issues, refer to the documentation or contact support.

**Happy cricket! 🏏**
