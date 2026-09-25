# 🏠 Nivora — Home Away From Home

> **AI-Powered Student Accommodation & Discovery Platform**  
> Helping college students discover verified PGs, hostels, and shared flats near major universities with authentic peer reviews and interactive maps.

---

## ✨ Features

- 🔍 **Smart College & Area Search**: Auto-suggests major colleges (DTU, BPIT, MSIT, VIPS, Amity, JIIT, NSUT, etc.) and auto-populates pincodes.
- 🏷️ **Category & Type Filters**: Quickly filter between **PGs**, **Hostels**, **Flats**, and all stays.
- 🗺️ **Interactive Leaflet Maps**: Real-time geolocation visualization with dynamic marker bounds and popup information.
- ⭐ **Authentic Student Reviews**: Peer ratings, amenity breakdowns, and verified feedback from residents.
- 🌸 **Yuna AI Assistant**: Floating AI concierge widget for answering accommodation questions, pricing inquiries, and neighborhood advice.
- 🎨 **Modern Dark Aesthetics**: Custom HSL dark theme with starlight cursor glow, glassmorphism, and responsive mobile-first UI.
- 🔐 **Firebase Authentication**: Integrated Google & Email authentication flow with user profile management.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core** | React 18 (JavaScript / JSX) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Routing** | [React Router](https://reactrouter.com/) (`react-router-dom` v7) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom CSS tokens |
| **UI Components** | Radix UI primitives, Lucide React Icons |
| **Maps** | [Leaflet](https://leafletjs.com/) & OpenStreetMap |
| **Auth** | [Firebase](https://firebase.google.com/) Auth |

---

## 📁 Project Structure

```text
NIVORA/
├── index.html              # HTML entry shell
├── vite.config.js          # Vite configuration & path aliases (@ -> ./src)
├── tailwind.config.js      # Tailwind theme tokens, colors & animations
├── package.json            # Project dependencies and scripts
│
└── src/
    ├── main.jsx            # React root mount & BrowserRouter
    ├── App.jsx             # Central routing & global layout wrapper
    ├── index.css           # Global theme variables & Tailwind base layers
    │
    ├── pages/              # Application Pages
    │   ├── Home.jsx             # Landing page with hero typewriter & quick search
    │   ├── ListingsPage.jsx     # Accommodation listings with live map & filters
    │   ├── ListingDetailPage.jsx# Full property details, facilities & reviews
    │   ├── TeamPage.jsx         # Meet the team members
    │   ├── ContactPage.jsx      # Contact & support information
    │   ├── MarketplacePage.jsx  # Student services marketplace (Coming Soon)
    │   ├── LoginPage.jsx        # Login page
    │   ├── SignUpPage.jsx       # Role selection (Renter / Owner)
    │   ├── TermsPage.jsx        # Terms of Service
    │   └── PrivacyPage.jsx      # Privacy Policy
    │
    ├── components/
    │   ├── layout/         # Header, Footer, AuthButton, HelpDialog, YunaChatbot, StarlightBackground
    │   ├── home/           # AboutUs, Help (FAQ Accordion)
    │   ├── search/         # SearchForm (College autocomplete & type selector)
    │   ├── listings/       # ListingCard, ListingMap, MapComponent, ReviewForm
    │   └── ui/             # Reusable UI primitives (Button, Card, Input, Badge, Sheet, Dialog, etc.)
    │
    ├── lib/                # Static data & utilities
    │   ├── data.js               # Accommodation listings dataset
    │   ├── placeholder-images.js # Image catalog URLs
    │   ├── firebase.js           # Firebase configuration
    │   └── utils.js              # `cn()` className merger
    │
    └── hooks/              # Custom React hooks (use-mobile, use-toast)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nivora.git
   cd nivora
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 👥 Meet the Team

- **Ayush Kumar** — *Team Leader & Tech Specialist*
- **Aanchal Chaudhary** — *Tech Specialist*
- **Avneet Singh** — *UI/UX Designer*
- **Anirudh Kanwat** — *Integration Expert*
- **Aman** — *Content Specialist*
- **Vishwas Shukla** — *Content Specialist*

---

## 📄 License

This project is licensed under the MIT License.
