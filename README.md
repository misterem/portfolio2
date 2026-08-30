# Portfolio V2

## Description
My professional portfolio website, designed to showcase my software development projects, technical skills, and professional experience. The site is built for high performance and optimal SEO using a modern static site generation framework.

## Technical Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Components**: React / Astro Components
- **Deployment**: Netlify
- **Backend Services**: Supabase (where applicable for data persistence)

## Key Features
- **Project Showcase**: A curated gallery of technical projects with detailed descriptions and links to source code.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing experiences.
- **Performance Optimized**: Leveraging Astro’s "Islands" architecture to minimize JavaScript delivery and maximize load speeds.
- **Dynamic Content**: Integration with markdown or a headless CMS for efficient project and blog management.

## Repository Structure
- `/src/pages/`: Contains the routing logic and page templates.
- `/src/components/`: Reusable UI components built with Astro and React.
- `/src/layouts/`: Core page wrappers for consistent branding and structure.
- `/public/`: Static assets including images, fonts, and documents.
- `astro.config.mjs`: Project configuration and integration settings.

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/misterem/portfolio2.git
   cd portfolio2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the local development server:
```bash
npm run dev
```

### Build
To generate a production-ready static build:
```bash
npm run build
```

## Deployment
The project is configured for automated deployment via Netlify. Every commit to the `main` branch triggers a new build and deployment cycle.
