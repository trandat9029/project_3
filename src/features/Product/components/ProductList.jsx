import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton'; 
import { Box, Grid } from '@mui/material'; 
import Product from './Product';


ProductList.propTypes = {
    data: PropTypes.array,
};
  
ProductList.defaultProps = {
    data: [],
};
  



function ProductList({data}) {
  return (
    <>
        <Box > 
            <Grid container display='grid' sx={{gridTemplateColumns: 'repeat(12, 1fr)'}} >
                {data.map((product) => (
                    <Grid  key={product.id} sx={{ gridColumn: 'span 4' }}    >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </>
  );
}

export default ProductList;