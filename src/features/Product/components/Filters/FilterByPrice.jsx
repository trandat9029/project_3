import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
  const [values, setValues] = useState({
    price_gte: 0,
    price_lte: 0,
  });

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setValues(prevValues =>({
      ...prevValues,
      [name]: Number(value),
    }));
  };

  const handleSubmit =() =>{
    console.log('Submit', values);
    const filters = {};
    if (values.price_gte > 0) filters.price_gte = values.price_gte;
    if (values.price_lte > 0) filters.price_lte = values.price_lte;

    if (onChange) {
      onChange(filters); 
    }
    setValues({
      price_gte: 0,
      price_lte: 0,
    });
  };


  
  return (
    <>
      <Box>
        <Typography variant='subtitle2'>Giá</Typography>

        <Box>
          <TextField name='price_gte' type='number' size='small' value={values.price_gte} onChange={handleChange} />
          <span>-</span>
          <TextField name='price_lte' type='number' size='small' value={values.price_lte} onChange={handleChange} />
        </Box>

        <Button 
          variant='outlined' 
          color='primary' 
          onClick={handleSubmit}
        >
          Áp dụng
        </Button>
      </Box>
    </>
  );
}

export default FilterByPrice;