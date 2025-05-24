import { useTranslation } from 'react-i18next';

const Insight = () => {
  const { t } = useTranslation();

  return (
    <section id="nibras-insights" className="section-landing">
      <div className="section-landing-grid-1">
        <div className="section-landing-grid-text-1">
          <h1 className="section-landing-header-1">{t('insight-title-1')}</h1>
          <h2 className="section-landing-header-2">{t('insight-title-2')}</h2>
          <p className="section-landing-paragraph">{t('insight-paragraph')}</p>
        </div>
        <img src="/images/insight-bg.png" alt="Insights Logo" />
      </div>
    </section>
  );
};

export default Insight;
