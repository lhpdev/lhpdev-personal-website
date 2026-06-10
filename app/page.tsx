import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Interests from '@/components/Interests';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#06070d] transition-colors duration-300">
      <Navbar />
      <Hero />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-28">
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Interests />
      </div>
    </main>
  );
}
