import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import WebApplications from '../components/WebApplications';
import MobileApplications from '../components/MobileApplications';
import AiApplications from '../components/AiApplications';
import Services from '../components/Services';
import Insight from '../components/Insight';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

function App() {
  return (
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
  );
}

export default App;
