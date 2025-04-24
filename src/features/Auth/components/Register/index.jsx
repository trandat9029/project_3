import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../Register';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    
    const handleSubmit = async (values) =>{
        try {
            //auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close dialog
            const {closeDialog}  = props;
            if(closeDialog){
                closeDialog();
            }

            // do something here on register success
            enqueueSnackbar('Register successfully!!! ', {variant: 'success'});
            console.log('New user: ', user)
        } catch (error) {
            console.log('Failed to register: ', error);
            enqueueSnackbar(error.message, {variant: 'error'});

        }
        
    }

    return (
                <>
                    <RegisterForm onSubmit={handleSubmit} />
                </>
            );
}

export default Register;