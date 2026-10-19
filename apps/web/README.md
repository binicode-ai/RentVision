# RentVision Web Frontend (`apps/web`)

The customer- and landlord-facing web application for the RentVision rental property platform.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Map Visualization**: [Leaflet](https://leafletjs.com/) for interactive map boundaries and radius-based property searches
- **360° Virtual Tours**: [Pannellum](https://pannellum.org/) for WebGL-based equirectangular panorama tours with room hotspot transitions

## Available Scripts

In the `apps/web` directory, you can run:

```powershell
# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

## Directory Layout

```text
apps/web/
├── src/
│   └── app/
│       ├── layout.tsx     # Root HTML layout and metadata
│       └── page.tsx       # Landing page entrypoint
├── next.config.ts         # Next.js runtime configuration
├── tsconfig.json          # TypeScript compiler options
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Frontend dependencies and scripts
└── README.md
```
