import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';


ListPage.propTypes = {
  
};

function ListPage(props) {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        (async() =>{
            try {
                const {data} = await productApi.getAll({ limit: 12});
                // const data = response.products || [];
                console.log('Fetched products:', data);
                setProductList(data);
            } catch (error) {
                console.log('Failed to fetch product list', error);
            }
            
            setLoading(false);
        })();
      },[]);

  return (
    <>
        <Box>
          <Container width={'100%'} >
            <Grid container display='grid' sx={{gridTemplateColumns: 'repeat(12, 1fr)'}} >
              {/* Cột trái */}
              <Grid sx={{ gridColumn: 'span 3' }}>
                <Paper elevation={0}>Left Column</Paper>
              </Grid>

              {/* Cột phải */}        
              <Grid sx={{ gridColumn: 'span 9'}}>
                <Paper elevation={0} sx={{}} >
                  {loading ? (
                    <ProductSkeletonList length={9} />
                  ) : (
                    <ProductList data={productList} />
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Box>
    </>
  );
}

export default ListPage;