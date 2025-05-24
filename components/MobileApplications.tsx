import { useTranslation } from 'react-i18next';

const MobileApplications = () => {
  const { t } = useTranslation();

  return (
    <section className="section-landing">
      <div className="section-landing-grid-1">
        <img src="/images/mobile-app-bg.png" alt="Mobile Logo" />
        <div className="section-landing-grid-text-1">
          <h1 className="section-landing-header-1">{t('mobile-title-1')}</h1>
          <h2 className="section-landing-header-2">{t('mobile-title-2')}</h2>
          <p className="section-landing-paragraph">{t('mobile-paragraph')}</p>
        </div>
      </div>
    </section>
  );
};

export default MobileApplications;
