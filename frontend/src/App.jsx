
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import ListingsPage from '@/pages/ListingsPage';
import ListingDetailPage from '@/pages/ListingDetailPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';
import MarketplacePage from '@/pages/MarketplacePage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import StarlightBackground from '@/components/layout/StarlightBackground';
import YunaChatbot from '@/components/layout/YunaChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <StarlightBackground />
      <div className="relative z-10 flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listings/:id" element={<ListingDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <YunaChatbot />
    </div>
  );
}
