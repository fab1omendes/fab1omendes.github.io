import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react";


// argument for translations
type LanguageProps = {
    t: typeof import("@/locales/pt.json") 
};

export function ExperienceSection({ t }: LanguageProps) {
    const experience = t.experiences.list; // array from experiences of JSON

    return(
        <section id="experiencesection" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                        {t.experiences.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.experiences.subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#59B7D4] to-[#E4AAA9]"></div>

                    <div className="space-y-12">
                        {experience.map((experiences, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? `md:flex-row` : `md:flex-row-reverse`
                                }`}
                            >
                                {/*Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-[#59B7D4] rounded-full border-4 border-background shadow-lg"></div>

                                {/**Content */}
                                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? `md:pr-8` : `md:pl-8`}`}>
                                    <div className={`bg-card rounded-lg p-6 shadow-lg border-l-4 
                                    ${experiences.highlight ? `border-[#59B7D4]` : `border-[#E4AAA9]`
                                    } hover:shadow-xl transition-shadow duration-300 `}>

                                    {/**Period Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm
                                        ${experiences.highlight
                                            ? `bg-[#59B7D4]/20 text-[#59B7D4]`
                                            : `bg-[#E4AAA9]/20 text-[#E4AAA9]`
                                        }`}>
                                            {experiences.period}
                                        </span>
                                    </div>

                                    {/**Job Title */}
                                    <h3 className={`text-xl lg:text-2xl mb-4 
                                    ${experiences.highlight ? `text-[#59B7D4]` : `text-foreground`   
                                    }`}>
                                        {experiences.title}
                                    </h3>

                                    {/**Description */}
                                    <p className="text-muted-foreground leading-relaxed">
                                        {experiences.description}
                                    </p>

                                    {/**Highlight Badge */}
                                    {experiences.highlight && (
                                        <div className="mt-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded bg-[#59B7D4]/10 text-[#59B7D4] text-xs border border-[#59B7D4]/20">
                                                Atual
                                            </span>
                                        </div>
                                    )}
                                    </div>
                                </div>

                                {/**Space for alternating layout */}
                                <div className="hidden md:block flex-1"></div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}