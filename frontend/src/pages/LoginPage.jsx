import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LogIn, UserPlus } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <Card className="w-full max-w-sm border-border/60 shadow-xl bg-card/90 backdrop-blur-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome Back!
            </CardTitle>
            <CardDescription>
              Login or create an account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => alert('Authentication system demo mode active.')} className="w-full">
              <LogIn className="mr-2 h-4 w-4" />
              Login with Google
            </Button>
            <Button onClick={() => navigate('/signup')} variant="outline" className="w-full">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
