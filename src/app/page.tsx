import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
