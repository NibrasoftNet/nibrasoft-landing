import type { ReactElement } from 'react';
import BezzerIcon from './icons/BezzerIcon';
import GearsIcon from './icons/GearsIcon';
import ArrowsIcon from './icons/ArrowsIcon';

type ServiceType = {
  title: string;
  description: string;
  Icon: ReactElement;
};

export const servicesList: ServiceType[] = [
  {
    title: 'Design',
    description:
      'We craft intuitive, user-centered interfaces that elevate your product’s usability and brand identity.',
    Icon: <BezzerIcon />,
  },
  {
    title: 'Development',
    description:
      'Our developers build scalable and secure applications using the latest technologies.',
    Icon: <GearsIcon />,
  },
  {
    title: 'Deployment/Maintenance',
    description:
      'We handle infrastructure, CI/CD, monitoring, and updates—so your app stays fast, secure, and available.',
    Icon: <ArrowsIcon />,
  },
];

const Services = () => {
  return (
    <section
      id="nibras-services"
      className="section-landing bg-gray-200 min-h-[300px] justify-center"
    >
      <div className="section-landing-container flex-col gap-6 py-6">
        <div className="section-landing-title">
          <h1 className="section-landing-header-1">Services</h1>
          <p className="section-landing-paragraph text-center">
            We offer end-to-end services that bring your vision to life—designed
            to delight, built to last, and maintained for scale.
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
                {serv.title}
              </span>
              <p className="font-semibold text-lg w-72 text-black text-center">
                {serv.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
