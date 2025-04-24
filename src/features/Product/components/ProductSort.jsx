import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';


ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange : PropTypes.func
};

function ProductSort({currentSort, onChange}) {

    const handleSortChange = (event, newValue)=>{
        if(onChange){
            onChange(newValue)
        }
    }

    return (
    <>
      <Tabs
        value={currentSort}
        onChange={handleSortChange}
        textColor='primry'
        indicatorColor='primary'
        aria-label='disabled tabs example'

      >
        <Tab label="Giá thấp tới cao" value="price:asc"></Tab>
        <Tab label="giá cao xuống thấp" value="price:desc"></Tab>
      </Tabs>
    </>
  );
}

export default ProductSort;