import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FolderIcon from '@mui/icons-material/Folder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from './Footer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useThemeContext } from '../ThemeContext';

const menuItems = [
  { text: 'Referral Team', icon: <PersonIcon /> },
  { text: 'Level Wise Team', icon: <CreditCardIcon /> },
  { text: 'Top Receivers', icon: <AttachMoneyIcon /> },

];

const Network = () => {
    const { darkMode } = useThemeContext();

  return (
    <>
    <div style={{marginBottom:"100px"}} className='mb-5'>
    <div className="flex justify-center items-center w-full mt-5 mb-5 ">
      <List style={{width:"100%"}}  className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} rounded-lg shadow-lg p-4  `}>
        {menuItems.map((item, index) => (
          <ListItem key={index} button className="rounded-lg mb-2 last:mb-0">
            <ListItemIcon className="text-green-500">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {index !== 0 && index !== 7 && (
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default Network;