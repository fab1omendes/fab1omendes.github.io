import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

import { LanguageProps } from "@/types/LanguageProps";

export function EducationSection({ t }: LanguageProps) {
    const education = t.education.list; 

    return (
        <section id="educationSection" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                        {t.education.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.education.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((education, index) => (
                        <Card
                            key={index}
                            className={`p-6 hover:shadow-lg transition-all duration-300 border-l-4 ${education.highlight
                                ? "border-[#59B7D4] bg-gradient-to-r from-[#59B7D4]/5 to-transparent"
                                : "border-[#E4AAA9] hover:border-[#59B7D4]/50"
                                }`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl ${education.highlight
                                        ? "bg-[#59B7D4]/20 text-[#59B7D4]"
                                        : "bg-[#E4AAA9]/20 text-[#E4AAA9]"
                                        }`}
                                >
                                    <GraduationCap className="h-6 w-6" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    {education.highlight && (
                                        <div className="mb-2">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-[#59B7D4]/20 text-[#59B7D4] border border-[#59B7D4]/30">
                                                <div className="w-2 h-2 bg-[#59B7D4] rounded-full mr-1 animate-pulse" />
                                                Cursando
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="text-lg lg:text-xl text-foreground mb-2 leading-tight">
                                        {education.title}
                                    </h3>

                                    <p
                                        className={`mb-3 ${education.highlight
                                            ? "text-[#59B7D4]"
                                            : "text-muted-foreground"
                                            }`}
                                    >
                                        {education.institution}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{education.period}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                        <GraduationCap className="h-5 w-5 text-[#59B7D4]" />
                        <span className="text-muted-foreground">
                            {t.education.additionalInf}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
