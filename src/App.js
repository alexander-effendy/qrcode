import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages'
import { Box } from '@mui/material';

// import { SearchProvider } from './components/SearchContext';

function App() {
  return (
    <BrowserRouter>
      <Box>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider> */}
        <Pages />
      </Box>
    </BrowserRouter>
  );
}

export default App;
