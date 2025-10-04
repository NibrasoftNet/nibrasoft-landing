import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

type languageOption = { language: string; code: string };

const languageOptions: languageOption[] = [
  {
    language: '🇬🇧',
    code: 'en',
  },
  { language: '🇫🇷', code: 'fr' },
  { language: '🇹🇳', code: 'ar' },
];

const LanguageSelector = () => {
  // Set the initial language from i18next's detected or default language
  const [language, setLanguage] = useState(i18next.language);

  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    console.log('ewqaaer', e.target.value);
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage); // Update language in i18next
  };

  useEffect(() => {
    document.body.dir = i18n.dir(); //sets the body to ltr or rtl
  }, [i18n, i18n.language]);

  return (
    <select
      id="language"
      value={language}
      onChange={handleLanguageChange}
      className="appearance-none text-white p-2 border-2 border-gray-300 rounded-xl shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
         dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 dark:focus:ring-opacity-50"
    >
      {languageOptions.map(({ language, code }, key) => (
        <option value={code} key={key}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
