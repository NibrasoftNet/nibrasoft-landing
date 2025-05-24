import type { ReactElement } from 'react';
import BezzerIcon from './icons/BezzerIcon';
import GearsIcon from './icons/GearsIcon';
import ArrowsIcon from './icons/ArrowsIcon';
import { useTranslation } from 'react-i18next';

type ServiceType = {
  title: string;
  description: string;
  Icon: ReactElement;
};

const servicesList: ServiceType[] = [
  {
    title: 'service-design',
    description: 'service-design-paragraph',
    Icon: <BezzerIcon />,
  },
  {
    title: 'service-dev',
    description: 'service-dev-paragraph',
    Icon: <GearsIcon />,
  },
  {
    title: 'service-deploy',
    description: 'service-deploy-paragraph',
    Icon: <ArrowsIcon />,
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nibras-services"
      className="section-landing bg-gray-200 min-h-[300px] justify-center"
    >
      <div className="section-landing-container flex-col gap-6 py-6">
        <div className="section-landing-title">
          <h1 className="section-landing-header-1">{t('service-title-1')}</h1>
          <p className="section-landing-paragraph text-center">
            {t('service-paragraph')}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-4 max-w-[1400px] w-full">
          {servicesList.map((serv: ServiceType) => (
            <li
              key={serv.title}
              className={`text-white col-span-1 w-full rounded-xl flex flex-col gap-2 items-center justify-center`}
            >
              {serv.Icon}
              <span className="text-xl font-bold text-primary">
                {t(serv.title)}
              </span>
              <p className="font-semibold text-lg w-72 text-black text-center">
                {t(serv.description)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
