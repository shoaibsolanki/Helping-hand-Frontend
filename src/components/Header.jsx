import { ArrowBack } from '@mui/icons-material';
import { List } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../ThemeContext';

function Header() {
  const { darkMode } = useThemeContext();

  return (
    <List className={`flex justify-center items-center p-4 ${darkMode ? 'bg-black' : 'bg-white'} shadow-lg `}>
      
      <ArrowBack className='mx-3' style={{color:"black"}}/>
      <img src="/image@2x.png" alt="Logo" className="h-12" />
    </List>
  );
}

export default Header;
