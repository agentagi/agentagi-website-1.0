# 🚀 Production Deployment Checklist

## Prerequisites

- [ ] Real $AGI token has been deployed on Solana
- [ ] Buyback/burn wallet has been created and is operational
- [ ] Helius API key is available (free tier or paid)
- [ ] Token is listed on DexScreener with active trading pair

---

## Step-by-Step Deployment

### 1️⃣ Update Token Configuration

**File:** `src/utils/constants.ts`

```typescript
export const TOKEN_CONFIG = {
  // Replace with real $AGI token address
  address: 'YOUR_REAL_AGI_TOKEN_ADDRESS_HERE',

  // Replace with production buyback/burn wallet
  buybackBurnWallet: 'YOUR_PRODUCTION_WALLET_ADDRESS_HERE',

  // Verify this matches your token's initial supply
  originalSupply: 1_000_000_000,
};
```

**What to change:**
- [ ] `address` - Your real $AGI token contract address
- [ ] `buybackBurnWallet` - Your production buyback/burn wallet address
- [ ] `originalSupply` - Verify matches token's initial supply (default: 1 billion)

---

### 2️⃣ Local Testing

```bash
# Install dependencies (if needed)
npm install

# Start dev server
npm run dev
```

**Verify:**
- [ ] Site loads without errors
- [ ] Live Counter section displays
- [ ] All 5 metrics show data (not "--" or "0")
- [ ] Total Supply matches blockchain explorer
- [ ] Burnt amount is calculated correctly
- [ ] Price and Market Cap load from DexScreener

---

### 3️⃣ Build Production Bundle

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

**Verify:**
- [ ] Build completes without errors
- [ ] Production preview works correctly
- [ ] Live Counter metrics are accurate

---

### 4️⃣ Deploy to Staging/Preview

**Vercel Preview:**
```bash
# Push to feature branch
git checkout -b launch-production
git add .
git commit -m "Update to production token configuration"
git push origin launch-production
```

**Verify on Preview:**
- [ ] Visit Vercel preview URL
- [ ] Check Live Counter displays correct data
- [ ] Compare metrics with Solscan/blockchain explorer:
  - [ ] Total Supply matches on-chain data
  - [ ] Burnt amount is accurate
  - [ ] Buyback SOL matches wallet transaction history
  - [ ] Price/Market Cap match DexScreener

---

### 5️⃣ Environment Variables

**Vercel Dashboard:**
1. Go to: Project → Settings → Environment Variables
2. Verify `VITE_HELIUS_API_KEY` is set
3. Value should be your Helius API key
4. Environment: All (Production, Preview, Development)

- [ ] Environment variable is configured
- [ ] Redeploy after any changes to environment variables

**Netlify Dashboard:**
1. Go to: Site Settings → Environment Variables
2. Add: `VITE_HELIUS_API_KEY`
3. Value: Your Helius API key

---

### 6️⃣ Deploy to Production

**Option A - Merge to Master (Vercel Auto-Deploy):**
```bash
git checkout master
git merge launch-production
git push origin master
```

**Option B - Direct Deploy:**
```bash
vercel --prod
```

**Verify Production:**
- [ ] Site is live at production URL
- [ ] Live Counter loads and updates
- [ ] All sections display correctly
- [ ] Mobile responsive design works
- [ ] No console errors

---

### 7️⃣ Post-Deployment Verification

**Functionality:**
- [ ] Hero section loads with characters
- [ ] Live Counter shows accurate metrics
- [ ] Jupiter swap widget works (if using real token)
- [ ] All social links work correctly
- [ ] Menu navigation works smoothly

**Live Counter Metrics:**
- [ ] Total Supply: Matches blockchain explorer
- [ ] Total Buyback: Shows cumulative SOL spent (if buybacks have occurred)
- [ ] Total Burnt: Correctly calculated (Original - Current Supply)
- [ ] Price: Loads from DexScreener
- [ ] Market Cap: Loads from DexScreener

**Performance:**
- [ ] Page loads in < 3 seconds
- [ ] Images load correctly (WebP format)
- [ ] Animations are smooth
- [ ] No layout shifts

---

## 🔍 Troubleshooting

### Live Counter Shows All Zeros

**Possible causes:**
1. Token address is incorrect
   - Solution: Verify address in `constants.ts` matches your token
2. Token not listed on DexScreener yet
   - Solution: Wait for trading pair to be indexed
3. Helius API key missing or invalid
   - Solution: Check environment variable in Vercel/Netlify

### Burnt Amount is Incorrect

**Possible causes:**
1. `originalSupply` doesn't match token's initial supply
   - Solution: Update `TOKEN_CONFIG.originalSupply` in `constants.ts`
2. Current supply data not loading
   - Solution: Check Helius API is working

### Buyback SOL Shows Zero

**Possible causes:**
1. No buyback transactions have occurred yet
   - Expected: Will show 0 until first buyback
2. Wrong wallet address in `buybackBurnWallet`
   - Solution: Verify wallet address in `constants.ts`
3. Transactions not indexed by Helius yet
   - Solution: Wait a few minutes for indexing

---

## 📊 Expected Metrics After Launch

**Immediately After Launch:**
- Total Supply: 1,000,000,000 $AGI (or your initial supply)
- Total Buyback: 0 SOL (until first buyback occurs)
- Total Burnt: 0 $AGI (until first burn occurs)
- Price: Live price from DexScreener
- Market Cap: Live market cap from DexScreener

**After First Buyback/Burn:**
- Total Supply: < 1,000,000,000 (decreases with burns)
- Total Buyback: > 0 SOL (cumulative SOL spent)
- Total Burnt: > 0 $AGI (calculated automatically)

---

## 🔗 Useful Links

- **Solscan Explorer**: https://solscan.io/token/[YOUR_TOKEN_ADDRESS]
- **DexScreener**: https://dexscreener.com/solana/[YOUR_TOKEN_ADDRESS]
- **Helius Dashboard**: https://dashboard.helius.dev/
- **Vercel Dashboard**: https://vercel.com/dashboard

---

## ✅ Final Checklist

Before announcing the launch:

- [ ] Production token configuration is updated
- [ ] Site is deployed to production
- [ ] All Live Counter metrics are accurate
- [ ] Jupiter swap widget uses correct token pair
- [ ] Social media links are correct
- [ ] Mobile design is tested and working
- [ ] Performance is optimized (< 3s load time)
- [ ] All team members have reviewed the site

---

**Questions or Issues?**
- Check `CLAUDE.md` for detailed technical documentation
- Review `src/utils/constants.ts` for all configuration options
- Contact development team for support
