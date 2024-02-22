import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Cibai from './screens/Cibai';

const Pages = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home token={token} setToken={setToken} />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/cibai" element={<Cibai />} />
      </Routes>
    </>
  );
};

export default Pages
