import { Box } from '@mui/material';
import React from 'react';
import DataTable from 'react-data-table-component';
import Footer from './Footer';
import { useThemeContext } from '../ThemeContext';

const columns = [
  { name: 'Level', selector: row => row.level, sortable: true },
  { name: 'No Of Link', selector: row => row.noOfLink, sortable: true },
  { name: 'Give Amount', selector: row => row.giveAmount, sortable: true },
  { name: 'Take Amount', selector: row => row.takeAmount, sortable: true },
  {
    name: 'Give Help',
    selector: row => row.giveHelp,
    cell: row => <a href={row.giveHelp} target="_blank" rel="noopener noreferrer">View Link</a>,
  },
  {
    name: 'Take Help',
    selector: row => row.takeHelp,
    cell: row => <a href={row.takeHelp} target="_blank" rel="noopener noreferrer">View Link</a>,
  },
];

const data = [
  { id: 1, level: 1, noOfLink: 2, giveAmount: 200, takeAmount: 400, giveHelp: '#', takeHelp: '#' },
  { id: 2, level: 2, noOfLink: 4, giveAmount: 300, takeAmount: 1200, giveHelp: '#', takeHelp: '#' },
  { id: 3, level: 3, noOfLink: 8, giveAmount: 600, takeAmount: 4800, giveHelp: '#', takeHelp: '#' },
  { id: 4, level: 4, noOfLink: 16, giveAmount: 2000, takeAmount: 32000, giveHelp: '#', takeHelp: '#' },
  { id: 5, level: 5, noOfLink: 32, giveAmount: 4000, takeAmount: 128000, giveHelp: '#', takeHelp: '#' },
  { id: 6, level: 6, noOfLink: 64, giveAmount: 8000, takeAmount: 512000, giveHelp: '#', takeHelp: '#' },
  { id: 7, level: 7, noOfLink: 128, giveAmount: 16000, takeAmount: 2048000, giveHelp: '#', takeHelp: '#' },
  { id: 8, level: 8, noOfLink: 256, giveAmount: 32000, takeAmount: 8192000, giveHelp: '#', takeHelp: '#' },
  { id: 9, level: 9, noOfLink: 512, giveAmount: 64000, takeAmount: 32768000, giveHelp: '#', takeHelp: '#' },
  { id: 10, level: 10, noOfLink: 1024, giveAmount: 128000, takeAmount: 131072000, giveHelp: '#', takeHelp: '#' },
  { id: 11, level: 11, noOfLink: 2048, giveAmount: 256000, takeAmount: 524288000, giveHelp: '#', takeHelp: '#' },
  { id: 12, level: 12, noOfLink: 4096, giveAmount: 512000, takeAmount: 2097152000, giveHelp: '#', takeHelp: '#' },
];

const LevelWiseLinkChart = () => {
    const { darkMode } = useThemeContext();

    const customStyles = {
        header: {
            style: {
                backgroundColor: darkMode ? 'bg-gray-900' : '#fff',
                color: darkMode ? '#fff' : '#000',
            },
        },
        headRow: {
            style: {
                backgroundColor: darkMode ? '#333' : '#fff',
                color: darkMode ? '#fff' : '#000',
            },
        },
        rows: {
            style: {
                backgroundColor: darkMode ? '#444' : '#f7f7f7',
                color: darkMode ? '#fff' : '#000',
                '&:nth-of-type(odd)': {
                    backgroundColor: darkMode ? '#3b3b3b' : '#fff',
                },
            },
        },
    };

    return (
        <div className='mt-5'>
            <Box className={`p-8 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}style={{ 
                margin: "0 16px 30px 16px",
                borderRadius: "15px",
                border: "none",
                boxShadow: "0 4px 24px 0 rgba(0, 0, 0, .08)",
                marginBottom: "50px"
            }}>
                <DataTable
                    title="Level Wise Link Chart"
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={customStyles}
                />
            </Box>
            <Footer />
        </div>
    );
};

export default LevelWiseLinkChart;
