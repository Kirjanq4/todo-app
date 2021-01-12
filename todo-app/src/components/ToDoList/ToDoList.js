import React from 'react'
import { ToDoListItem } from '../ToDoListItem/ToDoListItem';
import './todo-list.css';

const ToDoList = ({ todos, 
                    onDeleteItem, 
                    onToggleImportant, 
                    onToggleDone}) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps} = item;

        return(
        <li  
            className='list-group-item'
            key={id} >
                <ToDoListItem 
                    { ...itemProps  }
                    onDeleteItem={() => onDeleteItem(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                    />
        </li>
        );
    });

  return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
  );
};

export default ToDoList;