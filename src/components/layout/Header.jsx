import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import AuthButton from './AuthButton';
import { Button } from '@/components/ui/button';
import HelpDialog from './HelpDialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0">
          <img
            src="https://i.ibb.co/V0b773kg/Whats-App-Image-2025-09-21-at-00-02-33-d48e50d9-removebg-preview.png"
            alt="Nivora Logo"
            className="w-14 h-10 object-contain -ml-2"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent -ml-2">
            Nivora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/team">
            <Button variant="ghost">Our Team</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact Us</Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="ghost">Marketplace</Button>
          </Link>
          <HelpDialog />
          <AuthButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link to="/">
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start w-full">
                      Home
                    </Button>
                  </SheetClose>
                </Link>
                <Link to="/team">
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start w-full">
                      Our Team
                    </Button>
                  </SheetClose>
                </Link>
                <Link to="/contact">
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start w-full">
                      Contact Us
                    </Button>
                  </SheetClose>
                </Link>
                <div className="mt-4 border-t pt-4 flex flex-col gap-2">
                  <Link to="/marketplace">
                    <SheetClose asChild>
                      <Button variant="ghost" className="justify-start w-full">
                        Marketplace
                      </Button>
                    </SheetClose>
                  </Link>
                  <HelpDialog />
                  <div className="mt-2">
                    <AuthButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
