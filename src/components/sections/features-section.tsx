import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CircleArrowDownIcon, CircleArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FeaturedProjectProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const featuredProjects: FeaturedProjectProps[] = [
  {
    id: 1,
    title: 'Linkbook',
    description: 'linkbook-description',
    imageUrl: '/images/project/linkbook-image.png',
    url: 'https://linkbook.nibrasoft.com/',
  },
  {
    id: 2,
    title: 'Tachkila',
    description: 'tachkila-description',
    imageUrl: '/images/project/tachkila-image.jpg',
    url: 'https://tachkila.nibrasoft.com/',
  },
  {
    id: 3,
    title: 'Moorish',
    description: 'moorish-description',
    imageUrl: '/images/project/moorish-image.jpg',
    url: 'https://moorish.nibrasoft.com/',
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  // ✅ Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const project = featuredProjects[currentIndex];

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[1400px]">
        {/* Text Section */}
        <div className="flex flex-col w-full items-center md:items-start justify-center gap-4">
          <div className="flex flex-col gap-2 text-center md:text-start">
            <h1 className="text-5xl font-bold">{t('feature-title')}</h1>
            <h2 className="text-5xl font-bold">{t('feature-sub-title')}</h2>
          </div>

          <div className="flex flex-col gap-2 w-full mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center md:text-start gap-2"
              >
                <h4 className="text-xl font-bold">{t(project.title)}</h4>
                <p className="text-xl font-normal max-w-xl">
                  {t(project.description)}
                </p>
                <a className="text-lg font-semibold hover:underline underline-offset-2 mt-4 text-blue-500">{project.url}</a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 items-center">
            <button onClick={prevProject} aria-label="Previous project">
              <CircleArrowUpIcon className="size-12 hover:text-blue-600 transition-colors" />
            </button>
            <span className="font-bold text-xl">
              Project&nbsp;{currentIndex + 1}/{featuredProjects.length}
            </span>
            <button onClick={nextProject} aria-label="Next project">
              <CircleArrowDownIcon className="size-12 hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={project.imageUrl}
              src={project.imageUrl}
              alt={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[1000px] object-contain rounded-xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
