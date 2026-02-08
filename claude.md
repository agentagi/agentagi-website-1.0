# AGI - AgentPad AI Agent Landing Page v1.0

> A futuristic, friendly landing page for AGI, AgentPad's AI agent mascot! 💙

![Built with Vite + React + TypeScript](https://img.shields.io/badge/Built%20with-Vite%20%2B%20React%20%2B%20TypeScript-blue)
![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)
![Animated with Framer Motion](https://img.shields.io/badge/Animated%20with-Framer%20Motion-ff0055)

## 🎨 Design Theme

This landing page features a **futuristic, friendly, and immersive** design based on AGI's universe:

- **Futuristic Cityscape Hero** - Stunning AI-powered city background
- **Cyan Blue (#40C4FF)** - Primary color matching AGI's robot body
- **Navy Blue (#2a2a6e)** - Strong contrast for text and accents
- **Pastel Gradients** - Smooth transitions between sections
- **Clean Typography** - Bold, uppercase headlines with depth
- **Optimized Images** - WebP format for fast loading

## 🤖 AGI Characters

Multiple AGI character variants throughout the site:

- **Panda AGI** - Waving character on hero left (cute panda outfit)
- **Waving AGI** - Character on hero right
- **Winter AGI** - In Join Community section
- **Hoodie AGI** - In Join Community section
- **About AGI** - Explorer on Earth
- **Parallax Characters** - Various outfits in middle section

## ✨ Key Features

### Modern Tech Stack
- **Vite** - Lightning-fast build tool and dev server
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first styling with custom theme
- **Framer Motion** - Smooth 60fps animations
- **Sharp** - Image optimization (PNG → WebP)
- **Jupiter Terminal** - Integrated Solana swap widget

### Design Features
- 🌆 Futuristic cityscape hero background
- 💙 Multiple AGI character variants with floating animations
- ✨ Full-page menu overlay with blue ornamental blobs
- 🎯 Jupiter swap integration for SOL to $AGI
- 📱 Fully responsive (mobile-first design)
- ⚡ WebP optimized images (75% size reduction)
- 🎬 Loading screen with progress bar
- ♿ Accessibility support (keyboard navigation, reduced motion)

### Page Sections

1. **Hero Section** - "AGENTPAD $AGI"
   - Futuristic cityscape background (full viewport height)
   - Two-line headline: "AGENTPAD" on top, "$AGI" below
   - Large panda AGI waving on left (2xl+ screens only)
   - Large waving AGI on right (2xl+ screens only)
   - Bold uppercase headline with text stroke and shadow
   - "OFFICIAL MASCOT" subheadline
   - Dark navy text for readability
   - Dual CTAs (Join Community, Explore AgentPad)
   - Fully responsive from mobile to desktop

2. **About Section** - "Welcome to the World of AGI"
   - AGI Explorer character with floating animation
   - Two-column layout (image + text)
   - Light blue gradient background
   - Web3 and community focus

3. **Mission Section** - "What AGI Does"
   - Large CTA cards for learning and platform exploration
   - Links to docs and AgentPad platform
   - Clean card design with hover effects

4. **Personality Section** - "$AGI Ecosystem Flow"
   - 3-step ecosystem explanation
   - Fee Collection → Token Buyback → Token Burn
   - Transparent tokenomics display
   - Clear description of $AGI token mechanics

5. **Live Counter Section** - "LIVE COUNTER $AGI"
   - Real-time token metrics with auto-refresh every 5 minutes
   - 5 metric cards in 3-2 grid layout (3 top, 2 bottom)
   - **Total Supply**: Live circulating supply with full number display (e.g., 938,398,940)
   - **Total Buyback**: Cumulative SOL spent on buybacks with decimals (e.g., 10.18 SOL)
   - **Total Burnt**: Automatically calculated (Original Supply - Current Supply)
   - **Price**: Live price with 24h % change from DexScreener
   - **Market Cap**: Live market cap from DexScreener
   - Custom futuristic SVG icons in cyan blue theme
   - Powered by Helius RPC and DexScreener APIs

6. **Parallax Characters Section**
   - Multiple AGI characters in different outfits
   - Parallax scrolling effect
   - Interactive hover animations

7. **Swap Section** - "Swap with $AGI"
   - Embedded Jupiter Terminal iframe
   - SOL to USDC swap (placeholder until $AGI launch)
   - Clean integration matching site theme
   - Fully responsive with mobile optimization

8. **Connect Section** - "Join $AGI's Community"
   - Custom 3D social icons (Telegram, X, DexScreener)
   - Winter AGI and Hoodie AGI flanking the cards (2xl+ screens only)
   - Absolute positioned characters (450px width)
   - Direct links to social channels
   - Characters hide on smaller screens to prevent overlap

9. **Footer**
   - Marquee ticker with AGI messaging
   - Social media icons with hover effects
   - Copyright 2026

### Header
- **Sticky navigation** with auto-hide on scroll down
- **Top marquee** - "$AGI NOW LIVE"
- **$AGI logo** - Centered, responsive sizing
- **MENU button** - Opens full-page overlay (white bg with navy border, responsive)
- **BUY $AGI button** - Links to X/Twitter (white bg with navy border, responsive)
- **Full-page menu** - Two-column navigation with blue ornamental blobs
- **Menu items** - "ABOUT $AGI", "MISSION", "$AGI ECOSYSTEM", "SWAP", "JOIN COMMUNITY"
- **Social icons** - Telegram, X, DexScreener in menu
- **No bottom links** - Clean menu footer
- **Responsive** - Buttons and text scale from mobile to desktop

### Loading Screen
- **AGENTPAD $AGI logo** with bold text stroke
- **Progress bar** animation (0-100%)
- **Gradient background** with animated blue orbs
- **2-second duration** before main content fades in
- **Responsive text** - Scales from mobile to desktop
- **Smooth fade out** transition to main content

## 🎯 Branding & Tone

**Branding Consistency:**
- All references use **$AGI** (with dollar sign) throughout the site
- "AGENTPAD $AGI" as the main title
- Consistent cyan blue (#40C4FF) for brand color
- Navy blue (#2a2a6e) for text and accents

**Tone & Voice:**
$AGI communicates with a **professional yet friendly** tone:

- Direct and clear messaging
- Focus on AI agents and Web3 innovation
- Educational and community-driven
- No excessive emojis or "kawaii" language
- Professional call-to-actions
- Emphasis on ecosystem and technology

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/
│   │   └── AnjaEliane.ttf         # Display font
│   └── images/                     # All WebP optimized
│       ├── hero-bg.webp           # Futuristic cityscape
│       ├── agi-wave-left.webp     # Panda AGI (left hero)
│       ├── agi-wave-right.webp    # Waving AGI (right hero)
│       ├── agi-about.webp         # Explorer AGI
│       ├── agi-winter.webp        # Winter outfit
│       ├── agi-hoodie.webp        # Hoodie outfit
│       ├── telegram-icon.webp     # 3D Telegram icon
│       ├── x-icon.webp            # 3D X icon
│       └── dexscreener-icon.webp  # 3D DexScreener icon
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Sticky nav + full-page menu
│   │   └── Footer.tsx             # Footer with marquee
│   ├── sections/
│   │   ├── Hero.tsx               # Hero with cityscape bg
│   │   ├── About.tsx              # Welcome section
│   │   ├── Mission.tsx            # CTA cards
│   │   ├── Personality.tsx        # Ecosystem flow
│   │   ├── ParallaxCharacters.tsx # Character showcase
│   │   ├── WhyFollow.tsx          # Jupiter swap
│   │   └── Connect.tsx            # Social platforms
│   └── ui/
│       ├── LoadingScreen.tsx      # Initial loading animation
│       ├── Marquee.tsx            # Ticker component
│       ├── NeonButton.tsx         # CTA buttons
│       ├── SectionTitle.tsx       # Section headers
│       └── GlassCard.tsx          # Glass morphism cards
├── utils/
│   └── constants.ts               # All content & config
├── App.tsx                        # Main app with loading state
├── main.tsx                       # Entry point
└── index.css                      # Global styles + custom classes
```

## 🎨 Color Palette

```javascript
colors: {
  'cute-blue': '#40C4FF',        // Primary - AGI's color
  'cute-lightblue': '#B3E5FC',   // Light accent
  'cute-paleblue': '#E0F7FA',    // Pale accent
  'pudgy-navy': '#2a2a6e',       // Dark navy for text
  'pudgy-ice': '#F0F9FF',        // Ice blue backgrounds
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project
cd agentpadagi

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build production bundle
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📝 Customization

### Update Content

Edit `src/utils/constants.ts` to update:
- Social media links (SOCIAL_LINKS)
- Hero section text (HERO_CONTENT)
- Mission cards (CTA_CARDS)
- Ecosystem flow (ECOSYSTEM_FLOW)
- Marquee text (MARQUEE_TOP_TEXT, MARQUEE_FOOTER_TEXT)

### Update Images

To replace images:
1. Add new image to `src/assets/images/`
2. Convert to WebP: `node convert-to-webp.js`
3. Update import in component file

### Update Colors

Edit `tailwind.config.js` to customize:
- Primary/secondary colors
- Background colors
- Custom color palette
- Shadow effects

## 🎭 Animation Details

### Loading Animation
- **AGENT AGI text** - Floating up/down motion
- **Progress bar** - Smooth 0-100% fill animation
- **Background orbs** - Pulsing scale and opacity

### Hero Animations
- **Characters** - Slide in from left/right on load
- **Text** - Staggered fade-in with delays
- **Buttons** - Fade up with spring animation

### Section Animations
- **Scroll-triggered** - Elements fade/slide when in viewport
- **Parallax** - Characters move at different speeds
- **Hover effects** - Cards lift, buttons glow
- **Menu overlay** - Fade in with staggered navigation items

## 📊 Performance

- ⚡ Build time: ~2.86s
- 📦 Bundle size: 347KB (110KB gzipped)
- 🎨 CSS: 20KB (4.86KB gzipped)
- 🖼️ Images: All WebP optimized (75% size reduction)
- 🚀 Dev server starts in ~300ms
- 🎯 Optimized for modern browsers
- 📱 Fully responsive: Mobile (320px+) to Ultra-wide (2560px+)
- ♿ Overflow-x-hidden for smooth scrolling
- 🎭 Character images hide on smaller screens (< 1536px) to prevent overlap

## 🌐 Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

```css
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large desktops - Characters appear at this size */
```

**Responsive Features:**
- Text scales smoothly across all breakpoints
- Characters only display on 2xl+ screens (1536px+)
- Header buttons adapt in size and padding
- Jupiter swap widget adjusts height for mobile
- All sections have responsive padding
- No horizontal scroll on any device

## 🎨 Design Principles

1. **Futuristic** - AI-powered cityscape, modern aesthetic
2. **Clean** - White space, clear hierarchy, easy navigation
3. **Bold** - Large typography with text strokes and shadows
4. **Immersive** - Full-screen hero, parallax effects
5. **Optimized** - WebP images, lazy loading, smooth animations
6. **Accessible** - Keyboard navigation, semantic HTML

## 🎨 Recent Updates (v1.0)

**Major Changes:**
- ✅ Hero layout changed to two-line display: "AGENTPAD" + "$AGI"
- ✅ All "AGI" references updated to "$AGI" for consistent branding
- ✅ Subheadline changed to "OFFICIAL MASCOT"
- ✅ Comprehensive responsive design for all screen sizes
- ✅ Characters only show on 2xl+ screens (1536px+) to prevent overlap
- ✅ Loading screen updated to "AGENTPAD $AGI"
- ✅ Header buttons with white backgrounds
- ✅ Navigation menu items updated ($AGI branding)
- ✅ Removed bottom links from menu overlay
- ✅ Added overflow-x-hidden to prevent horizontal scroll
- ✅ Mobile-first responsive improvements across all sections

## 🔧 Technical Details

### Image Optimization
All images converted from PNG to WebP using Sharp:
- **Quality**: 90%
- **Average size reduction**: 75%
- **Transparency**: Preserved
- **Script**: `convert-to-webp.js`

### Jupiter Integration
- **Widget**: Embedded Jupiter Terminal iframe
- **URL**: `https://jup.ag/swap/SOL-USDC?embed=true`
- **Height**: 600px
- **Note**: Currently SOL-USDC, will update to SOL-AGI at launch

### Loading Screen
- **Duration**: 2 seconds
- **Exit animation**: Fade out (0.5s)
- **Main content**: Fades in (0.6s) after loading
- **Uses**: AnimatePresence for smooth mount/unmount

### Live Counter Integration
- **Data Source**: Helius RPC API for blockchain data
- **API Endpoint**: `https://mainnet.helius-rpc.com`
- **Update Frequency**: Auto-refresh every 5 minutes
- **Metrics Tracked**:
  - Total Supply: `getTokenSupply` RPC call (displays with full decimals)
  - Buyback SOL: Transaction history analysis via Helius enhanced API (cumulative SOL spent, displays with 2-4 decimals)
  - Burnt Tokens: Calculated (Original Supply - Current Supply, displays in compact format)
  - Price & Market Cap: DexScreener API
- **Environment Variable**: `VITE_HELIUS_API_KEY` (required)
- **Free Tier**: 100k requests/day, no credit card required
- **No Authentication Required** for DexScreener API
- **Formatting Functions**: `formatNumber()`, `formatSol()`, `formatCompact()`, `formatPrice()` in `src/utils/tokenUtils.ts`

## 🔄 Switching from Test Token to Production

**Current Status**: The site is configured with a test token for development.

### When Ready to Launch with Real $AGI Token

Follow these steps to switch to your production token:

#### 1. Update Token Configuration

Edit `src/utils/constants.ts` and update the `TOKEN_CONFIG` object:

```typescript
export const TOKEN_CONFIG = {
  // ⚠️ CHANGE THIS: Replace with your real $AGI token contract address
  address: 'YOUR_REAL_AGI_TOKEN_ADDRESS_HERE',

  symbol: '$AGI',
  decimals: 9, // Verify this matches your token contract

  // ⚠️ CHANGE THIS: Replace with your production buyback/burn wallet
  buybackBurnWallet: 'YOUR_PRODUCTION_WALLET_ADDRESS_HERE',

  // ⚠️ VERIFY THIS: Confirm this matches your token's initial supply
  originalSupply: 1_000_000_000, // 1 billion tokens
};
```

#### 2. What Each Setting Does

- **`address`**: Your $AGI token contract address on Solana
  - Used to fetch price, supply, and market cap data
  - The Live Counter pulls data for this token

- **`buybackBurnWallet`**: Your buyback & burn wallet address
  - Used to track SOL spent on buybacks (analyzes transaction history)
  - Should be the wallet that executes buyback transactions

- **`originalSupply`**: Initial token supply at launch
  - Used to calculate burnt tokens: `Burnt = originalSupply - currentSupply`
  - Must match your token's creation supply (e.g., 1 billion)

#### 3. Testing Before Production

```bash
# 1. Update constants.ts with production values
# 2. Test locally
npm run dev

# 3. Verify Live Counter displays correct data:
#    - Total Supply matches on-chain data
#    - Buyback SOL shows transaction history correctly
#    - Burnt amount is calculated correctly
#    - Price and Market Cap load from DexScreener

# 4. Build and test production bundle
npm run build
npm run preview
```

#### 4. Verify on Staging/Preview

- Deploy to Vercel preview/staging environment first
- Check Live Counter metrics match blockchain explorers:
  - Compare Total Supply with Solscan/Solana Explorer
  - Verify Burnt amount calculation is accurate
  - Confirm Buyback SOL matches your wallet's transaction history
  - Check Price/Market Cap against DexScreener

#### 5. Deploy to Production

Once verified on staging, deploy to production (see Deployment section below).

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel

**Important: Add Environment Variable**

Before deploying, add the Helius API key in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings
2. Navigate to **Environment Variables**
3. Add variable:
   - **Name**: `VITE_HELIUS_API_KEY`
   - **Value**: Your Helius API key from https://helius.dev
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy for changes to take effect

```bash
vercel deploy
```

### Deploy to Netlify

Add environment variable in Netlify:

1. Site Settings → Environment Variables
2. Add: `VITE_HELIUS_API_KEY` with your API key

```bash
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Build: `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings
4. **Note**: Environment variables must be set at build time

## 📞 Support

For issues or questions:
- Open an issue on GitHub: [github.com/agentagi/agentagi-website-1.0](https://github.com/agentagi/agentagi-website-1.0)
- Contact AgentPad team
- Check documentation at [docs.agentpad.xyz](https://docs.agentpad.xyz)

## 🔗 Links

- **Website**: [agentpad.xyz](https://agentpad.xyz)
- **Docs**: [docs.agentpad.xyz](https://docs.agentpad.xyz)
- **Launch App**: [launch.agentpad.tech](https://launch.agentpad.tech)
- **Twitter**: [@AgentPad_Agi](https://x.com/AgentPad_Agi)
- **Telegram**: [t.me/AgentPad_Agi](https://t.me/AgentPad_Agi)

---

**Made with 💙 by the AgentPad team**

*Built with Claude Sonnet 4.5 - Your AI pair programmer*
