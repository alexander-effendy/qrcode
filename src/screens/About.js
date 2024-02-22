import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';

const Cibai = () => {
	const navigate = useNavigate();
	return (
		<Box>
			This is about page
			<Button onClick={() => navigate('/')}>Back to home</Button>
		</Box>
	)
}

export default Cibai;