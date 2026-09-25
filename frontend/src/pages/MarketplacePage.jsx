import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hammer, Sparkles } from 'lucide-react';

export default function MarketplacePage() {
  const jcbImage = PlaceHolderImages.find((img) => img.id === 'jcb-construction');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col items-center justify-center text-center relative z-10">
        <div className="py-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Under Construction
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Soon you will be able to buy verified student essentials, furniture, electronics, and book local services such as electricians, plumbers, and laundry.
          </p>
          {jcbImage && (
            <div className="relative w-full max-w-md h-56 mx-auto rounded-xl overflow-hidden bg-card/50 border border-border/40 p-4 flex items-center justify-center">
              <img
                src={jcbImage.imageUrl}
                alt={jcbImage.description}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
