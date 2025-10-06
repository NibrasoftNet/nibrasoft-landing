import {
  ArrowUpIcon,
  BookIcon,
  BoxesIcon,
  HomeIcon,
  MenuIcon,
  MoveUpRightIcon,
  SettingsIcon,
} from 'lucide-react';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import LanguageSelector from './language-selector';
import { useTranslation } from 'react-i18next';
import BotIcon from './icons/bot-icon';
import { motion } from 'motion/react';

export type NavItemType = {
  name: string;
  element: string;
  icon: ReactElement;
};

const navLinks: NavItemType[] = [
  {
    name: 'home',
    element: 'nibras-welcome',
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    name: 'experience',
    element: 'nibras-exp',
    icon: <BoxesIcon className="w-6 h-6" />,
  },
  {
    name: 'services',
    element: 'nibras-comparison',
    icon: <SettingsIcon className="w-6 h-6" />,
  },
  {
    name: 'insights',
    element: 'nibras-insights',
    icon: <BookIcon className="w-6 h-6" />,
  },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll style change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Hero visibility tracking
    const hero = document.getElementById('nibras-welcome');
    if (!hero) return;

    heroRef.current = hero;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      {
        root: null,
        threshold: 0.5, // visible when at least 50% of hero is in view
      }
    );

    observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        dir="ltr"
        className={`sticky flex items-center justify-center top-0 left-0 w-full z-50 transition-all duration-300 px-4 max-w-[1400px] ${
          isScrolled ? 'shadow-md backdrop-blur-md py-2' : 'py-2'
        }`}
      >
        <div className="flex items-center justify-between w-full h-full p-4 max-w-[1400px] sticky top-0">
          <img
            src="/images/nibras-long-logo-image.png"
            alt="nibras-logo"
            className="h-20"
          />
          <ul className="hidden md:flex flex-1 items-center justify-center gap-10">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                className="text-white text-lg capitalize relative cursor-pointer electric-underline"
                onClick={() => scrollToSection(link.element)}
                whileHover="hover"
                initial="initial"
              >
                {t(link.name)}

                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 bottom-[-2px] h-[8px] w-full"
                  style={{
                    transformOrigin: 'left',
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'><polyline points='0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10' fill='none' stroke='%23FFFFFF' stroke-width='2'/></svg>")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '100px 10px',
                  }}
                  variants={{
                    initial: { scaleX: 0, opacity: 0, backgroundPositionX: 0 },
                    hover: {
                      scaleX: 1,
                      opacity: 1,
                      backgroundPositionX: [0, 20],
                      transition: {
                        scaleX: { duration: 0.3, ease: 'easeOut' },
                        opacity: { duration: 0.2 },
                        backgroundPositionX: {
                          repeat: Infinity,
                          ease: 'linear',
                          duration: 0.2, // speed of the electricity wave
                        },
                      },
                    },
                  }}
                />
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-4 items-center">
            <LanguageSelector />
            <button className="hidden md:flex gap-1 uppercase cursor-pointer justify-center items-center rounded-full px-2 py-0.5 border-2 border-gray-500 hover:bg-gray-600 backdrop-blur-lg text-white">
              <BotIcon className="size-10" />
              <span>{t('contact-btn')}</span>
              <MoveUpRightIcon className="size-6" />
            </button>
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="md:hidden uppercase rounded-full px-4 py-2 border-2 border-primary text-primary"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {openMenu && (
        <ul className="w-screen h-screen flex flex-col items-center justify-start gap-10 pt-10 bg-white">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="w-full flex items-center justify-center"
            >
              <button
                onClick={() => {
                  scrollToSection(link.element);
                  setOpenMenu(false);
                }}
                className="flex items-center justify-between gap-4 w-1/2"
              >
                {link.icon}
                <span className="capitalize">{t(link.name)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Scroll to Hero Button */}
      {!isHeroVisible && (
        <button
          onClick={() => scrollToSection('nibras-welcome')}
          className="fixed bottom-6 cursor-pointer right-6 bg-primary text-white p-4 rounded-full shadow-lg transition hover:scale-105"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default NavBar;
