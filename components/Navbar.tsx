import {
  ArrowUpIcon,
  BookIcon,
  BoxesIcon,
  HomeIcon,
  MenuIcon,
  SettingsIcon,
} from 'lucide-react';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

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
    element: 'nibras-services',
    icon: <SettingsIcon className="w-6 h-6" />,
  },
  {
    name: 'insights',
    element: 'nibras-insights',
    icon: <BookIcon className="w-6 h-6" />,
  },
];

const Navbar = () => {
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
        className={`sticky flex items-center justify-between top-0 left-0 w-full z-50 transition-all duration-300 px-4 ${
          isScrolled ? 'shadow-md backdrop-blur-md py-2' : 'py-2'
        }`}
      >
        <div className="flex items-center justify-between w-full h-full p-4 max-w-[1400px] sticky top-0">
          <img
            src="/images/nibras-long-logo-dark-image.png"
            alt="nibras-logo"
            className="h-20"
          />
          <ul className="hidden md:flex w-full items-center justify-center gap-4">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="capitalize hover:underline underline-offset-2 cursor-pointer"
                onClick={() => scrollToSection(link.element)}
              >
                {t(link.name)}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center">
            <LanguageSelector />
            <button className="hidden md:flex uppercase w-24 cursor-pointer justify-center items-center rounded-xl px-4 py-2 border-2 border-primary text-primary">
              {t('contact-btn')}
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

export default Navbar;
