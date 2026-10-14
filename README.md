# Cricket Academy Website

A modern, responsive website for showcasing cricket academy information built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🏏 Academy home page with hero section
- 👥 Player profiles and statistics
- 🎯 Team management and details
- 🏆 Achievements and awards showcase
- 🎬 Match history and results
- 👨‍🏫 Coach profiles and qualifications
- 📸 Photo gallery
- 🏅 Tournament participation tracking
- 📧 Contact form
- 📱 Fully responsive design
- ⚡ SEO optimized
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: (PostgreSQL with Prisma recommended)
- **Deployment**: Vercel or Railway
- **API**: Next.js API Routes

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cricket-academy-web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cricket-academy-web/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── teams/              # Teams page
│   ├── players/            # Players page
│   ├── matches/            # Matches page
│   ├── coaches/            # Coaches page
│   ├── achievements/       # Achievements page
│   ├── tournaments/        # Tournaments page
│   ├── gallery/            # Photo gallery
│   ├── contact/            # Contact page
│   └── api/                # API routes
├── components/             # Reusable React components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Pages

- **Home** - Academy overview with hero section
- **About** - Academy history and mission
- **Teams** - List and details of academy teams
- **Players** - Player profiles with statistics
- **Matches** - Match history and results
- **Coaches** - Coach profiles and qualifications
- **Achievements** - Awards and accomplishments
- **Tournaments** - Tournament participation tracking
- **Gallery** - Photo gallery with categories
- **Contact** - Contact form for inquiries

## Building & Deployment

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

### Deploy to Railway:
1. Push code to GitHub
2. Connect Railway to GitHub
3. Set environment variables
4. Deploy

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## API Routes

- `GET /api/teams` - Get all teams
- `GET /api/players` - Get all players
- `GET /api/matches` - Get all matches
- `GET /api/coaches` - Get all coaches
- `GET /api/achievements` - Get achievements
- `POST /api/contact` - Submit contact form

## Development Tips

- Run linter: `npm run lint`
- Format code: `npm run format` (if configured)
- Type check: `npx tsc --noEmit`

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this project

## Support

For questions or issues, please contact: support@cricketacademy.com

## Roadmap

- [ ] Admin dashboard
- [ ] Player statistics and analytics
- [ ] Live match scoring
- [ ] Mobile app
- [ ] Video highlights integration
- [ ] Newsletter subscription
- [ ] Social media integration
