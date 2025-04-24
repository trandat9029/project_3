import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
  filters : PropTypes.object.isRequired,
  onChange : PropTypes.func,
};

function ProductFilters({ onChange}) {

  const handleCategoryChange= (newcategorySlug)=>{
    if(!onChange) return;

    const newFilters = {
      categorySlug: newcategorySlug,
    };

    onChange(newFilters);
  }

  const handlePriceChange = (priceFilters) => {
    if (!onChange) return;
    onChange(priceFilters);
  };

  return (
    <>
        <Box>
          <FilterByCategory onChange={handleCategoryChange}/>
          <FilterByPrice onChange={handlePriceChange}/>
        </Box>
    </>
  );
}

export default ProductFilters;