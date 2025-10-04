import { useTranslation } from 'react-i18next';

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex bg-[#1466FF] w-screen h-1/2 justify-center items-center">
      <div className="section-landing-grid-1 w-full h-full">
        <div className="col-span-1 flex justify-center items-center">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-left text-white text-6xl font-bold">
              {t('cta-title-3')}
            </h1>
            <h1 className="text-left text-white text-6xl font-bold">
              {t('cta-title-4')}
            </h1>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-white text-lg mb-2">{t('cta-title-1')}</h4>
            <div className="flex rounded-md bg-white overflow-hidden">
              <input
                className="px-4 py-2 outline-none"
                placeholder={`${t('cta-title-2')}...`}
              />
              <button className=" cursor-pointer hover:bg-[#F8485F]/90 bg-[#F8485F] text-white py-2 px-4">
                {t('cta-btn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
