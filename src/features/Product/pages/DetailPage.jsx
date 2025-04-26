import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import ProductThumbnail from '../components/ProductThumbnail';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';




function DetailPage() {

    const { productId } = useParams();
    const {product, loading} = useProductDetail(productId);

    if(loading){
        return <Box>Loading</Box>
    }

  return (
    <>
      <Box padding='0 200px'>
        <Container >
            <Paper elevation={0} >
                <Grid container display='grid' sx={{gridTemplateColumns: 'repeat(12, 1fr)'}}>
                    <Grid sx={{ gridColumn: 'span 5', padding: '12px', borderRight: '1px solid #ccc' }}>
                        <ProductThumbnail product={product}/>
                    </Grid>
                    <Grid sx={{ gridColumn: 'span 7', padding: '12px' }}>
                        <ProductInfo product={product}/>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
      </Box>
    </>
  );
}

export default DetailPage;