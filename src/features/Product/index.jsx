import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import ListPage from './pages/ListPage';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
ProductFeature.propTypes = {
  
};

function ProductFeature() {
  return (
    <>
        <Box pt={4}>
        <Outlet />
        </Box>
    </>
  );
}

export default ProductFeature;