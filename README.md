# Nivora — Home Away From Home

> **AI-Powered Student Accommodation & Discovery Platform**  
> Helping college students discover verified PGs, hostels, and shared flats near major universities with authentic peer reviews and interactive maps.

---

## 📁 Full-Stack Project Structure

```text
NIVORA/
├── frontend/                     # React + Vite Client Application
│   ├── public/                   # Static assets & icons
│   ├── index.html                # HTML entry shell
│   ├── vite.config.js            # Vite build config & aliases (@ -> ./src)
│   ├── tailwind.config.js        # Tailwind design tokens & themes
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── package.json              # Frontend dependencies & scripts
│   │
│   └── src/
│       ├── main.jsx              # React 18 DOM mount & Router
│       ├── App.jsx               # Master routing & layout shell
│       ├── index.css             # Theme variables & Tailwind layers
│       │
│       ├── pages/                # Client Pages (.jsx)
│       │   ├── Home.jsx          # Homepage with search & typewriter
│       │   ├── ListingsPage.jsx  # Property listings with live Leaflet map
│       │   ├── ListingDetailPage.jsx # Details, facilities & reviews
│       │   ├── TeamPage.jsx      # Team member profiles
│       │   ├── ContactPage.jsx   # Contact info & email
│       │   ├── MarketplacePage.jsx # Student services marketplace
│       │   ├── LoginPage.jsx     # Login screen
│       │   ├── SignUpPage.jsx    # Role onboarding (Renter / Owner)
│       │   ├── TermsPage.jsx     # Terms of Service
│       │   └── PrivacyPage.jsx   # Privacy Policy
│       │
│       ├── components/           # UI Components (.jsx)
│       │   ├── layout/           # Header, Footer, AuthButton, HelpDialog, StarlightBackground, YunaChatbot
│       │   ├── home/             # AboutUs, Help (FAQ)
│       │   ├── search/           # SearchForm (College autocomplete & filters)
│       │   ├── listings/         # ListingCard, ListingMap, MapComponent, ReviewForm
│       │   └── ui/               # Reusable primitives (Button, Card, Input, Sheet, etc.)
│       │
│       ├── lib/                  # Data & Helpers
│       │   ├── data.js           # Mock accommodation listings
│       │   ├── placeholder-images.js # Image catalog URLs
│       │   ├── firebase.js       # Firebase client config
│       │   └── utils.js          # `cn()` styling utility
│       │
│       └── hooks/                # Custom React hooks (use-mobile, use-toast)
│
├── backend/                      # Node.js + Express REST API
│   ├── package.json              # Backend dependencies (express, cors, dotenv)
│   ├── .env.example              # Environment variables template
│   │
│   └── src/
│       ├── server.js             # Express API server entry point
│       ├── routes/               # API Route Handlers
│       │   ├── listings.routes.js# GET /api/listings, GET /api/listings/:id
│       │   └── reviews.routes.js # POST /api/reviews
│       ├── controllers/          # Business logic
│       │   ├── listings.controller.js
│       │   └── reviews.controller.js
│       └── data/                 # Server-side listings data source
│           └── listings.data.js
│
├── .gitignore                    # Root gitignore for frontend & backend
├── package.json                  # Root workspace runner scripts
└── README.md                     # Documentation
```

---

## 🚀 Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18 (JSX), Vite, React Router v7, Tailwind CSS, Radix UI, Leaflet |
| **Backend** | Node.js, Express, CORS, Dotenv |
| **Auth** | Firebase Authentication |
| **Maps** | Leaflet & OpenStreetMap |

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### 1. Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Running Locally

**Run Frontend (Client):**
```bash
npm run dev:frontend
# Server starts at http://localhost:9002
```

**Run Backend (API Server):**
```bash
npm run dev:backend
# API server starts at http://localhost:5000
```

---

## 📡 API Endpoints (Backend)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/listings` | Fetch all accommodation listings (supports `?college=`, `?pincode=`, `?type=`) |
| `GET` | `/api/listings/:id` | Fetch detailed accommodation by ID |
| `POST` | `/api/reviews` | Submit a new review for a property |
| `GET` | `/api/health` | Health check endpoint |

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
