import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  addGreeting() {
    if (!this.state.greetingName) {
      return;
    }

    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: ''});
    this.refs.greet.value = '';
  }

  handleEnter(event) {
    if (!event.target.value) {
      return;
    }
    if (event.nativeEvent.keyCode === 13) {
      this.addGreeting();
    }
  }
  
  _getPeopleCount(){
    if (this.props.people.length > 0) {
      return <p>There are {this.props.people.length} people in the list.</p>;
    } else {
      return <p>Let's add some people in the list...</p>;
    }
  }

  render() {
    return(
      <div className="AddGreeter">
        {this._getPeopleCount()}
        <input type="text" ref="greet" onChange={this.handleUpdate} onKeyUp={this.handleEnter}/>
        &nbsp;&nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    )
  }
}

export default AddGreeter;
