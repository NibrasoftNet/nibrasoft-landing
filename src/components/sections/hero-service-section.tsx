import NavBar from '../nav-bar';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { ReactElement } from 'react';
import GraphicDesignIcon from '@/components/icons/graphic-design-icon';
import CodeIcon from '@/components/icons/code-icon';
import ASquareIcon from '@/components/icons/a-square-icon';

type ServiceCardProps = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: ReactElement;
  bachGroundColor: string;
};

const serviceCards: ServiceCardProps[] = [
  {
    id: 1,
    titleKey: 'services-section.cards.webdesign.title',
    descriptionKey: 'services-section.cards.webdesign.description',
    icon: <GraphicDesignIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
  {
    id: 2,
    titleKey: 'services-section.cards.appdev.title',
    descriptionKey: 'services-section.cards.appdev.description',
    icon: <CodeIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
  {
    id: 3,
    titleKey: 'services-section.cards.marketing.title',
    descriptionKey: 'services-section.cards.marketing.description',
    icon: <ASquareIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
];

const HeroServiceSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="nibras-welcome"
        className="relative min-h-screen w-[100svw] flex flex-col items-center"
      >
        {/* Responsive SVG Background */}
        <div
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/masks/hero-mask.svg")',
          }}
        />

        <NavBar />

        <div className="flex flex-col items-center mt-10 size-full flex-1 text-white gap-10 relative z-10">
          <div className="flex w-full justify-center items-end">
            <span className="text-3xl font-light italic">
              {t('hero-title-1')}&nbsp;
              <strong className="text-7xl font-bold">
                {t('hero-sub-title-1')}
              </strong>
            </span>
            <img src="/images/nibras-logo-only.png" alt="Nibras-logo" />
          </div>

          <span className="text-3xl font-light italic">
            {t('hero-title-2')}&nbsp;
            <strong className="text-7xl font-bold">
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

      <section
        id="nibras-services"
        className="w-screen min-h-screen flex flex-col items-center justify-center gap-5 bg-[#F2F1F6]"
      >
        <div className="flex flex-col items-center p-0 md:p-10 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
            <img
              className="size-60"
              alt="Mask group"
              src="/images/nibras-logo-only.png"
            />
            <div className="flex flex-col justify-center gap-2 text-center md:text-left">
              <h2 className="font-bold text-5xl">
                {t('services-section.title.line1')}
              </h2>
              <h2 className="font-bold text-5xl">
                {t('services-section.title.line2')}
              </h2>
              <p className="max-w-md mt-4 text-lg">
                {t('services-section.description')}
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10 max-w-[1400px]">
              {serviceCards.map((service) => (
                <li key={service.id} className="w-full flex">
                  <Card
                    className={`flex flex-col w-full p-4 h-[550px] ${service.bachGroundColor}`}
                  >
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="font-bold text-3xl text-black">
                      {t(service.titleKey)}
                    </CardTitle>
                    <CardContent className="mt-2 w-full text-left p-0 text-lg">
                      {t(service.descriptionKey)}
                    </CardContent>
                  </Card>
                </li>
              ))}

              <li className="w-full flex">
                <Card className="relative flex flex-col w-full p-4 h-[550px] bg-[#1266FF]">
                  <div className="p-2">
                    <CardTitle className="text-5xl font-bold text-white">
                      {t('services-section.cards.ai.line1')}
                    </CardTitle>
                    <CardTitle className="text-5xl font-bold text-white">
                      {t('services-section.cards.ai.line2')}
                    </CardTitle>
                    <CardTitle className="text-5xl font-bold text-white">
                      {t('services-section.cards.ai.line3')}
                    </CardTitle>
                  </div>
                  <img
                    className="absolute bottom-5 -right-5 w-[250px] h-[370px] object-cover"
                    alt="Robot"
                    src="/images/robot-image.png"
                  />
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroServiceSection;
