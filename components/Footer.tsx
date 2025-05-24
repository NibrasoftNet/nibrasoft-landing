import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="section-landing h-1/2 bg-[#1F2B3D] justify-center">
      <img
        src="/images/nibras-long-logo-image.png"
        alt="nibras-logo"
        className="w-72"
      />
      <h1 className="section-landing-header-1 text-white text-center">
        {t('footer-title-1')}
      </h1>
      <p className="text-white text-lg text-center mb-2">
        {t('footer-paragraph')}
      </p>
    </section>
  );
};

export default Footer;
