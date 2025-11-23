import { CheckCircle } from 'lucide-react';
import { Card } from './ui/card';


import { LanguageProps } from "@/types/LanguageProps";


export function SkillsSection({ t }: LanguageProps) {
    return (
        <section id="skillsSection" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                        {t.skills.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {t.skills.list.map((skill, index) => (
                        <Card
                            key={index}
                            className={`p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${skill.color} border-2 border-transparent hover:border-[#59B7D4]/30`}
                            style={{
                                animationDelay: `${index * 200}ms`,
                            }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-16 h-16 bg-background rounded-full flex items-center justify-center text-2xl shadow-lg">
                                    {t.skills.list[index].icon}
                                </div>

                                <div className="flex-1">
                                    {/* Category Title */}
                                    <h3 className="text-xl lg:text-2xl text-foreground mb-3 leading-tight">
                                        {t.skills.list[index].title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {t.skills.list[index].subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {skill.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="flex items-start gap-3 group"
                                    >
                                        <CheckCircle className="h-5 w-5 text-[#59B7D4] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                        <span className="text-foreground group-hover:text-[#59B7D4] transition-colors duration-200">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Highlight Bar */}
                            <div className="mt-6 h-1 bg-gradient-to-r from-[#59B7D4] to-[#E4AAA9] rounded-full opacity-60"></div>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-lg border border-border">
                        <div className="w-3 h-3 bg-[#59B7D4] rounded-full animate-pulse"></div>
                        <span className="text-muted-foreground">
                            {t.skills.additionalInf}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}