import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, LinearProgress, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import ProductThumbnail from '../components/ProductThumbnail';
import { Route, Routes, useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReview from '../components/ProductReview';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/cartSlice';




function DetailPage() {

    const { productId } = useParams();
    const {product, loading} = useProductDetail(productId);
    const dispatch = useDispatch();

    if(loading){
        return <Box sx={{position: 'fixed', top: 0, left: 0, width: '100%'}}>
          <LinearProgress />
        </Box>
    }

    const handleAddToCartSubmit = ({quantity})=>{
      // console.log('Form submit: ', formValues);
      const action = addToCart({
        id: product.id,
        product,
        quantity,
      });
      console.log(action)
      dispatch(action);
    }

  return (
    <>
      <Box padding='0 150px'>
        <Container >
            <Paper elevation={0} >
                <Grid container display='grid' sx={{gridTemplateColumns: 'repeat(12, 1fr)'}}>
                    <Grid sx={{ gridColumn: 'span 5', padding: '12px', borderRight: '1px solid #ccc' }}>
                        <ProductThumbnail product={product}/>
                    </Grid>
                    <Grid sx={{ gridColumn: 'span 7', padding: '12px' }}>
                        <ProductInfo product={product}/>
                        <AddToCartForm onSubmit={handleAddToCartSubmit} />
                    </Grid>
                </Grid>
            </Paper>
            <ProductMenu/>
            <Routes>
              <Route index element={<ProductDescription product={product} />} />
              <Route path="additional" element={<ProductAdditional product={product} />} />
              <Route path="reviews" element={<ProductReview product={product} />} />
            </Routes>
        </Container>
      </Box>
    </>
  );
}

export default DetailPage;