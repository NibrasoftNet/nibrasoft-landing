import { useTranslation } from 'react-i18next';

const WebApplications = () => {
  const { t } = useTranslation();

  return (
    <section className="section-landing">
      <div className="section-landing-grid-1">
        <div className="section-landing-grid-text-1">
          <h1 className="section-landing-header-1">{t('web-title-1')}</h1>
          <h2 className="section-landing-header-2">{t('web-title-2')}</h2>
          <p className="section-landing-paragraph">{t('web-paragraph')}</p>
        </div>
        <img src="/images/web-app-bg.png" alt="Web Logo" />
      </div>
    </section>
  );
};

export default WebApplications;
