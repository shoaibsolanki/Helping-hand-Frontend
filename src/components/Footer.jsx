import { Box } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../ThemeContext';

function Footer() {
  const { darkMode } = useThemeContext();

  return (

<>
    <Box className={`p-8  text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} `} style={{ 
      margin: "0 16px 30px 16px",
      borderRadius: "15px",
      border: "none",
      boxShadow:" 0 4px 24px 0 rgba(0, 0, 0, .08)",
     }}>
    <footer className="p-4  flex flex-col items-center">
      <img src="/image@2x.png" alt="Logo" className="h-12" />
      <div className="mt-2 flex space-x-2">
        <a href="https://facebook.com" className="text-blue-600">Facebook</a>
        <a href="https://twitter.com" className="text-blue-400">Twitter</a>
        <a href="https://linkedin.com" className="text-blue-700">LinkedIn</a>
        <a href="https://instagram.com" className="text-pink-500">Instagram</a>
      </div>
      <p className="mt-2 text-gray-600">© Enabled 2024. All Rights Reserved.</p>
      <div className="mt-2 flex space-x-2">
        <a href="#privacy-policy" className="text-gray-600">Privacy Policy</a>
        <a href="#terms" className="text-gray-600">Terms and Conditions</a>
        <a href="#back-to-top" className="text-gray-600">Back to Top</a>
      </div>
    </footer>
    </Box>
   
    </>
  );
}

export default Footer;
