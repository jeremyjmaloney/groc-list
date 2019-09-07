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
      <div>
        <h1>ITEMS LIST</h1>
        {this.state.items.map((item, index) => {
          return (
            <div className='item' key={index}>
              <h4>{item.item_description}</h4>
              <Link to={`/edit/${item._id}`}>Edit</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
