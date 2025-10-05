import { Suspense } from 'react';
import i18next from 'i18next';
import Loading from './components/loading';
import HeroServiceSection from './components/sections/hero-service-section';
import FeaturesSection from '@/components/sections/features-section';
import ComparisonSection from '@/components/sections/comparison-section';
import FeaturesTwoSection from '@/components/sections/features-two-section';
import OurTeamSection from '@/components/sections/our-team-section';
import FooterSection from './components/sections/footer-section';

function App() {
  const currentLanguage = i18next.language;
  console.log('current lang', currentLanguage);
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col items-center min-h-screen w-screen overflow-x-hidden">
        <HeroServiceSection />
        <FeaturesSection />
        <ComparisonSection />
        <FeaturesTwoSection />
        <OurTeamSection />
        <FooterSection />
      </main>
    </Suspense>
  );
}

export default App;
