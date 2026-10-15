# Sombra — Landing Page

Landing site for **Sombra**: private trades, post-quantum, Solana-native.

Built with Next.js 16 (App Router), React 19, and three.js.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | What |
|---|---|
| `/` | Landing page |
| `/wallet` | Wallet page |
| `/contact` | Contact page |
| `/boards` | Index of every artboard from the design canvas, including explorations |
| `/boards/[name]` | A single artboard |

## Structure

- `app/` — routes and global styles
- `components/` — page sections (`S1Hero` … `S6Waitlist`), visuals (`Main`, `Wave`, `Foam`, …), and `boards.js`, the artboard registry

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm start` — serve the build
