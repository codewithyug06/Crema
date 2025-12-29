# 🚀 Crema: The Employee Experience Engine

**Crema** is a next-generation "Operating System" for modern company culture. Designed for the hybrid era, it bridges the "Engagement Gap" by integrating high-velocity consumer social mechanics—Stories, Reels, and Real-time Authenticity—directly into the enterprise environment.

---

## 💡 The Vision
Modern workplace tools are often static, text-heavy, and passive. **Crema** transforms the employee experience from a "Digital Filing Cabinet" into a thriving social community through **Social Media Injection**. By adapting the psychological hooks of Instagram, TikTok, and BeReal, we drive daily active usage (DAU) and foster genuine human connection in distributed teams.

---

## ✨ Core Pillars & Features

### 🤳 WorkReal (The Authenticity Layer)
* **Dual-Camera Capture:** Simultaneous front and back camera images providing raw, daily work context.
* **The "Blur" Mechanic:** Feed content remains inaccessible until the user contributes their own daily post to ensure high participation.

### 🎥 Kudos Reels (The Recognition Engine)
* **Vertical Video Feed:** A TikTok-style interface for 15-90 second peer-to-peer and leadership recognition videos.
* **Tipping Economy:** Viewers can "tip" recipients with Impact Points directly from their monthly allowance to drive immediate, tangible recognition.

### 📱 Culture Stories
* **Ephemeral Updates:** 24-hour lifecycle updates categorized by Work, Wellness, and Kudos.
* **Visual Status Rings:** Color-coded avatar rings providing instant team-wide context at a glance.

### 🏆 The League & Impact Points
* **Impact Wallet:** A transactional ledger tracking earned and spent points.
* **Streak Multipliers:** Reward consistency with bonus points for daily "WorkReal" and social participation.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router) |
| **Frontend** | React 19, TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Framer Motion |
| **State Management** | Zustand |
| **Icons** | Lucide React |
| **Utilities** | date-fns, clsx, tailwind-merge |

---

## 📂 Project Architecture

```plaintext
crema/
├── src/
│   ├── app/            # Next.js App Router (Layouts, Pages, API)
│   ├── components/     # High-fidelity Atomic Design components
│   ├── lib/            # Utility functions and shared logic
│   ├── store/          # Zustand store for global state management
│   └── types/          # Centralized TypeScript interfaces 
├── public/             # Static assets (SVG Icons, Global Styles)
└── tailwind.config.ts  # Design system configuration

```

🚀 Getting Started
1. Prerequisites
Node.js 20+

npm, yarn, or pnpm

2. Installation
Bash

git clone [https://github.com/](https://github.com/)[your-repo]/crema.git
cd crema
npm install
3. Development
Run the development server:

Bash

npm run dev
Open http://localhost:3000 to view the application.

🔮 Future Roadmap
[ ] Burnout Shield (AI): Proactive wellness nudges based on "Digital Exhaust" patterns.

[ ] Smart Connect: Vector-embedding based employee matching for coffee chats.

[ ] The Widget Store: A full marketplace for physical swag fulfillment and charity donations.

[ ] HRIS Deep-Sync: Automated directory integration with Workday and SAP.

🛡️ Security & Privacy
Multi-Tenant Isolation: Secure data separation across company tenants.

Consent-First Wellness: Explicit user opt-in for all physical activity tracking features.

© 2025 Crema. All rights reserved.
