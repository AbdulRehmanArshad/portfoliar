import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Potfolio from '../container/Potfolio';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path="" element={<Potfolio/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;