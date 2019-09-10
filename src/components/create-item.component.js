import React, {Component} from 'react';
import axios from 'axios';
// const URL = 'https://groc-list-backend.herokuapp.com';

export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_description: '',
      item_priority: 'Low',
      item_completed: false
    }
  }

  onChangeItemDescription = (event) => {
    this.setState({
      item_description: event.target.value
    });
  };

  onChangeItemPriority = (event) => {
    this.setState({
      item_priority: event.target.value
    });
  };

  onSubmit = (event) => {
    // event.preventDefaultl();
    console.log('submitted');
    console.log(`item-desc: ${this.state.item_description}`);
    console.log(`item-prio: ${this.state.item_priority}`);

    const newItem = {
      item_description: this.state.item_description,
      item_priority: this.state.item_priority,
      item_completed: this.state.item_completed
    };

    axios.post(`http://localhost:4000/items/add`, newItem)
      .then(res => console.log(res.data));

    this.setState({
      item_description: '',
      item_priority: 'Low',
      item_completed: false
    });
  };

  render() {
    return (
      <div className='create-form'>
        <h1>ADD ITEM</h1>
        <form onSubmit={this.onSubmit}>
          <label>ITEM: </label>
          <input type='text' value={this.state.item_description} onChange={this.onChangeItemDescription} autoFocus/><br />

          <label>PRIORITY: </label>
          <input type='radio' name='priorityOptions' id='priorityLow' value='Low' checked={this.state.item_priority==='Low'} onChange={this.onChangeItemPriority} />
          <label>LOW</label>

          <input type='radio' name='priorityOptions' id='priorityHigh' value='High' checked={this.state.item_priority==='High'} onChange={this.onChangeItemPriority} />
          <label>HIGH</label><br />

          <input className='update-btn' type='submit' value='ADD ITEM' />
        </form>
      </div>
    )
  }
}
