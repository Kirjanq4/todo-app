import React, { Component } from 'react'

export default class AddItem extends Component {
  constructor() {
    super()

    this.state = {
      value:''
    }
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    });

  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.value)
    this.setState({
      value: ''
    });
  }

  render(){
  return (
    <form onSubmit={this.onSubmit} className='add-item my-3 d-flex'>
      <input type="text"
             className='form-control'
             placeholder="Add Task Here"
             onChange={this.onInputChange}
             value={this.state.value}
             />
      <button className="btn btn-outline-info w-50 ml-2">
      Add
      </button>
    </form>
  )
  }
}
