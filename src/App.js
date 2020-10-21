import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItems'

class App extends Component {
  state = {
    items: [
      {id:1, name:"John Dengo", age: 22},
      {id:2, name:"Andersson Blumberg", age: 35},
      {id:3, name:"Emily Snowden", age: 29}
    ]
  }

  deleteItem = (id) => {
    let newItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items: newItems
    })
  }
  addItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({
      items: items
    })
  }
  render (){
  return (
    <div className="App container">
      <h1 className="text-center">To Do List App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItems addItem={this.addItem} />
    </div>
  );
  }
}

export default App;
