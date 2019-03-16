import React, { Component } from 'react'

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
    
  }

  render() {

    return (
    <div>
        <input className='search form-control'
               placeholder='Type Task here'
               value = {this.state.term}
               onChange = {this.onSearchChange}
               />
    </div>
  )
}
}
