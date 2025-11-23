"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { BR, ES, GB } from "country-flag-icons/react/3x2";

import type { Translation } from "@/locales";


interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    lang: "pt" | "en" | "es";
    switchLang: (l: "pt" | "en" | "es") => void;
    t: Translation;

}

export function Navbar({ darkMode, toggleDarkMode, lang, switchLang, t }: NavbarProps) {
    const [activeSection, setActiveSection] = useState("aboutSection");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: "aboutSection", label: t.navitems.about },
        { id: "techSection", label: t.navitems.stacks },
        { id: "projectSection", label: t.navitems.projects },
        { id: "experienceSection", label: t.navitems.experience },
        { id: "educationSection", label: t.navitems.education },
        { id: "skillsSection", label: t.navitems.skills },
    ];

    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    // Detectar seção ativa ao rolar
    useEffect(() => {
        const handleScroll = () => {
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <button
                        onClick={() => scrollToSection("aboutSection")}
                        className="text-[#59B7D4] text-lg font-semibold hover:opacity-80 transition"
                    >
                        Fábio Mendes
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-3 py-1 transition-all ${activeSection === item.id
                                    ? "text-[#59B7D4] border-b-2 border-[#59B7D4]"
                                    : "text-foreground hover:text-[#59B7D4]"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center gap-3">

                        {/* IDIOMAS — exatamente como você queria */}
                        <Button
                            variant={lang === "pt" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => switchLang("pt")}
                        >
                            <BR className="w-5 h-5 rounded-sm" />
                        </Button>

                        <Button
                            variant={lang === "en" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => switchLang("en")}
                        >
                            <GB className="w-5 h-5 rounded-sm" />
                        </Button>

                        <Button
                            variant={lang === "es" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => switchLang("es")}
                        >
                            <ES className="w-5 h-5 rounded-sm" />
                        </Button>

                        {/* Dark Mode — igual ao seu */}
                        <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                            {darkMode ? (
                                <span className="text-yellow-400">☀️</span>
                            ) : (
                                <span className="text-gray-700">🌙</span>
                            )}
                        </Button>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? (
                                    <X className="w-6 h-6 text-[#59B7D4]" />
                                ) : (
                                    <Menu className="w-6 h-6 text-[#59B7D4]" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-3 transition ${activeSection === item.id
                                    ? "bg-[#59B7D4] text-white"
                                    : "hover:bg-[#59B7D4]/20 hover:text-[#59B7D4]"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
