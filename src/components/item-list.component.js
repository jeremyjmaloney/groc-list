import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ItemList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  getItems = () => {
    axios.get('http://localhost:4000/items')
      .then(response => {
        if(this._isMounted) {
          this.setState({
            items: response.data
          });
        }
      });
  }

  componentDidUpdate() {
    this.getItems();
  }

  componentDidMount() {
    this._isMounted = true;
    this.getItems();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className='items-list'>
        <h1>ITEMS LIST</h1>
        {this.state.items.map((item, index) => {
          return (
            <div className={item.item_completed ? 'completed-item' : 'item'} key={index}>
              <div className={item.item_priority === 'High' ? 'high' : ''}>
                <h4 className={item.item_completed ? 'completed' : ''}>{index + 1}. {item.item_description}</h4>
                <Link className='edit' to={`/edit/${item._id}`}>EDIT</Link>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
