import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const features = [
  { key: 'uiux', color: 'bg-blue-500 text-white' },
  { key: 'webdev', color: 'bg-green-500 text-white' },
  { key: 'mobiledev', color: 'bg-purple-500 text-white' },
  { key: 'infrastructure', color: 'bg-orange-500 text-white' },
  { key: 'aiintegration', color: 'bg-pink-500 text-white' },
];

const FeaturesTwo = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide between features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="nibras-insights"
      className="w-full flex flex-col items-center bg-[#F2F1F6] p-0 md:p-10 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white font-extrabold text-5xl md:text-7xl capitalize mb-10 text-center"
      >
        {t('hero-title-3')}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-2xl shadow-lg bg-gradient-to-br from-white via-white to-blue-100 flex flex-col md:flex-row items-center max-w-[1400px] w-full p-6 md:p-10"
      >
        {/* Text & Features */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <h2 className="text-blue-500 font-bold text-3xl md:text-5xl text-center md:text-left">
            {t('featuresTwo.title')}
          </h2>

          {/* Feature Badges */}
          <ul className="flex w-full flex-wrap gap-2 justify-center md:justify-start">
            {features.map((feature, index) => (
              <Badge
                key={feature.key}
                className={`text-base md:text-lg rounded-full cursor-pointer transition-all duration-300 ${index === activeIndex
                  ? feature.color
                  : 'bg-gray-200 text-gray-600'
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                {t(`featuresTwo.${feature.key}.title`)}
              </Badge>
            ))}
          </ul>

          {/* Active Feature Description */}
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-md text-base md:text-lg font-semibold mt-4 text-center md:text-left text-gray-700"
          >
            {t(`featuresTwo.${features[activeIndex].key}.description`)}
          </motion.p>
        </div>

        {/* Image */}
        <img
          src="/images/gears-image.png"
          alt="feature two"
          className="w-full md:w-[550px] mt-6 md:mt-0 object-contain"
        />
      </motion.div>

      {/* Bottom Bars */}
      <ul className="flex gap-4 mt-8">
        {features.map((_, index) => (
          <li
            key={index}
            className={`w-12 md:w-16 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturesTwo;
