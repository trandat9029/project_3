import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { login, setUser } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    
    // const handleSubmit = async (values) =>{
    //     try {

    //         const action = login(values);
    //         const resultAction = await dispatch(action);
    //         unwrapResult(resultAction);

    //         //close dialog
    //         const {closeDialog}  = props;
    //         if(closeDialog){
    //             closeDialog();
    //         }
    //     } catch (error) {
    //         console.log('Failed to Login: ', error);
    //         enqueueSnackbar(error.message, {variant: 'error'});
    //     }
    // }
      const handleSubmit = async (values) => {
            const { identifier, password } = values;
          
            if (identifier === 'admin@gmail.com' && password === '12345678') {
              localStorage.setItem('access_token', 'fake_token_abc123');
              localStorage.setItem('user', JSON.stringify({ id: 1, email: identifier }));
                
              dispatch(setUser({ id: 1, email: 'admin@gmail.com' }));

              enqueueSnackbar('✅ Fake login thành công!', { variant: 'success' });
                
              const { closeDialog } = props;
              if (closeDialog) {
                closeDialog();
              }
            } else {
              enqueueSnackbar('❌ Email hoặc mật khẩu sai!', { variant: 'error' });
            }
          };
    return (
        <>
            <LoginForm onSubmit={handleSubmit} />
        </>
    );
}
export default Login;