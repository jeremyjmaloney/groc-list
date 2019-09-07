import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/items')
      .then(response => {
        this.setState({
          items: response.data
        })
      })
  }

  render() {
    return (
      <div className='items-list'>
        <h1>ITEMS LIST</h1>
        {this.state.items.map((item, index) => {
          return (
            <div className={item.item_completed ? 'completed-item' : 'item'} key={index}>
              <h4 className={item.item_completed ? 'completed' : ''}>{index + 1}. {item.item_description}</h4>
              <Link className='edit' to={`/edit/${item._id}`}>EDIT</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
