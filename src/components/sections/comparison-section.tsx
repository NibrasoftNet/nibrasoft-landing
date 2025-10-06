import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'features.accuratePricing', you: true, competitors: false },
    { key: 'features.highEndSolutions', you: true, competitors: false },
    { key: 'features.multidisciplineTeam', you: true, competitors: false },
    { key: 'features.longTermSupport', you: true, competitors: false },
    { key: 'features.customizedStrategies', you: true, competitors: false },
    { key: 'features.transparentCommunication', you: true, competitors: false },
    { key: 'features.scalableSolutions', you: true, competitors: false },
    { key: 'features.innovationRD', you: true, competitors: false },
  ];

  return (
    <section
      id="nibras-comparison"
      className="flex w-screen min-h-screen items-center justify-center p-10"
    >
      {/* Container with SVG background */}
      <div className="relative flex flex-col items-center p-6 w-full max-w-[1400px] rounded-2xl shadow-lg overflow-hidden">
        {/* SVG Decorative Background */}
        <div
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/masks/comparison-mask.svg")',
          }}
        />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {t('insight-title-1')}
        </h1>
        <h2 className="text-xl mb-2 text-center text-gray-300">
          {t('insight-title-2')}
        </h2>
        <p className="text-lg mb-10 text-center text-gray-300">
          {t('insight-paragraph')}
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white text-lg">
                <th className="p-4 text-left">{t('featuresTwo.title')}</th>
                <th className="p-4 text-center text-green-400">
                  {t('insight-us')}
                </th>
                <th className="p-4 text-center text-red-400">
                  {t('insight-others')}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-900/40' : 'bg-gray-800/40'
                  }`}
                >
                  <td className="p-4">{t(feature.key)}</td>
                  <td className="p-4 text-center">
                    {feature.you ? (
                      <Check className="text-green-400 inline w-6 h-6" />
                    ) : (
                      <X className="text-red-400 inline w-6 h-6" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.competitors ? (
                      <Check className="text-green-400 inline w-6 h-6" />
                    ) : (
                      <X className="text-red-400 inline w-6 h-6" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
