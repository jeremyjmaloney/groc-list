import React, {Component} from 'react';
import axios from 'axios';
const URL = 'https://groc-list-backend.herokuapp.com';

export default class EditItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_description: '',
      item_priority: '',
      item_completed: ''
    }
  }

  onChangeItemDescription = (event) => {
    this.setState({
      item_description: event.target.value
    });
  };

  onChangeItemPriority = (event) => {
    console.log(this.state.item_priority);
    this.setState({
      item_priority: event.target.value
    });
    console.log(this.state.item_priority);
  };

  onChangeItemCompleted = (event) => {
    this.setState({
      item_completed: !this.state.item_completed,
      item_priority: 'Low'
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const item = {
      item_description: this.state.item_description,
      item_priority: this.state.item_priority,
      item_completed: this.state.item_completed
    };
    axios.post(`${URL}/items/update/${this.props.match.params.id}`, item)
      .then(response => console.log(response.data));
    this.props.history.push('/');
  }

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`${URL}/items/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
      });
    this.props.history.push('/');
  }

  componentDidMount() {
    axios.get(`${URL}/items/${this.props.match.params.id}`)
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
          <input type='text' value={this.state.item_description} onChange={this.onChangeItemDescription} /><br />

          <label>PRIORITY: </label>
          <input type='radio' name='priorityOptions' id='priorityLow' value='Low' checked={this.state.item_priority==='Low'} onChange={this.onChangeItemPriority} />
          <label>LOW</label>

          <input type='radio' name='priorityOptions' id='priorityHigh' value='High' checked={this.state.item_priority==='High'} onChange={this.onChangeItemPriority} />
          <label>HIGH</label><br />

          <label className='checkbox'>GOT IT: </label>
          <input type='checkbox' name='completedCheckbox' id='completedCheckbox' className='checkbox' onChange={this.onChangeItemCompleted} checked={this.state.item_completed} value={this.state.item_completed} /><br />

          <button className='update-btn' type='submit' value='UPDATE'>UPDATE</button>
        </form>
        <button className='delete-btn' onClick={this.handleDelete}>DELETE ITEM</button>
      </div>
    )
  }
}
