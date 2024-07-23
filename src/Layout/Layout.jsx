import React from 'react'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import ImageSwitchProduct from '../components/ImageSwitchProduct'
import { useThemeContext } from '../ThemeContext';

function Layout() {
  const { darkMode } = useThemeContext();
  return (
   
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <ImageSwitchProduct />
      <Dashboard />
      <Footer />
   

    </div>
  )
}

export default Layout