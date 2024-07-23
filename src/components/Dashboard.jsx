import React, { useState } from 'react';
import { Button, Box, Grid, Paper, Typography, Snackbar, Alert } from '@mui/material';

const stats = [
  { label: 'Total Give Help', value: '1100.00', color: 'bg-green-400' },
  { label: 'Total Received Help', value: '2000.00', color: 'bg-red-400' },
  { label: 'Total Pending Give Help', value: '1022000.00', color: 'bg-yellow-400' },
  { label: 'Total Pending Received Help', value: '1961800.00', color: 'bg-blue-400' },
  { label: 'Direct Income', value: '800.00', color: 'bg-blue-300' },
  { label: 'Total Team', value: '86', color: 'bg-green-300' },
];

function Dashboard() {
  const [open, setOpen] = useState(false);
  const referralLink = 'http://smrotibank.in/Home/UserRegistration?userid=BH6198591656';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setOpen(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <main className="flex-grow">
      {/* <Box className="relative h-64 w-full bg-gray-300">
        <img src="/background.jpg" alt="Dashboard" className="h-full w-full object-cover" />
        <Box className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full text-white">
          <Typography variant="h5">StickyMobile</Typography>
          <Typography variant="subtitle1">The Menu Everyone Requested.</Typography>
        </Box>
      </Box> */}
      
      <Grid container spacing={2} className="p-4">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper className={`p-4 ${stat.color}`}>
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="h4" className="mt-2">{stat.value}</Typography>
              <Typography variant="body2" className="mt-2">More info</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Box className="p-8 text-center" style={{ 
        margin: "0 16px 30px 16px",
        borderRadius: "15px",
        border: "none",
        boxShadow: "0 4px 24px 0 rgba(0, 0, 0, .08)"
      }}>
        <h2 variant="h5" className='text-center fw-bold mb-3'>Share Referral Link</h2>
        <p className='boxed-text-xl mt-n3'>{referralLink}</p>
        <Button 
          variant="contained" 
          style={{
            textTransform: 'none',
            color: '#fff',
            fontSize: 12,
            background: '#ef613d',
            border: 'none',
            borderRadius: '20px',
            '&:hover': { background: '#ef613d' },
            width: 195,
            height: 35,
          }} 
          className="mt-2"
          onClick={copyToClipboard}
        >
          COPY LINK
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </main>
  );
}

export default Dashboard;
