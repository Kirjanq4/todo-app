import React, { Component } from 'react';
import './App.css';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ToDoList from '../ToDoList/ToDoList';
import AddItem from '../AddItem/AddItem';
import ItemSearchStatus from '../ItemSearchStatus/ItemSearchStatus';


export default class App extends Component {

    maxId = 100;

    state = {
      todoArr: [
        this.createNewItem("Drink Coffee"),
        this.createNewItem("Create React App"),
        this.createNewItem("Find a Job"),
      ],
      term: '',
      filter: 'all' // all, active, done
    };

    createNewItem(label) {
      const newItem = {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
      return newItem;
    }

    deleteItem = (id) => {
      this.setState(({ todoArr }) => {
        const idx = todoArr.findIndex((el) => el.id === id);
        
        let before = todoArr.slice(0, idx);
        let after = todoArr.slice(idx + 1);

        const newArr = [...before, ...after];
        return {
          todoArr: newArr
        };
      });
    };

    AddItem = (text) => {
      const newItem = this.createNewItem(text);

      this.setState(({todoArr})=> {
        const newArr = [
          ...todoArr,
          newItem
        ];

        return {
          todoArr: newArr
        }
      });

    };

    toggleProperty = (arr, id, propName) => {
            // 1. update object
              const idx = arr.findIndex((el) => el.id === id);
          
              const oldItem = arr[idx];
              const newItem = {...oldItem, [propName]: !oldItem[propName]}
          // 2. construct new array
              let before = arr.slice(0, idx);
              let after = arr.slice(idx + 1);
    
              const newArr = [...before, newItem, ...after];
    
              return newArr;
              
            };
    

    onToggleDone = (id) => {
        this.setState(({todoArr}) => {
          return {
            todoArr: this.toggleProperty(todoArr, id, 'done')
          }
        });
    }

    onToggleImportant = (id) => {
      this.setState(({todoArr}) => {
        return {
          todoArr: this.toggleProperty(todoArr, id, 'important')
        }
      });
    }
    
    search(items, term) {
      if(term.length === 0){
        return items;
      }
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    }

    onSearchChange = (term) => {
      this.setState({ term });
    };

    onFilterChange = (filter) => {
      this.setState({ filter });
    };

    
    filter(items, filter) {
      switch(filter) {
        case 'all': 
          return items;
        case 'active': 
          return items.filter((item) => !item.done );
        case 'done': 
          return items.filter((item) => item.done)
        default:
        return items;
      
      }

    };  

  render() {

    const { todoArr, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoArr, term), filter);
    const doneCount = this.state.todoArr.filter((el) => el.done).length;
    
    const toDoCount = this.state.todoArr.length - doneCount;
    
    return (
      <div className='container'>
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <div className="d-flex">
        <SearchPanel onSearchChange = {this.onSearchChange} />
        <ItemSearchStatus filter={filter}
                          onFilterChange={this.onFilterChange} />
        </div>
        <ToDoList 
          todos={visibleItems}
          onDeleteItem = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          />
        <AddItem onAddItem={this.AddItem}/>
      </div>
    );
  }
}
