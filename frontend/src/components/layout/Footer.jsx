import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground mt-auto border-t border-border/40 relative z-10">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-0 mb-4">
              <img
                src="https://i.ibb.co/V0b773kg/Whats-App-Image-2025-09-21-at-00-02-33-d48e50d9-removebg-preview.png"
                alt="Nivora Logo"
                className="w-12 h-8 object-contain -ml-2"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent -ml-2">
                Nivora
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Your one-stop solution to finding the best PGs, messes, and flats near your college. We provide AI-powered insights and genuine reviews to help you find your home away from home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-1 lg:col-span-2 gap-8">
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-primary">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/listings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-primary">Other Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-primary">Contact</h3>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:contact@nivora.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@nivora.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nivora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
