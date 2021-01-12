import React, { Component } from 'react';

import './item-search-status.css';

export default class ItemSearchStatus extends Component {
 
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
  render(){
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
          <button type='button'
                  className={`btn ${clazz}`}
                  key={name}
                  onClick={() => onFilterChange(name)}
                  >
          {label}
          </button>
      );
    });

  return (
    <div className='btn-group ml-2'>
      {buttons}
    </div>
  )
  }
}

