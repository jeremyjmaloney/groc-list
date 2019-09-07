import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <Route path="/" exact component={ItemList} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/create" component={CreateItem} />
        
        <div className="main-container">
          <h1>Groc-List</h1>
        </div>
      </Router>
    )
  }
}

export default App;
