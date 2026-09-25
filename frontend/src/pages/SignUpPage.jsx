import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { User, Building } from 'lucide-react';

export default function SignUpPage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    alert(`Account registration initiated as ${role}. Complete setup will be available in the upcoming release.`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <Card className="w-full max-w-sm border-border/60 shadow-xl bg-card/90 backdrop-blur-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join Nivora
            </CardTitle>
            <CardDescription>
              First, tell us who you are.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => handleRoleSelection('Renter')} className="w-full" size="lg">
              <User className="mr-2 h-5 w-5" />
              Join as a Student / Renter
            </Button>
            <Button onClick={() => handleRoleSelection('Owner')} variant="outline" className="w-full" size="lg">
              <Building className="mr-2 h-5 w-5" />
              Join as a Property Owner
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
