import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import ListPage from './pages/ListPage';
import Box from '@mui/material/Box';
ProductFeature.propTypes = {
  
};

function ProductFeature(props) {
  return (
    <>
        <Box pt={4}>
        <ListPage/>
        </Box>
    </>
  );
}

export default ProductFeature;