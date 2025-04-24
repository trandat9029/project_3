import PropTypes from 'prop-types'
import React from 'react'
// import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from 'components/form-controls/inputField';




TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};

function TodoForm(props){

    const schema = yup.object().shape({
        title : yup.string()
        .required('Please enter title')
        .min(8, 'Title is too short'),

    });

    const form = useForm({
        defaultValues :{
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) =>{
        // console.log('TODO FORM: ', values);
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values)
        }
        form.reset()
    }

    return(
        <>
           <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='title' label='Todo' form={form}/>
           </form> 
        </>
    )
}

export default TodoForm;