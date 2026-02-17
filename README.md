# Team Elsa & Jarvis Portfolio

A modern, responsive portfolio website showcasing projects developed by Team Elsa & Jarvis, including ElsaPerformance and AutonomousCodingAgent. The site serves as a central hub for project demos, GitHub repositories, and developer resources.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes (Dark/Light mode)
- **UI Components**: Shadcn/ui headless components
- **Data Source**: Local JSON files

## Project Structure

```
portfolio-app/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout (Navbar + Footer)
│   ├── portfolio/
│   │   ├── page.tsx                # Portfolio list page
│   │   └── [slug]/
│   │       └── page.tsx            # Project detail page (dynamic)
│   ├── resources/
│   │   └── page.tsx                # Resources page
│   └── not-found.tsx               # 404 page
├── components/
│   ├── ui/                         # Shared UI components (Button, Card, Badge)
│   ├── Navbar.tsx                  # Navigation bar with theme toggle
│   ├── Footer.tsx                  # Footer with social links
│   ├── ThemeToggle.tsx             # Sun/Moon theme toggle button
│   └── ProjectCard.tsx             # Reusable project card component
├── data/
│   ├── projects.json               # All project data
│   ├── resources.json              # Curated resources list
│   └── team.json                   # Team member info
└── types/
    └── index.ts                    # TypeScript type definitions
```

## Features

- **Home Page**: Hero section with CTA, team intro with member cards, featured projects grid
- **Portfolio Page**: Searchable and filterable project grid with categories (AI, Web, Tools)
- **Project Detail Page**: Full project info with screenshots, tech stack, GitHub and demo links
- **Resources Page**: Curated tools and resources categorized by type (AI Models, DevOps, Learning)
- **Dark/Light Mode**: System-aware with toggle button and localStorage persistence
- **Fully Responsive**: Mobile-first design with proper breakpoints (375px, 768px, 1280px+)

## Getting Started

### Quick Start

Run the setup and start script:

```bash
./init.sh
```

This will:
1. Check Node.js prerequisites
2. Initialize the Next.js project (if not already done)
3. Install all dependencies
4. Start the development server

### Manual Setup

```bash
# Navigate to the app directory
cd portfolio-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Access the App

- **Local**: http://localhost:3000
- **Portfolio**: http://localhost:3000/portfolio
- **Resources**: http://localhost:3000/resources

## Design Guidelines

- **Tone**: Professional, futuristic, clean
- **Primary Color**: Deep Blue / Indigo (AI intelligence aesthetic)
- **Accent Color**: Cyan or Teal (buttons and highlights)
- **Background**: White/Gray-50 (light) or Slate-900/950 (dark)
- **Typography**: Inter or Geist Sans

## Development Progress

Progress is tracked in `feature_list.json` with 229 test cases covering:
- 174 functional tests
- 55 style/visual tests
- 30 comprehensive end-to-end flows (10+ steps each)

Each feature starts as `"passes": false` and is marked `true` after implementation and verification.

See `claude-progress.txt` for the latest session progress notes.

## License

© Team Elsa & Jarvis. All rights reserved.
