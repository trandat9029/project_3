import { TextField } from '@mui/material';
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,

};

function InputField({ form, name, label, disabled }){

    const {
        control,
        formState: { errors, touchedFields }
      } = form;
      
      const hasError = errors[name];
      
    // const {form, name, label, disabled} = props;
    console.log('errors:', errors[name]);
    console.log('touched:', touchedFields[name]);


    return(
        <>
            <Controller
                name={name}
                control={form.control}
                render={({field}) =>(
                    <TextField 
                        {...field}
                        fullWidth
                        variant='outlined'
                        margin='normal'
                        
                        label={label}
                        disabled={disabled}

                        error={!!hasError}
                        helperText={errors[name]?.message}
                    />
                )}
            />
        </>
    )
}

export default InputField;