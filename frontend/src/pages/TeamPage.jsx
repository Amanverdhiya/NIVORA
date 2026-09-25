import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Ayush Kumar',
    role: 'Team Leader / Tech Specialist',
    avatarUrl: 'https://i.ibb.co/RpdSB9cF/me.jpg',
    avatarFallback: 'AK',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ayush-kumar-562666346',
      github: '#',
    },
  },
  {
    name: 'Aanchal Chaudhary',
    role: 'Tech Specialist',
    avatarUrl: 'https://i.ibb.co/XZ8529X7/ji.jpg',
    avatarFallback: 'AC',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aanchal-chaudhary-bb3a8030a',
      github: '#',
    },
  },
  {
    name: 'Avneet Singh',
    role: 'UI/UX Designer',
    avatarUrl: 'https://i.ibb.co/4ZzqPLTw/Whats-App-Image-2025-09-18-at-21-14-08-8624a829.jpg',
    avatarFallback: 'AS',
    socials: {
      linkedin: 'https://www.linkedin.com/in/avneet-singh-810908321',
      github: '#',
    },
  },
  {
    name: 'Anirudh Kanwat',
    role: 'Integration Expert',
    avatarUrl: 'https://i.ibb.co/gMjyf40c/Whats-App-Image-2025-09-18-at-21-14-07-d1f702a9.jpg',
    avatarFallback: 'AK',
    socials: {
      linkedin: 'https://www.linkedin.com/in/anirudh-kanwat-12822832a',
      github: '#',
    },
  },
  {
    name: 'Aman',
    role: 'Content Specialist',
    avatarUrl: 'https://i.ibb.co/395QmxKW/Whats-App-Image-2025-09-21-at-00-39-21-217a464d.jpg',
    avatarFallback: 'A',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aman-verdiya-561095325',
      github: '#',
    },
  },
  {
    name: 'Vishwas Shukla',
    role: 'Content Specialist',
    avatarUrl: 'https://i.ibb.co/LdLw6DGK/Whats-App-Image-2025-09-20-at-10-44-44-170dc01f.jpg',
    avatarFallback: 'VS',
    socials: {
      linkedin: 'https://www.linkedin.com/in/vishwas-shukla-002898331',
      github: '#',
    },
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 relative z-10">
        <section className="py-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            The passionate students and builders making accommodation discovery seamless.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-border/60 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader className="items-center pb-2">
                  <Avatar className="h-24 w-24 mb-4 overflow-hidden ring-2 ring-primary/20">
                    <AvatarImage
                      src={member.avatarUrl}
                      alt={member.name}
                      className={cn('object-cover', {
                        'scale-150': member.name === 'Avneet Singh',
                        'scale-150 -translate-y-2': member.name === 'Anirudh Kanwat',
                        'scale-[2] -translate-y-4 -translate-x-2': member.name === 'Aman',
                      })}
                    />
                    <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4 pt-2">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
