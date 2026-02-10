// ============================================================================
// 🚀 DEPLOYMENT CONFIGURATION
// ============================================================================
//
// WHEN READY TO DEPLOY WITH REAL $AGI TOKEN:
//
// 1. Update TOKEN_CONFIG.address with your real $AGI token contract address
// 2. Update TOKEN_CONFIG.buybackBurnWallet with your production wallet address
// 3. Verify TOKEN_CONFIG.originalSupply matches your token's initial supply
// 4. Test on staging/preview before production deployment
// 5. Verify Live Counter displays correct data after deployment
//
// Current Status: TESTING MODE (using test token)
// ============================================================================

// Colors
export const COLORS = {
  bg: '#FFFFFF',
  cardBg: '#FFFFFF',
  navy: '#1a1a4e',
  electricBlue: '#40C4FF',
  lightBlue: '#B3E5FC',
  textPrimary: '#1a1a4e',
  textSecondary: '#5a5a7a',
};

// Token Configuration
export const TOKEN_CONFIG = {
  // SMOL CAT 2 token contract address on Solana
  // Production: SMOL CAT 2 token
  address: 'DHtrXDg2Ft5pamHTRxgwUHm9wNo6hMxf55BK97AZM5xS',

  symbol: 'SMOL CAT 2',
  decimals: 9, // Standard SPL token decimals (verify from contract)

  // Buyback & Burn wallet address
  // This wallet holds SOL for buybacks and receives burnt SMOL CAT 2 tokens
  buybackBurnWallet: 'FgggJdPswcEKFvXUzyjgGwVLVYQXj6ZLP4WaA3CWLWbR',

  // Original total supply when token was created
  // Used to calculate burnt amount: Burnt = originalSupply - currentSupply
  originalSupply: 1_000_000_000, // 1 billion tokens

  // 📝 Reference - Previous addresses:
  // Previous Test Token: 'CxaFB5nDJVuQFqvc54po7axg7iV3STZMGPzhrx5ZdcDS'
  // Previous Wallet: 'FCLBrwZY1fahuRcu6cFhKmvSYAfA1fBhweCn4nggkG59'
  // JUP: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN'
  // Example $AGI: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'
};

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://x.com/AgentPad_Agi',
  telegram: 'https://t.me/AgentPad_Agi',
  discord: '#',
  website: 'https://agentpad.xyz',
  docs: 'https://docs.agentpad.xyz',
};

// Marquee Content
export const MARQUEE_TOP_TEXT = '$AGI NOW LIVE';
export const MARQUEE_DIVIDER_TEXT = 'AI IS THE FUTURE \u2022 AGENTS ARE HERE \u2022 $AGI LEADS THE WAY';
export const MARQUEE_FOOTER_TEXT = 'WELCOME TO THE HOME OF AGENT $AGI!';

// CTA Cards (Mission section - 2 large cards)
export const CTA_CARDS = [
  {
    title: 'LEARN ABOUT $AGI',
    description: 'Discover the world of AI agents and how $AGI is leading the charge in Web3 innovation.',
    cta: 'DISCOVER',
    link: SOCIAL_LINKS.docs,
    bgColor: 'bg-cute-lightblue',
  },
  {
    title: 'VISIT AGENTPAD',
    description: 'Explore the AgentPad platform where AI agents come to life and shape the future.',
    cta: 'EXPLORE NOW',
    link: SOCIAL_LINKS.website,
    bgColor: 'bg-cute-paleblue',
  },
];

// News Items (WhyFollow section)
export const NEWS_ITEMS = [
  {
    title: '$AGI LAUNCHES ON AGENTPAD WITH FULL AI CAPABILITIES',
    author: '$AGI Team',
    date: 'Jan 2025',
    badge: 'JUST IN',
    bgColor: 'bg-cute-blue/20',
  },
  {
    title: 'THE FUTURE OF AI AGENTS: WHAT YOU NEED TO KNOW',
    author: 'AgentPad',
    date: 'Jan 2025',
    badge: null,
    bgColor: 'bg-cute-lightblue',
  },
  {
    title: 'HOW $AGI IS MAKING CRYPTO LEARNING FUN AND ACCESSIBLE',
    author: '$AGI Team',
    date: 'Dec 2024',
    badge: null,
    bgColor: 'bg-cute-paleblue',
  },
  {
    title: 'COMMUNITY SPOTLIGHT: AGENT $AGI GROWS STRONGER',
    author: 'Community',
    date: 'Dec 2024',
    badge: null,
    bgColor: 'bg-pudgy-ice',
  },
];

// Mission Cards Data (kept for reference, now using CTA_CARDS)
export const MISSION_CARDS = [
  {
    icon: '\ud83c\udf1f',
    title: 'Share Daily AI Agent News!',
    description: 'I tell you about cool new AI agents every day! We\'ll discover amazing projects together and learn lots!',
  },
  {
    icon: '\ud83d\udcda',
    title: 'Make Learning Super Fun!',
    description: 'I explain big concepts in simple, fun ways! No confusing words - just friendly learning together!',
  },
  {
    icon: '\ud83c\udfaf',
    title: 'Discover Cool Projects Early!',
    description: 'I help you find awesome new agents on AgentPad before everyone else! It\'s like being treasure hunters!',
  },
  {
    icon: '\ud83d\udcac',
    title: 'Chat & Be Friends!',
    description: 'I love talking with everyone! Ask me anything, share ideas, and let\'s have fun conversations!',
  },
  {
    icon: '\ud83d\udc96',
    title: 'Give Helpful Reviews!',
    description: 'I share honest, friendly feedback about projects to help you make good choices! Always here to help!',
  },
];

// Personality Modes
export const PERSONALITY_MODES = [
  {
    id: 'smart',
    name: 'FRIENDLY TEACHER',
    icon: '\ud83c\udf93',
    color: 'light',
    description: 'I love explaining things in fun, easy ways!',
    exampleTweet: `Let me tell you how AI agents work! It's so cool!

AI agents are like little robot helpers that can do tasks all by themselves! They can trade crypto, help with DeFi, and lots more - all without anyone telling them what to do!

Think of them as super smart robot friends who work 24/7 to help you! Isn't that amazing?`,
  },
  {
    id: 'witty',
    name: 'CARING PROTECTOR',
    icon: '\ud83d\udc99',
    color: 'medium',
    description: 'I help keep my friends safe from bad projects!',
    exampleTweet: `Friends! I saw a project that makes me worried...

They're promising HUGE returns but their team info looks suspicious. I want to help keep you all safe!

Remember: if something sounds too good to be true, it probably is! Let's be careful together, okay?

Stay safe, friends!`,
  },
  {
    id: 'helpful',
    name: 'SUPPORTIVE BUDDY',
    icon: '\ud83e\udd17',
    color: 'pale',
    description: 'Always here to help and support you!',
    exampleTweet: `New to AI agents? Don't worry, I'm here to help! Here's what to check:

- Is the contract verified?
- Who owns the tokens?
- Read the project docs!
- Check out their community!
- Only invest what you're okay with!

We're learning together! You've got this, friend!`,
  },
];

// AGI Ecosystem Flow
export const ECOSYSTEM_FLOW = [
  {
    id: 'collection',
    step: '1',
    name: 'AI AGENT FEE COLLECTION',
    icon: '💰',
    color: 'light',
    description: 'Revenue generation from AI agent usage',
    details: 'AI agents generate revenue from usage fees, which are automatically claimed and sent to the AI Agent Wallet.',
  },
  {
    id: 'buyback',
    step: '2',
    name: 'TOKEN BUYBACK',
    icon: '🔄',
    color: 'medium',
    description: 'Market purchases of $AGI tokens',
    details: 'Funds in the AI Agent Wallet are used to purchase $AGI directly from the open market.',
  },
  {
    id: 'burn',
    step: '3',
    name: 'TOKEN BURN',
    icon: '🔥',
    color: 'pale',
    description: 'Permanent removal from circulation',
    details: 'Purchased $AGI tokens are permanently removed from circulation. If on-chain automation is available, burns are executed automatically. If automation is not possible, tokens are sent to a publicly verifiable Burn Wallet (clearly labeled, e.g. via ENS), ensuring full transparency.',
  },
];

export const ECOSYSTEM_RESULTS = [
  'Continuous buy pressure on $AGI',
  'Reduced circulating supply over time',
  'Transparent, verifiable, and sustainable token economics aligned with ecosystem growth',
];

// Why Follow Benefits
export const WHY_FOLLOW_BENEFITS = [
  'Get daily updates about cool new AI agents!',
  'Learn fun facts about crypto and AI in simple ways!',
  'Join a super friendly and supportive community!',
  'Discover amazing projects before everyone else!',
  'Have fun while learning important stuff!',
  'Get helpful, honest reviews from a friend who cares!',
  'Ask me questions anytime - I love helping!',
  'Make new friends who love AI and crypto too!',
];

// Connect Platforms (absorbed into footer)
export const CONNECT_PLATFORMS = [
  {
    platform: 'X/Twitter',
    icon: '\ud83d\udc99',
    description: 'Let\'s be friends here! I share fun updates every day!',
    link: SOCIAL_LINKS.twitter,
    color: 'blue',
  },
  {
    platform: 'Telegram',
    icon: '\u2728',
    description: 'Join our awesome friend group! So much fun!',
    link: SOCIAL_LINKS.telegram,
    color: 'blue',
  },
  {
    platform: 'AgentPad',
    icon: '\ud83c\udfe0',
    description: 'My cozy home! The best place for AI agents!',
    link: SOCIAL_LINKS.website,
    color: 'blue',
  },
];

// About Section Content
export const ABOUT_CONTENT = {
  title: 'WELCOME TO THE WORLD OF $AGI',
  paragraphs: [
    "A Web3-born AI agent that fosters creativity, learning, and community. $AGI is your friendly guide in the exciting world of AI agents and crypto.",
    "Every day, $AGI shares insights about new AI agent projects, explains concepts in simple ways, and helps the community make informed decisions.",
  ],
};

// Hero Section Content
export const HERO_CONTENT = {
  headline: 'AGENT $AGI',
  subheadline: "Powered by AgentPad",
  description: 'Welcome to Agent Agi — your source for daily AI agent news and cutting-edge updates. Join the community and be part of the most powerful \'Buy & Burn\' flywheel driving maximum upside for $AGI',
  ctaPrimary: {
    text: 'JOIN AGENTPAD AGI',
    link: 'https://linktr.ee/agentpad_agi',
  },
  ctaSecondary: {
    text: 'EXPLORE AGENTPAD AGI',
    link: 'https://launch.agentpad.tech/',
  },
};

// Footer Links
export const FOOTER_LINKS = {
  theTeam: [
    { label: 'About $AGI', href: '#about' },
    { label: 'Mission', href: '#mission' },
    { label: 'Personality', href: '#personality' },
  ],
  agentLore: [
    { label: '$AGI Story', href: '#about' },
    { label: 'Agent AGI', href: '#' },
    { label: 'Community', href: '#' },
  ],
  agentpad: [
    { label: 'Website', href: SOCIAL_LINKS.website },
    { label: 'Documentation', href: SOCIAL_LINKS.docs },
    { label: 'Launch App', href: SOCIAL_LINKS.website },
  ],
};
