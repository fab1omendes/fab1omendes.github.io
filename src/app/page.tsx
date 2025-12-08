"use client";

import { useState, useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStacksSection } from "@/components/TechStacksSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/Footer";

import type { Translation } from "@/locales";
import { translations } from "@/locales";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");

  const t: Translation = translations[lang];

  //Inicializar modo dark a partir do localStorage ou preferencia do sistema
  useEffect(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved) {
        setDarkMode(JSON.parse(saved));
      } else {
        // Check system preference
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    } catch (error) {
      console.log("Error loading dark mode preference:", error);
    }
  }, []);

  // Aplicar a classe dark mode ao documento
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (error) {
      console.log("Error saving dark mode preference:", error);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const switchLang = (l: "pt" | "en" | "es") => setLang(l);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => scrollToSection("projectSection");
  const scrollToContact = () => scrollToSection("aboutSection");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        lang={lang}
        switchLang={switchLang}
        t={t}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          t={t}
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />

        {/* TechStacksSection */}
        <TechStacksSection t={t} />

        {/* ProjectsSection */}
        <ProjectsSection t={t} />

        {/* Experience */}
        <ExperienceSection t={t} />

        {/* Education */}
        <EducationSection t={t} />

        {/* Skills */}
        <SkillsSection t={t} />

        {/* Footer */}
        <FooterSection t={t} />
      </main>
    </div>
  );
}
