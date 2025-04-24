import PropTypes from 'prop-types'
// import React, { useState } from 'react'
import './styles.scss'
import classnames from 'classnames'

TodoList.PropTypes ={
    todoList: PropTypes.array,
    onItemClick : PropTypes.func,
};
TodoList.defaultPorps ={
    todoList: [],
    onItemClick: null,
};

function TodoList({todoList, onItemClick}){
    // const {todoList} = props;

    const handleClick = (todo, index)=>{
        if(!onItemClick) return;

        onItemClick(todo, index)
    }
    return(
        <>
            <ul className='todo-list'>
                {todoList.map((todo, index) =>(
                    <li onClick={() =>handleClick(todo, index)} 
                        className={classnames({
                            'todo-item' :true,
                            // active : activeIndex === todo.id,
                            completed : todo.status ==='completed' })} 
                        key={todo.id}>{todo.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;