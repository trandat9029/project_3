import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Pagination, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import { Filter } from '@mui/icons-material';
import FilterViewer from '../components/FilterViewer';


ListPage.propTypes = {
  
};

function ListPage() {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
      limit: 9,
      total: 16,
      page: 1,
    });
    const [filters, setFilters] = useState({
      _page: 1,
     _limit: 9,
     sortBy: 'price',
     order: 'asc',
     categorySlug: '',
    });

    useEffect(() =>{
        (async() =>{
            try {
                // Gọi tất cả sản phẩm (limit cao lên)
                const { data } = await productApi.getAll({ ...filters, _limit: 194, _page: 1 });

                // Lọc theo giá trước
                const filteredByPrice = data.filter((product) => {
                  const { price_gte, price_lte } = filters;
                  const matchMin = price_gte ? product.price >= price_gte : true;
                  const matchMax = price_lte ? product.price <= price_lte : true;
                  return matchMin && matchMax;
                });

                // Sắp xếp
                const sorted = [...filteredByPrice].sort((a, b) => {
                  const { sortBy, order } = filters;
                  return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
                });

                //  Tính phân trang thủ công
                const page = filters._page || 1;
                const limit = filters._limit || 9;
                const start = (page - 1) * limit;
                const pagedList = sorted.slice(start, start + limit);

                setProductList(pagedList);
                setPagination({
                  page,
                  limit,
                  total: sorted.length, 
                });
            } catch (error) {
                console.log('Failed to fetch product list', error);
            }
            
            setLoading(false);
        })();
      },[filters]);

    const handlePageChange = (e, page) =>{
      setFilters(prevFillters =>({
        ...prevFillters,
        _page: page, 
      }))
    } 

    const handleSortChange = (newSortValue) =>{
      const [sortBy, order] = newSortValue.split(':');
      setFilters(prevFillters =>({
        ...prevFillters,
        sortBy,
        order, 
      }))
    } 

    const handleFiltersChange = (newFilters) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        ...newFilters,
        _page: 1,
      }));
      console.log('Filters changed:', newFilters); 
    };

    const setNewFilters = (newFilters) => {
      setFilters(newFilters);
    };

  return (
    <>
        <Box>
          <Container width={'100%'} >
            <Grid container display='grid' gap={2} sx={{gridTemplateColumns: 'repeat(12, 1fr)'}} >
              {/* Cột trái */}
              <Grid sx={{ gridColumn: 'span 3' }}>
                <Paper elevation={0}>
                  <ProductFilters filters={filters} onChange={handleFiltersChange} />
                </Paper>
              </Grid>

              {/* Cột phải */}        
              <Grid sx={{ gridColumn: 'span 9'}}>
                <Paper elevation={0}  >
                  <ProductSort currentSort={`${filters.sortBy}:${filters.order}`} onChange={handleSortChange} />
                  <FilterViewer filters={filters} onChange={setNewFilters} />
                  {loading ? (
                    <ProductSkeletonList length={12} />
                  ) : (
                    <ProductList data={productList} />
                  )}
                  
                  <Box sx={{display:'flex', justifyContent:'center', flexFlow: 'row nowrap', m: 4, pb: 2}} >
                    <Pagination color='primary' size='small' 
                      count={Math.ceil(pagination.total / pagination.limit)} 
                      page={pagination.page}
                      onChange={handlePageChange}
                    ></Pagination>                  
                  </Box>

                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Box>
    </>
  );
}

export default ListPage;