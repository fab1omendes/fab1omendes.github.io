"use client";

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react';
import "country-flag-icons/react/3x2";
import { BR, ES, GB } from "country-flag-icons/react/3x2";

import { HeroSection } from '@/components/HeroSection';
import { TechStacksSection } from '@/components/TechStacksSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';

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
  const switchLang = (l: "pt" | "en" | "es") => setLang(l);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => scrollToSection('projectsection');
  const scrollToContact = () => scrollToSection('footer');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <div className='fixed top-4 right-4 flex items-center gap-2 z-50'>

        {/*Tema */}
        <Button variant="ghost" size="sm" onClick={toggleDarkMode}
        className="flex items-center justify-center transition-colors duration-300">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
        </Button>

        {/*Idioma */}
        <Button variant={lang === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLang("pt")}
        className='flex items-center justify-center transition-colors duration-300'>
          <BR title='Português' className='w-5 h-5 rounded-sm'></BR>
        </Button>
        <Button variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLang("en")}
        className='flex items-center justify-center transition-colors duration-300'>
          <GB title='English' className='w-5 h-5 rounded-sm'></GB>
        </Button>
        <Button variant={lang === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLang("es")}
        className='flex items-center justify-center transition-colors duration-300'>
          <ES title='Español' className='w-5 h-5 rounded-sm'></ES>
        </Button>

      </div>

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

        {/* ProjectsSection */}
        <ProjectsSection t={t}/>

        {/* Experience */}
        <ExperienceSection t={t} />


      </main>

    </div>
  );
}
