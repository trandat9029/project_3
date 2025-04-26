import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@mui/material';
import QuantityField from 'components/form-controls/quantityField/QuantityField';


AddToCartForm.propTypes = {
  onsubmit : PropTypes.func,
};

function AddToCartForm({onSubmit = null}) {

    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(1, 'Minimun value is 1').typeError('Please enter a number')
        
      });
      
    const form = useForm({
        defaultValues :{
            quantity: 1,
        },
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const handleSubmit = async (values) => {
        if (onSubmit){
            await onSubmit(values);
        } 
    };        

    return (
        <>
             <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name='quantity' label='Quantity' form={form}/>
                <Button 
                    type='submit' 
                     sx={{mt: 3, mb: 2, width: '250px'}} 
                    variant="contained" 
                    color="primary" 
                    fullWidth size='medium' 
                >
                    Add to Cart
                </Button>
            </form>             
        </>
    );
}

export default AddToCartForm;