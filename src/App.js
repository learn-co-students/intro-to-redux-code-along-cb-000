import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import connect from react-redux;



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Shopping List</h2>
        </div>
        <ShoppingList items={this.props.shoppingListItems} />
      </div>
    );
  }
}

function mapStateToProps () {
  return shoppingListItems: state.shoppingListItems
}

const connector = connect(state)
const connectedComponent = connector(App)


export default App;
export default connectedComponent
