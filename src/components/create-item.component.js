import React, {Component} from 'react';

export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_description: '',
      item_responsible: '',
      item_priority: '',
      item_completed: false
    }
  }

  onChangeItemDescription(event) => {
    this.setState({
      item_description: event.target.value
    });
  };

  onChangeItemResponsible(event) => {
    this.setState({
      todo_responsible: event.target.value
    });
  };

  onChangeItemPriority(event) => {
    this.setState({
      item_priority: event.targer.value
    });
  };

  onSubmit(event) => {
    event.preventDefaultl();
    console.log('submitted');
    console.log(`item-desc: ${this.state.item_description}`);
    console.log(`item-resp: ${this.state.item_responsible}`);
    console.log(`item-prio: ${this.state.item_priority}`);
  };

  render() {
    return (
      <div>
        <h1>This is the Create Item Component</h1>
      </div>
    )
  }
}
