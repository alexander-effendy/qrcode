import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import TextField from '../components/Textfield';

const Home = () => {
  const navigate = useNavigate();
	return (
		<Box>
			This is home
			<Button
				onClick={() => navigate('/cibai')}
			>Cibai</Button>
			<br/>
			Enter a github username
			<TextField />
		</Box>
		
	)
}

export default Home;
