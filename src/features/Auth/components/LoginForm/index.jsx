import PropTypes from 'prop-types'
import React from 'react'
// import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from 'components/form-controls/inputField';
import { Avatar, LinearProgress, Typography } from '@mui/material';
import {  LockOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PasswordField from 'components/form-controls/passwordField';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,

};

function LoginForm(props){

    const schema = yup.object().shape({
       
        identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password.'),
      });
      

    const form = useForm({
        defaultValues :{
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
        mode: 'all'
    });

    const handleSubmit = async (values) => {
        
        const { onSubmit } = props;
        if (onSubmit){
            await onSubmit(values);
        } 
        
    };
    
    const {isSubmitting} = form.formState;

    return(
        <>
            <Box sx={{pt: 4, display: 'flex', flexDirection: "column", position: 'relative'}} >
                {isSubmitting && <LinearProgress sx={{position: 'absolute', top: -10, left: 0, right: 0}} />}
                <Avatar sx={{m: '0 auto', backgroundColor: 'secondary.main'}}>
                    <LockOutlined></LockOutlined>  
                </Avatar>
                <Typography sx={{textAlign:'center', mb: 3 }} component="h3" variant='h5'>
                    Sign in
                </Typography>

                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputField name='identifier' label='Email' form={form}/>
                    <PasswordField name='password' label='Password' form={form}/>

                    <Button 
                        disabled={isSubmitting} 
                        type='submit' 
                        sx={{mt: 3, mb: 2}} 
                        variant="contained" 
                        color="primary" 
                        fullWidth size='large' 
                    >
                        Sign in
                    </Button>
                </form> 
            </Box>
        </>
    )
}

export default LoginForm;