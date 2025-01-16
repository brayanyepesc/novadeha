import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
};
