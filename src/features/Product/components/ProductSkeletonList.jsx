import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton'; 
import { Box, Grid } from '@mui/material'; 


ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};
  
ProductSkeletonList.defaultProps = {
    length: 6,
};
  



function ProductSkeletonList({length}) {
  return (
    <>
        <Box > 
            <Grid container display='grid' sx={{gridTemplateColumns: 'repeat(12, 1fr)'}} >
                {Array.from(new Array(length)).map((item, index) => (
                <Grid  key={index} sx={{ gridColumn: 'span 4' }}    >
                    <Box padding={1}>
                        <Skeleton variant="rectangular" width="100%" height={118} />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Box>
    </>
  );
}

export default ProductSkeletonList;