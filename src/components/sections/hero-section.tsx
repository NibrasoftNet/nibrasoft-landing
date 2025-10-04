import NavBar from '../nav-bar';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nibras-welcome"
      className="min-h-screen items-center w-[100svw] bg-[linear-gradient(16deg,#9A3757_0%,#000_7%,#212048_57%,#20204A_73%,#000_100%)] flex flex-col overflow-x-hidden"
    >
      <NavBar />
      <div className="flex flex-col items-center mt-10 size-full flex-1 text-white gap-10">
        <div className="flex w-full justify-center items-end">
          <span className="text-3xl font-light italic">
            {t('hero-title-1')}
            &nbsp;
            <strong className="text-7xl font-bold ">
              {t('hero-sub-title-1')}
            </strong>
          </span>
          <img src="/images/nibras-logo-only.png" alt="Nibras-logo" />
        </div>
        <span className="text-3xl font-light italic">
          {t('hero-title-2')}
          &nbsp;
          <strong className="text-7xl font-bold ">
            {t('hero-sub-title-2')}
          </strong>
        </span>
        <div className="flex flex-col items-start relative">
          <strong className="text-7xl font-bold relative z-10">
            {t('hero-title-3')}
          </strong>
          <img
            src="/images/hero-logo.png"
            alt="Nibras-logo"
            className="absolute -bottom-20 -left-20 mt-2 w-[150px] object-contain animate-spin z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
