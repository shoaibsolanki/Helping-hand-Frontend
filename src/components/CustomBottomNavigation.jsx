import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import Setting from './Setting';

function CustomBottomNavigation({ toggleDarkMode, darkMode }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BottomNavigation
        style={{
          borderRadius: "15px",
          border: "none",
          boxShadow: "0 4px 24px 0 rgba(0, 0, 0, .08)",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={`fixed bottom-0 w-full ${darkMode ? 'bg-black' : 'bg-white'} shadow-md`}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          className={value === 0 ? 'text-red-500' : 'text-gray-700'}
          onClick={() => {
            setValue(0);
            navigate("/");
          }}
        />
        <BottomNavigationAction
          label="Account"
          icon={<AccountCircleIcon />}
          className={value === 1 ? 'text-red-500' : 'text-gray-700'}
          onClick={() => {
            setValue(1);
            navigate("/account");
          }}
        />
        <BottomNavigationAction
          label="Give/Take Help"
          icon={<HelpIcon />}
          className={value === 2 ? 'text-red-500' : 'text-gray-700'}
          onClick={() => {
            setValue(2);
            navigate("/givetakehelp");
          }}
        />
        <BottomNavigationAction
          label="Network"
          icon={<PeopleIcon />}
          className={value === 3 ? 'text-red-500' : 'text-gray-700'}
          onClick={() => {
            setValue(3);
            navigate("/network");
          }}
        />
        <BottomNavigationAction
          label="Setting"
          icon={<SettingsIcon />}
          className={value === 4 ? 'text-red-500' : 'text-gray-700'}
          onClick={handleShow}
        />
      </BottomNavigation>
      <Setting show={show} darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleShow={handleShow} handleClose={handleClose} />
    </>
  );
}

export default CustomBottomNavigation;
