import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import QRCode from 'qrcode';

import TextField from '@mui/material/TextField';

export default function BasicTextFields() {

  const [username, setUsername] = React.useState(''); // initial empty input
  const [src, setSrc] = React.useState('');

  const generate = () => {
    QRCode.toDataURL(`https://github.com/${username}`).then(setSrc)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="username" 
        variant="outlined"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button 
        variant="text"
        sx={{ background: 'lightblue' }}
        onClick={generate}
      >
        generate
      </Button>

      <img alt='qrcode' src={src} />
    </Box>
  );
}