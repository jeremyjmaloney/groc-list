import React, {Component} from 'react';

export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_description: '',
      item_priority: 'Low',
      item_completed: false
    }
    // this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
    // this.onChangeItemPriority = this.onChangeItemPriority.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
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
    event.preventDefaultl();
    console.log('submitted');
    console.log(`item-desc: ${this.state.item_description}`);
    console.log(`item-prio: ${this.state.item_priority}`);
  };

  render() {
    return (
      <div className='create-form'>
        <h2>ADD NEW ITEM</h2>
        <form onSubmit={this.onSubmit}>
          <label>ITEM: </label>
          <input type='text' value={this.state.item_description} onChange={this.onChangeItemDescription} />

          <label>PRIORITY</label>
          <input type='radio' name='priorityOptions' id='priorityLow' value='Low' checked={this.state.item_priority==='Low'} onChange={this.onChangeItemPriority} />
          <label>LOW</label>

          <input type='radio' name='priorityOptions' id='priorityHigh' value='High' checked={this.state.item_priority==='High'} onChange={this.onChangeItemPriority} />
          <label>HIGH</label>

          <input className='submit-btn' type='submit' value='ADD ITEM' />
        </form>
      </div>
    )
  }
}
