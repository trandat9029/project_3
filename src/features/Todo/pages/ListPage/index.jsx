import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import queryString from 'query-string'
import TodoList from '../../components/TodoList'
import { useLocation, useNavigate } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';

ListPage.PropTypes ={

};

function ListPage(){
    const initTodolist =[
        {
            id : 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id : 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id : 3,
            title: 'Code',
            status: 'new',
        },
    ]
    const location = useLocation();
    const navigate = useNavigate();
    const match = {path: location.pathname}
    const [todoList, setTodoList] = useState(initTodolist);
    const [fillterStatus, setFillterStatus] = useState(() =>{
        const params = queryString.parse(location.search);
        console.log(params);


        return params.status ||'all';
    });

    useEffect(()=>{
        const params = queryString.parse(location.search);
        console.log(params);


        setFillterStatus(params.status ||'all')
    }, [location.search])

    const handleSeleted =(todo, index)=>{
        //clone current array  to the new one
        const newTodoList = [...todoList];
        console.log(todo, index);
        //toggle state
        newTodoList[index]={
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new', 
        }
        //update todo list
        setTodoList(newTodoList)
    }

    const handleShowAll = ()=>{
        // setFillterStatus('all'); 

        const queryParams = { status: 'all' };
        navigate(`${match.path}?${queryString.stringify(queryParams)}`)
    }
    const handleShowCompleted = ()=>{
        // setFillterStatus('completed')

        const queryParams = { status: 'completed' };
        navigate(`${match.path}?${queryString.stringify(queryParams)}`)
    }
    const handleShowNew = ()=>{
        // setFillterStatus('new')

        const queryParams = { status: 'new' };
        navigate(`${match.path}?${queryString.stringify(queryParams)}`)
    }

    const renderTodoList = useMemo(() =>{
        return todoList.filter(todo => fillterStatus=== 'all' || fillterStatus === todo.status)
    }, [todoList, fillterStatus]) 
    console.log(renderTodoList);

    const handleTodoFormSubmit = (values) =>{
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title : values.title,
            status: 'new',
        };

        const newTodoList = [...todoList,newTodo];
        setTodoList(newTodoList);
    };

    return(
        <>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>

            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onItemClick ={handleSeleted}/>
            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </>
    )
}

export default ListPage;