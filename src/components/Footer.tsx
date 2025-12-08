import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { LanguageProps } from "@/types/LanguageProps";
export function FooterSection({ t }: LanguageProps) {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl bg-gradient-to-r from-[#59B7D4] to-[#E4AAA9] bg-clip-text text-transparent mb-2">
              {t.footer.title}
            </h3>
            <p className="text-muted-foreground">{t.footer.subtitle} </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/fab1omendes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-[#59B7D4] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/fab1omendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-[#59B7D4] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="mailto:fabiogomendes@gmail.com"
              className="group flex items-center gap-2 text-muted-foreground hover:text-[#59B7D4] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">{t.footer.btmail}</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            {t.footer.copyright}
          </p>
        </div>

        {/* Back to top button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-[#59B7D4] transition-colors duration-200 group"
          >
            <span> {t.footer.bthome}</span>
            <div className="w-4 h-4 rounded-full border-2 border-current group-hover:border-[#59B7D4] transition-colors duration-200">
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-current group-hover:border-b-[#59B7D4] mx-auto mt-1"></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
