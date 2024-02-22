import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import QRCode from 'qrcode';
import TextField from '../components/Textfield';

import { typography } from '@mui/system';

const Home = () => {
  const navigate = useNavigate();

	const [username, setUsername] = React.useState(''); // initial empty input
  const [src, setSrc] = React.useState('');
  const [QRCodeInput, setQRCodeInput] = React.useState(false);

	const generate = () => {
    // check if the textfield is empty
    if (username.length === 0) {
      alert('Please enter something');
      setQRCodeInput(false);
    } else {
      QRCode.toDataURL(`https://instagram.com/${username}`).then(setSrc);
      setQRCodeInput(true);
    }
  }

	return (
		<Box
			sx={{
				background: 'lightgrey',
				padding: '10%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{ 
					border: '1px solid black', 
					borderRadius: '20px',
					display: 'flex' ,
					padding: '5%',
					backgroundColor: 'white'
				}}
			>
				{/* box pertama */}
				<Box
					sx={{ 
						padding: '5%',
						display: 'flex',
						flexDirection: 'column',
						height: '50%',

					}}
				>
					{/* This is home */}
					{/* <Button
						onClick={() => navigate('/About')}
					>About</Button> */}
					<typography style={{ fontWeight: 'bold', fontSize: '2em', marginLeft: '1.5%' }}>
						Generate QR Code for Instagram User
					</typography>
					
					<Box sx={{ backgroundColor: '', marginTop: '1%'}}>
						<TextField
							id="outlined-basic" 
							label="username" 
							variant="outlined"
							onChange={(e) => {
								setUsername(e.target.value);
								console.log(username);
							}}
						/>

						<Button 
							variant="text"
							sx={{ 
								backgroundColor: 'lightblue', 
								color: 'black', 
								border: '1px solid black', 
								width: '97%',
								marginLeft: '2%'
							}}
							onClick={generate}
						>
							generate
						</Button>
					</Box>
					
					{/*  */}
					{/*  */}
					
				</Box>

				{/* box kedua */}
				<Box
					sx={{
						padding: '1%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					{QRCodeInput && <img alt='qrcode' src={src} style={{ height: '80%'}} />}
					{QRCodeInput || 
						<Box>
							Cibai
						</Box>
					}
				</Box>
			</Box>
			
				
		</Box>
		
	)
}

export default Home;
