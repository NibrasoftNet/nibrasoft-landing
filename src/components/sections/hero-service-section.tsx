import NavBar from '../nav-bar';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import type { ReactElement } from 'react';
import GraphicDesignIcon from '@/components/icons/graphic-design-icon';
import CodeIcon from '@/components/icons/code-icon';
import ASquareIcon from '@/components/icons/a-square-icon';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type ServiceCardProps = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: ReactElement;
  bachGroundColor: string;
};

const serviceCards: ServiceCardProps[] = [
  {
    id: 1,
    titleKey: 'services-section.cards.webdesign.title',
    descriptionKey: 'services-section.cards.webdesign.description',
    icon: <GraphicDesignIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
  {
    id: 2,
    titleKey: 'services-section.cards.appdev.title',
    descriptionKey: 'services-section.cards.appdev.description',
    icon: <CodeIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
  {
    id: 3,
    titleKey: 'services-section.cards.marketing.title',
    descriptionKey: 'services-section.cards.marketing.description',
    icon: <ASquareIcon />,
    bachGroundColor: 'bg-[#FFFFFF]',
  },
];

const HeroServiceSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const startLogoRef = useRef<HTMLImageElement>(null);
  const endLogoRef = useRef<HTMLImageElement>(null);

  const [startPos, setStartPos] = useState({ x: 0, y: 0, width: 0 });
  const [endPos, setEndPos] = useState({ x: 0, y: 0, width: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'center start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Parallax for background
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Update positions on resize
  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current && startLogoRef.current && endLogoRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const startRect = startLogoRef.current.getBoundingClientRect();
        const endRect = endLogoRef.current.getBoundingClientRect();

        // Calculate positions relative to the container
        setStartPos({
          x: startRect.left - containerRect.left,
          y: startRect.top - containerRect.top,
          width: startRect.width,
        });
        setEndPos({
          x: endRect.left - containerRect.left,
          y: endRect.top - containerRect.top,
          width: endRect.width,
        });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    // Also update after a small delay to ensure layout is settled
    setTimeout(updatePositions, 100);
    setTimeout(updatePositions, 400);

    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Interpolate position
  const x = useTransform(smoothProgress, [0, 1], [startPos.x, endPos.x]);
  const y = useTransform(smoothProgress, [0, 1], [startPos.y, endPos.y]);
  const width = useTransform(
    smoothProgress,
    [0, 1],
    [startPos.width, endPos.width]
  );
  const rotateY = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Half-circle curve effect
  // We add an offset to X or Y based on a sine wave
  // Let's curve outwards to the left (negative x) or right?
  // Start is roughly center, End is left.
  // So it moves left. A half circle could arc further left or up/down.
  // Let's try arcing "out" (left)
  const arcOffset = useTransform(smoothProgress, (v) => {
    return Math.sin(v * Math.PI) * -100; // -100px arc to the left
  });

  const finalX = useTransform(
    [x, arcOffset],
    (values: number[]) => values[0] + values[1]
  );

  return (
    <div ref={containerRef} className="relative w-full sticky top-0">
      {/* Animated Logo */}
      <motion.img
        src="/images/nibras-logo-only.png"
        alt="Nibras Animated Logo"
        className="absolute z-50 pointer-events-none"
        style={{
          left: 0,
          top: 0,
          x: finalX,
          y,
          width,
          rotateY,
          display: startPos.width === 0 ? 'none' : 'block', // Hide until positions calculated
        }}
      />

      <section
        id="nibras-welcome"
        className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      >
        {/* Responsive SVG Background with Parallax */}
        <motion.div
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("/masks/hero-mask.svg")',
            y: bgY,
          }}
        />
        <NavBar />
        <div className="flex flex-col items-center mt-10 size-full flex-1 text-white gap-10 relative z-10 px-4 text-center">
          <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-end gap-4">
            <span className="text-3xl md:text-5xl font-light italic">
              {t('hero-title-1')}&nbsp;
              <strong className="text-5xl md:text-7xl font-bold block md:inline">
                {t('hero-sub-title-1')}
              </strong>
            </span>
            {/* Placeholder for Start Position */}
            <img
              ref={startLogoRef}
              src="/images/nibras-logo-only.png"
              alt="Nibras-logo"
              className="opacity-0 w-[50px] md:w-[80px]"
            />
          </div>

          <span className="text-3xl md:text-5xl font-light italic">
            {t('hero-title-2')}&nbsp;
            <strong className="text-5xl md:text-7xl font-bold block md:inline">
              {t('hero-sub-title-2')}
            </strong>
          </span>
          <div className="flex flex-col items-center relative">
            <strong className="text-5xl md:text-7xl font-bold relative z-10">
              {t('hero-title-3')}
            </strong>
            <motion.img
              src="/images/hero-logo.png"
              alt="Nibras-logo"
              className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 mt-2 w-[100px] md:w-[150px] object-contain z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </section>

      <section
        id="nibras-services"
        className="w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-[#F2F1F6] py-20"
      >
        <div className="flex flex-col items-center p-0 md:p-10 max-w-[1400px] w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 w-full">
            {/* Placeholder for End Position */}
            <img
              ref={endLogoRef}
              className="size-40 md:size-60 opacity-0"
              alt="Mask group"
              src="/images/nibras-logo-only.png"
            />
            <div className="flex flex-col justify-center gap-2 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bold text-4xl md:text-5xl">
                  {t('services-section.title.line1')}
                </h2>
                <h2 className="font-bold text-4xl md:text-5xl">
                  {t('services-section.title.line2')}
                </h2>
                <p className="max-w-md mt-4 text-base md:text-lg text-gray-600">
                  {t('services-section.description')}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center w-full mt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 max-w-[1400px] w-full">
              {serviceCards.map((service, index) => (
                <motion.li
                  key={service.id}
                  className="w-full flex"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`flex flex-col w-full p-6 h-auto min-h-[400px] md:h-[550px] ${service.bachGroundColor} hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="font-bold text-2xl md:text-3xl text-black mb-4">
                      {t(service.titleKey)}
                    </CardTitle>
                    <CardContent className="w-full text-left p-0 text-base md:text-lg text-gray-700">
                      {t(service.descriptionKey)}
                    </CardContent>
                  </Card>
                </motion.li>
              ))}

              <motion.li
                className="w-full flex"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="relative flex flex-col w-full p-6 h-auto min-h-[400px] md:h-[550px] bg-[#1266FF] overflow-hidden group">
                  <div className="p-2 relative z-10">
                    <CardTitle className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {t('services-section.cards.ai.line1')}
                    </CardTitle>
                    <CardTitle className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {t('services-section.cards.ai.line2')}
                    </CardTitle>
                    <CardTitle className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {t('services-section.cards.ai.line3')}
                    </CardTitle>
                  </div>
                  <motion.img
                    className="absolute bottom-0 right-0 w-[200px] md:w-[250px] object-cover"
                    alt="Robot"
                    src="/images/robot-image.png"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroServiceSection;
