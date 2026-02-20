# diegosalazar.dev — Personal Portfolio & Admin CMS

Live at **[diegosalazar.dev](https://diegosalazar.dev)**

A fully custom portfolio website with an integrated admin dashboard, built from scratch to showcase real-world projects, skills, and professional experience. This is not a template — every page, component, and feature was designed and implemented by hand.

---

## Overview

This project serves as both a professional portfolio and a content management system. The public-facing site presents projects, technical skills, work experience, and a contact form, while the admin dashboard provides full CRUD capabilities to manage portfolio content without touching code.

### Key Highlights

- **Server-side rendered** pages with dynamic metadata and SEO optimization
- **Admin CMS** with authentication, project management, and tag/category system
- **Contact form** with server-side validation, honeypot spam protection, email notifications via Resend, and database persistence
- **Dynamic portfolio** with filterable tags, individual project case study pages, and screenshot galleries
- **Framer Motion animations** throughout the UI for a polished experience
- **Responsive design** optimized for all screen sizes
- **Dynamic sitemap & robots.txt** generation for SEO
- **Vercel Analytics & Google Analytics** integration

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js (App Router, React, Server Components, Server Actions) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui (New York style) |
| **Database** | PostgreSQL via Prisma ORM |
| **Authentication** | NextAuth.js (JWT strategy, Credentials provider) |
| **Email** | Resend + React Email |
| **Animations** | Motion (Framer Motion) |
| **Forms** | React Hook Form + Zod validation |
| **UI Components** | shadcn/ui, Lucide icons |
| **Analytics** | Vercel Analytics, Google Analytics |
| **Images** | Supabase Storage (remote), Next.js Image optimization |
| **Tables** | TanStack Table |
| **Hosting** | Vercel |

---

## Project Structure

```
app/
├── page.tsx                    # Home — Hero, featured projects, skills
├── about/                      # About — Education, experience, gallery, skills
├── portfolio/                  # Portfolio listing with tag filtering
│   └── [slug]/                 # Individual project case study pages
├── contact/                    # Contact form with email & DB persistence
├── admin/
│   ├── login/                  # Admin authentication
│   └── (dashboard)/            # Protected admin area
│       ├── projects/           # CRUD for projects (create, edit, import)
│       └── tags/               # CRUD for tags/categories
├── api/auth/                   # NextAuth API routes
├── robots.ts                   # Dynamic robots.txt
└── sitemap.ts                  # Dynamic sitemap from DB

components/                     # Shared UI components (Header, Footer, Cards)
├── ui/                         # shadcn/ui primitives
emails/                         # React Email templates
lib/                            # Utilities, auth config, Prisma client, validators
prisma/                         # Schema & migrations
scripts/                        # CLI utilities (admin user creation)
data/                           # Static data (skills, experience, highlights)
types/                          # Shared TypeScript types
```

---

## Features

### Public Site

- **Home** — Hero section, featured projects carousel, and skills overview
- **About** — Professional background, education timeline, technical skills breakdown, work experience, and photo gallery
- **Portfolio** — Filterable project grid using tag categories (tech, service, tool, platform). Each project links to a detailed case study page with:
  - Project overview, goals, and challenges
  - Tech stack breakdown by category
  - Design decisions and what was built
  - Role description and team details
  - Screenshot gallery with lightbox
  - Navigation between projects
- **Contact** — Form with validation, honeypot anti-spam, Resend email delivery, and PostgreSQL message storage

### Admin Dashboard

- JWT-based authentication with role-based access control
- **Project Management** — Full CRUD with rich fields: title, slug, description, tech stack (JSON), screenshots, design decisions, links, status, and ordering
- **Tag Management** — Create and manage tags with kind classification (`tech`, `service`, `tool`, `platform`, `meta`) and filterable/preview flags
- **Project Import** — Bulk import capability for projects
- Sidebar navigation with responsive layout

### SEO & Performance

- Per-page metadata with Open Graph and Twitter Card tags
- Dynamic sitemap generated from the database
- Robots.txt with admin/API exclusions
- Canonical URLs on all pages
- Next.js Image optimization with remote pattern support
- Google-friendly structured data

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **PostgreSQL** database (local or hosted — e.g., Supabase, Neon, Railway)
- **npm** (or your preferred package manager)

### 1. Clone & Install

```bash
git clone https://github.com/dsalazar-dev/personal.git
cd personal
npm install
```

### 2. Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"        # Used by Prisma Client (pooled connection recommended)
DIRECT_URL="postgresql://user:password@host:5432/database"          # Used by Prisma Migrate (direct connection)

# NextAuth
AUTH_SECRET="your-secret-key"       # Run: npx auth secret
AUTH_URL="http://localhost:3000"

# Resend (Contact Form Emails)
RESEND_API_KEY="re_xxxxxxxxxxxx"
RESEND_ADMIN_EMAIL="your@email.com"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

> **Tip:** Generate a secure `AUTH_SECRET` by running `npx auth secret`.

### 3. Database Setup

```bash
# Run migrations to create all tables
npx prisma migrate deploy

# Generate the Prisma client
npx prisma generate
```

### 4. Create an Admin User

```bash
npm run create-admin
```

This interactive CLI script will prompt you for a name, email, and password.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.  
Access the admin dashboard at [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate Prisma client & build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run create-admin` | Create an admin user via interactive CLI |

---

## Database Schema

The application uses the following data models:

- **Project** — Portfolio projects with rich metadata (description, tech stack, screenshots, design decisions, goals, challenges, results)
- **Screenshot** — Ordered images associated with projects
- **Tag** — Categorized labels (`tech`, `service`, `tool`, `platform`, `meta`) with filterable/preview flags
- **ProjectTag** — Many-to-many relationship between projects and tags
- **ContactMessage** — Stored contact form submissions
- **User** — Admin users with role-based access (`ADMIN`, `USER`)

---

## Deployment

This project is optimized for **Vercel**:

1. Connect the repository to [Vercel](https://vercel.com)
2. Set all environment variables in the Vercel dashboard
3. Prisma client is auto-generated during the build step (`npx prisma generate && next build`)
4. Run `npx prisma migrate deploy` in production to apply migrations

For other platforms, ensure the build command runs `npx prisma generate` before `next build`, and that your PostgreSQL database is accessible from the deployment environment.

---

## Author

**Diego Salazar** — Full-Stack Architect with 10+ years of experience building SaaS platforms, AI-driven systems, and scalable web applications.

- Website: [diegosalazar.dev](https://diegosalazar.dev)

---

## License

This project is open source for reference and learning purposes. Feel free to explore the code, but please don't use it to directly replicate the site as your own portfolio.
