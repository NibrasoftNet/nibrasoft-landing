import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CircleArrowDownIcon, CircleArrowUpIcon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

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
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    <section
      ref={containerRef}
      id="nibras-exp"
      className="flex items-center justify-center w-full min-h-screen bg-white overflow-hidden relative z-10"
    >
      <motion.div
        style={{ opacity }}
        className="flex flex-col md:flex-row items-center justify-center max-w-[1400px] w-full px-4"
      >
        {/* Text Section */}
        <div className="mt-10 md:mt-0 flex flex-col w-full items-center md:items-start justify-center gap-4 relative z-10">
          <div className="flex flex-col gap-2 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold">{t('feature-title')}</h1>
            <h2 className="text-4xl md:text-5xl font-bold">{t('feature-sub-title')}</h2>
          </div>

          <div className="flex flex-col gap-2 w-full mt-10 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center md:text-start gap-2 flex flex-col items-center md:items-start"
              >
                <h4 className="text-xl font-bold">{t(project.title)}</h4>
                <p className="text-lg md:text-xl font-normal max-w-xl text-gray-700">
                  {t(project.description)}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:underline underline-offset-2 mt-4 text-blue-500"
                >
                  {project.url}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2 items-center mt-6">
            <button onClick={prevProject} aria-label="Previous project">
              <CircleArrowUpIcon className="size-10 md:size-12 hover:text-blue-600 transition-colors" />
            </button>
            <span className="capitalize font-bold text-xl">
              {t('projects')}&nbsp;{currentIndex + 1}/{featuredProjects.length}
            </span>
            <button onClick={nextProject} aria-label="Next project">
              <CircleArrowDownIcon className="size-10 md:size-12 hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Image Section with Parallax */}
        <motion.div
          style={{ y }}
          className="flex justify-center items-center w-full md:w-auto mt-10 md:mt-0"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={project.imageUrl}
              src={project.imageUrl}
              alt={project.title}
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[800px] lg:w-[1000px] object-contain rounded-xl shadow-2xl"
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
