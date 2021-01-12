import React from 'react';

export default function AppHeader({toDo, done}) {
  
  return (
    <div>
      <h1 className='text-center'>My ToDo App</h1>
      <p className="font-italic">{toDo} more to do, {done} done.</p>
    </div>
  );
};
