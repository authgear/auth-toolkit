# Auth Toolkit Landing Page

Auth Developer Mini-Toolkit
In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Perfect for authentication development and testing.

## Local Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

- **Development**: `pnpm dev`
- **Build**: `pnpm build`
- **Start Production**: `pnpm start`
- **Lint**: `pnpm lint`

## Project Structure

```
auth-toolkit/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # Reusable UI components
│   └── ui/             # Base UI components
├── data/               # Static data files
├── lib/                # Utility functions
└── public/             # Static assets
```

## Deployment

### GitHub Pages

This project is configured for static export and GitHub Pages deployment:

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy to GitHub Pages**
   - Push to your repository
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions" or "Deploy from a branch"
   - The `out/` directory contains the static files


## Adding New Tools

Edit `data/tools.json` to add new authentication tools:

```json
{
  "title": "Tool Name",
  "description": "Tool description",
  "url": "https://tool-url.com",
  "icon": "IconName"
}
```