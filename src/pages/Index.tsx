import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const About = lazy(() => import('@/components/About'));
const AcademicProfile = lazy(() => import('@/components/AcademicProfile'));
const Skills = lazy(() => import('@/components/Skills'));
const Experience = lazy(() => import('@/components/Experience'));
const Research = lazy(() => import('@/components/Research'));
const Conferences = lazy(() => import('@/components/Conferences'));
const Workshops = lazy(() => import('@/components/Workshops'));
const Contributions = lazy(() => import('@/components/Contributions'));
const Awards = lazy(() => import('@/components/Awards'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-40" />}>
              <About />
              <AcademicProfile />
              <Skills />
              <Experience />
              <Research />
              <Conferences />
              <Workshops />
              <Contributions />
              <Awards />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
