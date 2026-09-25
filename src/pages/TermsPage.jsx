import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 max-w-4xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Nivora, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Description of Service</h2>
            <p>
              Nivora provides an informational discovery and review platform for student accommodations including PGs, hostels, and flats. We do not own or manage these properties directly.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. User Responsibility</h2>
            <p>
              Users are advised to conduct their own physical inspection and due diligence before making advance payments or entering into rental contracts with property owners.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
