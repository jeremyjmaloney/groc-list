import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import CreateItem from './components/create-item.component';
import EditItem from './components/edit-item.component';
import ItemList from './components/item-list.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
          <nav className='navbar'>
            <a className='navbar-brand'>
              <img src='./checkmark.jpg' alt='checkmark'/>
            </a>
            <Link to='/' className='navbar-logo'>Groc-List App</Link>
            <ul className='navbar-elements'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>ITEMS</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/create' className='nav-link'>ADD ITEM</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={ItemList} />
          <Route path="/edit/:id" component={EditItem} />
          <Route path="/create" component={CreateItem} />
        </div>
      </Router>
    )
  }
}

export default App;
