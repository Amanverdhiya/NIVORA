import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 max-w-4xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when creating an account, posting reviews, or reaching out via our contact form.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. How We Use Information</h2>
            <p>
              We use collected information to maintain and improve our discovery services, enhance security, and deliver verified student housing reviews.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Data Security</h2>
            <p>
              We prioritize the protection of your personal information and implement industry-standard practices to prevent unauthorized access.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
