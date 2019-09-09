import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ItemList extends Component {
  updated = true;
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  getItems = () => {
    if(this.updated === true) {
      axios.get('http://localhost:4000/items')
      .then(response => {
        console.log(response.data);
        this.setState({
          items: response.data
        });
      });
    };
  };

  deleteList = () => {
    axios.delete('http://localhost:4000/items')
    .then(response => {
      console.log(response.data);
      this.setState({
        items: []
      })
    });
  };

  componentDidUpdate() {
    this.getItems();
    this.updated = false;
  };

  componentDidMount() {
    this.getItems();
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
        {this.state.showDelete ? <button className='delete-btn' onClick={this.deleteList}>DELETE LIST</button> : null}
      </div>
    )
  }
}
