import React, {Component} from 'react';
import axios from 'axios';

export default class EditItem extends Component {
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

  onChangeItemCompleted = (event) => {
    this.setState({
      item_completed: !this.state.item_completed
    });
  };

  onSubmit = (event) => {
    const item = {
      item_description: event.target.value,
      item_priority: event.target.value,
      item_completed: this.state.item_completed
    };
    console.log(item);
    axios.post(`http://localhost:4000/items/update/${this.props.match.params.id}`, item)
      .then(response => console.log(response.data));
    this.props.history.push('/');
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/items/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          item_description: response.data.item_description,
          item_priority: response.data.item_priority,
          item_completed: response.data.item_completed
        })
      }, (error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='edit-container'>
        <h1>EDIT ITEM</h1>
        <form onSubmit={this.onSubmit}>
          <label>ITEM: </label>
          <input type='text' value={this.state.item_description} onChange={this.onChangeItemDescription} />

          <label>PRIORITY</label>
          <input type='radio' name='priorityOptions' id='priorityLow' value='Low' checked={this.state.item_priority==='Low'} onChange={this.onChangeItemPriority} />
          <label>LOW</label>

          <input type='radio' name='priorityOptions' id='priorityHigh' value='High' checked={this.state.item_priority==='High'} onChange={this.onChangeItemPriority} />
          <label>HIGH</label>

          <label>Completed</label>
          <input type='checkbox' name='completedCheckbox' id='completedCheckbox' onChange={this.onChangeItemCompleted} checked={this.state.item_completed} value={this.state.item_completed} />

          <input className='submit-btn' type='submit' value='SUBMIT' />
        </form>
      </div>
    )
  }
}
