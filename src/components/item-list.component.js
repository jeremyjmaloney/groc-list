import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const URL = 'https://groc-list-backend.herokuapp.com';

export default class ItemList extends Component {
  updated = true;
  showDelete = true;
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  getItems = () => {
    if(this.updated === true) {
      axios.get(`${URL}/items`)
      .then(response => {
        if(response.data.length === 0) {
          this.showDelete = false;
        }
        console.log(response.data);
        this.setState({
          items: response.data
        });
      });
    };
  };

  deleteList = () => {
    axios.delete(`${URL}/items`)
    .then(response => {
      console.log(response.data);
      this.setState({
        items: []
      })
    });
    this.showDelete = false;
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
        {this.showDelete ? <button className='delete-btn' onClick={this.deleteList}>DELETE LIST</button> : null}
        {!this.showDelete ?
          <div className='welcome'>
            <h2>WELCOME TO GROC-LIST!</h2>
            <h3>CLICK ON ADD ITEM IN THE TOP RIGHT</h3>
            <h3>HAND CORNER AND START BUILDING</h3>
            <h3>YOUR GROC-LIST! ENJOY GROC-LIST!!</h3>
          </div> : null
        }
      </div>
    )
  }
}
