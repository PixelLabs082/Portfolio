import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main>
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
