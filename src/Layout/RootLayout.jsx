import React from 'react';
import CustomBottomNavigation from '../components/CustomBottomNavigation';
import Header from '../components/Header';
import { useThemeContext } from '../ThemeContext';

export default function RootLayout({ children }) {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} mx-auto`}>
      <Header />
      <main className="w-full max-w-[1600px] mx-auto px-4" style={{marginBottom:"100px"}}>
        {children}
      </main>
      <CustomBottomNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
