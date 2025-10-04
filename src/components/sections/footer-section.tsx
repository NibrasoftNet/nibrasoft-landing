import { useTranslation } from 'react-i18next';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../ui/input-group';
import { ArrowRightIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import LocationIcon from '../icons/location-icon';
import MobilePhoneIcon from '../icons/mobile-phone-icon';
import EnvelopeIcon from '../icons/envelope-icon';

const FooterSection = () => {
  const { t } = useTranslation();

  const footerList = [
    {
      id: 1,
      description: t('footer.contact.address'),
      icon: <LocationIcon />,
    },
    {
      id: 2,
      description: t('footer.contact.phone'),
      icon: <MobilePhoneIcon />,
    },
    {
      id: 3,
      description: t('footer.contact.email'),
      icon: <EnvelopeIcon />,
    },
  ];

  return (
    <section className="flex w-screen justify-center bg-[linear-gradient(16deg,#311824_1%,#0f0f1a_9%,#0e0f1c_36%,#20204a_70%,#000000_92%)]">
      <div className="flex flex-col size-full justify-center max-w-[1400px] p-10 gap-10">
        <img
          src="/images/nibras-long-logo-image.png"
          alt="nibras-logo"
          className="w-72"
        />
        <div className="w-full gap-10 flex flex-col md:flex-row items-center justify-between">
          <h1 className="font-extrabold text-7xl text-white text-center w-1/2 md:text-start">
            {t('footer.title')}
          </h1>
          <InputGroup className="w-full md:w-1/2 h-12 bg-white">
            <InputGroupInput
              className="!text-lg"
              placeholder={t('footer.emailPlaceholder')}
              readOnly
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                className="bg-[#1266FF] rounded-md size-10"
                aria-label="Copy"
                title="Copy"
                size="icon-xs"
                onClick={() => {
                  console.log('copy to clipboard');
                }}
              >
                <ArrowRightIcon className="text-white size-6" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {footerList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-500/20 hover:translate-y-2 transition-all ease-in-out group p-4 text-white col-span-1 border border-white backdrop-blur-lg flex items-center justify-center rounded-md"
            >
              <div className="w-1/3 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-start w-2/3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-10 border-t border-white">
          <p className="text-white text-lg text-center md:text-start w-full">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center justify-center text-white gap-6">
            <FacebookIcon className="size-10 border rounded-md p-2 hover:bg-slate-400 hover:text-black" />
            <InstagramIcon className="size-10 border rounded-md p-2 hover:bg-slate-400 hover:text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
