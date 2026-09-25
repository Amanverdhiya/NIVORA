import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 flex items-center justify-center relative z-10">
        <section className="py-12 w-full">
          <Card className="max-w-2xl mx-auto border-border/60 shadow-xl bg-card/80 backdrop-blur-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                Have questions, suggestions, or want to collaborate with Nivora? We&apos;d love to hear from you!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
                <a
                  href="mailto:contact.nivora@gmail.com"
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-muted/40 border border-border/60 hover:border-primary/50 hover:bg-muted/70 transition-all group"
                >
                  <Mail className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">Email Us</span>
                  <span className="text-xs text-muted-foreground mt-1">contact.nivora@gmail.com</span>
                </a>

                <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-muted/40 border border-border/60">
                  <MapPin className="h-8 w-8 text-accent mb-2" />
                  <span className="font-semibold text-sm">Headquarters</span>
                  <span className="text-xs text-muted-foreground mt-1">New Delhi, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
