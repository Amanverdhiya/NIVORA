import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchForm from '@/components/search/SearchForm';
import AboutUs from '@/components/home/AboutUs';
import Help from '@/components/home/Help';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Find Your Home Away From Home. Discover the best PGs, hostels, and flats near your college with AI-powered insights.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 25);

    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 relative z-10">
        <section className="text-center w-full py-16 md:py-24 flex flex-col justify-center items-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold font-headline leading-none mb-4 bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text animate-background-pan bg-[200%_auto]">
            Nivora
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto italic min-h-[48px] md:min-h-[56px]">
            {typedText}
          </p>
        </section>

        <section className="py-6 mb-8">
          <SearchForm />
        </section>

        <Help />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
