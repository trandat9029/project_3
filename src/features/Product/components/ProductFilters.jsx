import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters : PropTypes.object.isRequired,
  onChange : PropTypes.func,
};

function ProductFilters({filters, onChange}) {

  const handleCategoryChange= (newcategorySlug)=>{
    if(!onChange) return;

    const newFilters = {
      categorySlug: newcategorySlug,
    };

    onChange(newFilters);
  }

  const handleChange = (priceFilters) => {
    if (!onChange) return;
    onChange(priceFilters);
  };



  return (
    <>
        <Box>
          <FilterByCategory onChange={handleCategoryChange}/>
          <FilterByPrice onChange={handleChange}/>
          <FilterByService filters={filters} onChange={handleChange}/>
        </Box>
    </>
  );
}

export default ProductFilters;