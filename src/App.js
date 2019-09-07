import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import CreateItem from './components/create-item.component';
import EditItem from './components/edit-item.component';
import ItemList from './components/item-list.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <h1>Groc-List</h1>

          <Route path="/" exact component={ItemList} />
          <Route path="/edit/:id" component={EditItem} />
          <Route path="/create" component={CreateItem} />
        </div>
      </Router>
    )
  }
}

export default App;
