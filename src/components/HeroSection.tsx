import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
    onScrollToProjects: () => void;
    onScrollToContact: () => void;
    t: typeof import("@/locales/pt.json"); // argument for translations
}

export function HeroSection({ onScrollToProjects, onScrollToContact, t }: HeroSectionProps) {


    return (
        <section id="aboutsection" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#59B7D4] to-[#E4AAA9] p-2">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-300/50 flex items-center justify-center">
                                    <div className="text-6xl">🙋</div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#59b7d4] rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#E4AAA9] rounded-full animate-pulse delay-1000"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="mb-4">
                            <span className="block text-muted-foreground">{t.hero.msg1}</span>
                            <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-[#59b7d4] to-[#e4AAA9] bg-clip-text text-transparent">{t.hero.name}
                            </span>
                        </h1>

                        <h2 className="text-2xl lg:text-3xl text-foreground mb-6">{t.hero.position}</h2>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                          {t.hero.summary}  
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button 
                                onClick={onScrollToProjects}
                                className="bg-[#59b7d4] hover:bg-[#59b7d4]/70 text-white px-8 py-3"
                                size="lg"
                            >
                                {t.hero.btproject}
                            </Button>
                            <Button
                                onClick={onScrollToContact}
                                variant="outline"
                                className="border-[#E4AAA9] text-[#E4AAA9] hover:bg-[#E4AAA9] hover:text-white px-8 py-3"
                                size="lg"
                            >
                                {t.hero.btcontact}
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a 
                                href="https://github.com/fab1omendes"
                                className="text-muted-foreground hover:text-[#59B7D4] transition-colors"
                                aria-label="GitHub"
                                target="_blank"
                            >
                                <Github className="h-6 w-6"></Github>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/fab1omendes/"
                                className="text-muted-foreground hover:text-[#59B7D4] transition-colors"
                                aria-label="LinkedIn"
                                target="_blank"
                            >
                                <Linkedin className="h-6 w-6"></Linkedin>
                            </a>
                            <a 
                                href="mailto:fabiogomendes@gmail.com"
                                className="text-muted-foreground hover:text-[#59B7D4] transition-colors"
                                aria-label="Email"
                                target="_blank"
                            >
                                <Mail className="h-6 w-6"></Mail>
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    );
}