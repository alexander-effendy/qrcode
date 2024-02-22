import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '97%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
      	sx={{ width: '100%' }}

        id="outlined-basic" 
        label="username" 
        variant="outlined" 
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}