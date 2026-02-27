# Samuel's Quantitative Portfolio

Personal portfolio of **Wong Wang Chak (Samuel)**, a Quantitative Finance and Computer Science student at City University of Hong Kong. This project showcases my experience in algorithmic trading, financial modeling, and software engineering.

## 🚀 Professional Experience

- **TS Imagine** | Quantitative Consulting - FinTech Intern (Incoming Jun 2026)
- **Sundawn Capital** | Algorithm Trading Intern (Sep 2025 - May 2026)
- **CityU HK** | Research Mentee (Quant Research) (Sep 2024 - Present)
- **Oakcean Capital** | Quantitative Analyst Fellow (Aug 2025 - Sep 2025)
- **SnapFeedback AI** | Full-Stack Developer Intern (Jun 2025 - Aug 2025)

## 🛠️ Key Projects

- **QFinZero**: A Unified Financial Toolchain for LLM-Based Trading Agents (Submitted to ACL 2026).
- **Multi-Model Delta-Gamma Dynamic Hedging**: Statistical hedging strategies for S&P 500 index options.
- **Cross Asset Beta Trading & Factor Research**: BAB anomaly research across 50+ digital assets.

## 🎓 Education

- **City University of Hong Kong** | BSc in Computational Finance & Computer Science (Double Degree)
  - *Key Modules*: Derivative Pricing, Stochastic Calculus, Portfolio & Risk Management.

## 💻 Tech Stack

- **Languages**: Python (NumPy/Pandas/Scikit-learn), C++, Java, R, SQL, TypeScript/JavaScript.
- **Finance**: Stochastic Calculus, Derivative Pricing, Risk Management, Factor Research.
- **Web**: Next.js 15, Tailwind CSS, Shadcn/UI, Node.js.

---

## ⚙️ Development

This portfolio is built with **Next.js 15 (App Router)** and features a custom **Quant HUD Canvas Animation** for the background.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

The app runs on [http://localhost:9002](http://localhost:9002).
- `lint`: Run Next lint
- `typecheck`: TypeScript type check
- `genkit:dev`: Start Genkit with `ts-node/tsx` on `src/ai/dev.ts`
- `genkit:watch`: Same as above with watch mode

## Project Structure

```
src/
  app/
    layout.tsx           # Root layout, fonts, theme provider, header, scroll indicator
    page.tsx             # Home page assembling sections
    globals.css          # Theme tokens & base styles
  components/
    sections/            # Hero, Experience, Education, Tech Stack, Projects, Contact, Quote
    ui/                  # shadcn/ui components
    boids-canvas.tsx     # Animated background
    scroll-indicator.tsx # Sticky progress/navigation
    header.tsx           # Theme toggle & navigation
    suggested-content.tsx# (Optional) AI suggestion UI
  ai/
    genkit.ts            # Genkit configuration (Google AI)
    dev.ts               # Dev entry to register flows locally
    flows/
      suggested-interests-content.ts
  lib/
    data.ts              # Portfolio content
  hooks/
    use-toast.ts         # Toast helper for UI feedback
```

## Deployment (Optional: Firebase App Hosting)

This repo includes `apphosting.yaml`. To deploy to Firebase App Hosting:

1) Install Firebase CLI and log in
2) Initialize App Hosting in your Firebase project or connect this directory
3) Build the app: `npm run build`
4) Deploy with the CLI as per Firebase docs

Refer to Firebase App Hosting docs for detailed steps.

## Troubleshooting

- Clear `.next/` and re-run `npm run dev` if you see stale assets
- Ensure your Node version is 18+ if Next build fails
- For AI, confirm `GOOGLE_GENERATIVE_AI_API_KEY` is set and restart the Genkit dev server

## Acknowledgments

- Next.js, Tailwind CSS, shadcn/ui, Radix UI, lucide-react
- Genkit and Google AI for the optional suggestion flow

