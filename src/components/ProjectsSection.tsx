import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react";


// argument for translations
type LanguageProps = {
    t: typeof import("@/locales/pt.json") 
};

export function ProjectsSection({ t }: LanguageProps) {
    const project = t.projects.list; // array from projects of JSON

    return (
        <section id="projectsection" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Div Title e subtitle */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                        {t.projects.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.projects.subtitle}
                    </p>
                </div>
                {/* Div Cards Projects */}
                <div className="space-y-8">
                    {project.map((project, index) => (
                        <Card
                            key={index}
                            className={`overflow-hidden border-2 ${project.borderColor} hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${project.color}`}
                        >
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/*Project Info */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl lg:text-3xl mb-4 text-foreground">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <h4 className="text-sm text-muted-foreground mb-3">
                                                {t.projects.msgstacks}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.stacks.map((stack) => (
                                                    <span
                                                        key={stack}
                                                        className="px-3 py-1 bg-background/80 text-foreground rounded-full text-sm border border-border"
                                                    >
                                                        {stack}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/*Action Buttons */}
                                        <div className="flex gap-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-[#59B7D4] text-[#59B7D4] hover:bg-[#59B7D4] hover:text-white"
                                                asChild
                                            >
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-4 w-4 mr-2" />
                                                    Github
                                                </a>
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="bg-[#59B7D4] hover:bg-[#59B7D4]/70 text-white"
                                                asChild
                                            >
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4 mr-2"/>
                                                    {t.projects.btdemo}
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/*Project Visual */}
                                    <div className="lg:w-80 flex-shrink-0">
                                        <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border border-border">
                                            <div className="text-center text-muted-foreground">
                                                <div className="text-4xl mb-2">💻</div>
                                                <p className="text-sm">{t.projects.title} {project.title}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    ))
                    }
                </div>
            </div>
        </section>   
    )
}