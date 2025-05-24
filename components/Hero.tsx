import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="nibras-welcome" className="section-landing min-h-screen gap-4">
      <Navbar />
      <div className="section-landing-container h-full">
        <div className="section-landing-grid-1">
          <div className="section-landing-grid-text-1">
            <h1 className="section-landing-header-1">{t('hero-title-1')}</h1>
            <h1 className="section-landing-header-2">{t('hero-title-2')}</h1>
            <p className="section-landing-paragraph">{t('hero-paragraph')}</p>
          </div>
          <div className="col-span-1">
            <img src="/images/hero-image.png" alt="Hero Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
