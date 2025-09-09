"use client";

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TechStacksSection } from '@/components/TechStacksSection';


import pt from "@/locales/pt.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const translations = { pt, en, es };

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");

  const t = translations[lang];

  //Initialize dark mode from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved) {
        setDarkMode(JSON.parse(saved));
      } else {
        // Check system preference
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    } catch (error){
        console.log('Error loading dark mode preference:', error);
    }
}, []);

  // Apply dark mode class to document
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (error) {
      console.log('Error saving dark mode preference:', error);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => scrollToSection('projetos');
  const scrollToContact = () => scrollToSection('footer');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      {/*<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>*/}

      {/* Main Content */}
      <main>
        
        {/* Hero Section */}
        <HeroSection t={t}
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />

        {/* TechStacksSection */}
        <TechStacksSection t={t}/>

      </main>

    </div>
  );
}
