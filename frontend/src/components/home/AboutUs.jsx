import React from 'react';

export default function AboutUs() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-muted-foreground mt-2">Learn more about our mission.</p>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          Nivora was born from a simple idea: to make finding a place to live near college easier for students. We are a team of passionate individuals who understand the challenges of finding the perfect PG, mess, or flat. Our mission is to provide a seamless, AI-powered platform that offers reliable listings and genuine reviews, helping you find your home away from home with confidence.
        </p>
      </div>
    </section>
  );
}
