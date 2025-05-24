import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import WebApplications from '../components/WebApplications';
import MobileApplications from '../components/MobileApplications';
import AiApplications from '../components/AiApplications';
import Services from '../components/Services';
import Insight from '../components/Insight';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import { Suspense } from 'react';
import i18next from 'i18next';
import Loading from '../components/Loading';

function App() {
  const currentLanguage = i18next.language;
  console.log('current lang', currentLanguage);
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col items-center min-h-screen">
        <Hero />
        <Statistics />
        <WebApplications />
        <MobileApplications />
        <AiApplications />
        <Services />
        <Insight />
        <section className="section-landing h-screen">
          <Cta />
          <Footer />
        </section>
      </main>
    </Suspense>
  );
}

export default App;
