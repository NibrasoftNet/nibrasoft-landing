import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardTitle } from '../ui/card';
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

const ServiceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nibras-services"
      className="w-screen min-h-screen flex flex-col items-center justify-center gap-5 bg-[#F2F1F6]"
    >
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
    </section>
  );
};

export default ServiceSection;
