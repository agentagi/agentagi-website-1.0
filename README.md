# AGI - AgentPad AI Agent Landing Page

> A modern, Gen Z crypto-native landing page for AGI, AgentPad's AI Agent Mascot.

![AGI](https://img.shields.io/badge/Built%20with-Vite%20%2B%20React%20%2B%20TypeScript-blue)
![Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)
![Framer Motion](https://img.shields.io/badge/Animated%20with-Framer%20Motion-ff0055)

## Features

- **Modern Tech Stack**: Vite + React 18 + TypeScript for blazing-fast development
- **Sleek Design**: Glass morphism cards, neon glows, and dark mode aesthetic
- **Smooth Animations**: Framer Motion for 60fps animations and transitions
- **Particle Effects**: Interactive particle background in hero section
- **Typewriter Effect**: Animated headline that types out on load
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards ready
- **Accessible**: Keyboard navigation and reduced motion support

## Sections

1. **Hero** - Particle background, animated AGI character, typewriter headline, dual CTAs
2. **About** - "Who Am I" - First-person introduction to AGI
3. **Mission** - "What I Do" - 5-card grid showcasing AGI's purpose
4. **Personality** - "My Vibe" - 3 personality modes with example tweets
5. **WhyFollow** - "What's In It For You" - Benefits of following AGI
6. **Connect** - "Where To Find Me" - Social platform cards with CTAs
7. **Footer** - Links, social icons, disclaimer

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and dev server |
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **tsParticles** | Particle effects |
| **React Type Animation** | Typewriter effect |
| **React Icons** | Icon library |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the repository**
```bash
cd agentpadagi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navigation
│   │   └── Footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with particles
│   │   ├── About.tsx           # About AGI section
│   │   ├── Mission.tsx         # Mission grid section
│   │   ├── Personality.tsx     # Personality modes
│   │   ├── WhyFollow.tsx       # Benefits section
│   │   └── Connect.tsx         # Social platforms
│   └── ui/
│       ├── GlassCard.tsx       # Reusable glass morphism card
│       ├── NeonButton.tsx      # CTA button component
│       ├── SectionTitle.tsx    # Section headers
│       └── AGICharacter.tsx    # Animated SVG character
├── utils/
│   └── constants.ts            # All content and configuration
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles & Tailwind
```

## Customization

### Update Content

Edit `src/utils/constants.ts` to update:
- Social media links
- Mission cards
- Personality modes and tweets
- Benefits list
- Hero section text

### Update Colors

Edit `tailwind.config.js` to customize:
- Neon accent colors
- Background colors
- Shadow effects
- Animations

### Update Styles

Edit `src/index.css` for:
- Glass morphism effects
- Neon glow styles
- Gradient text effects
- Custom utilities

## Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space Blue | `#0A0E27` | Background |
| Dark Card | `#1A1F3A` | Card backgrounds |
| Electric Blue | `#00D4FF` | Primary accent |
| Solana Purple | `#9945FF` | Secondary accent |
| Matrix Green | `#00FF41` | Success/highlights |

### Typography

- **Headers**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Mono**: System monospace (for code elements)

### Components

- **Glass Cards**: Backdrop blur with transparent backgrounds
- **Neon Buttons**: Glow effects on hover with color variants
- **Animated SVG**: Custom AGI character with floating animation

## Performance

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle Size: < 200KB (gzipped)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`

### Custom Server

1. Build: `npm run build`
2. Serve the `dist` folder with any static file server

## Environment Variables

Currently no environment variables are needed. Social links are configured in `src/utils/constants.ts`.

To add environment variables:
1. Create `.env` file
2. Add variables with `VITE_` prefix
3. Access via `import.meta.env.VITE_VARIABLE_NAME`

## Contributing

This is a landing page project. To make changes:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is built for AgentPad. All rights reserved.

## Credits

- **Design & Development**: Built with Vite, React, TypeScript, and Tailwind CSS
- **Animations**: Powered by Framer Motion
- **Particles**: Using tsParticles
- **Icons**: React Icons library
- **Fonts**: Google Fonts (Inter & Space Grotesk)

## Support

For issues or questions:
- Open an issue on GitHub
- Contact AgentPad team
- Check documentation at [docs.agentpad.xyz](https://docs.agentpad.xyz)

---

**Built with by the AgentPad team**

*Not financial advice. DYOR always.*
