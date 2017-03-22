import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
import AddGreeter from './AddGreeter'
import './HelloWorldList.css'
import './AddGreeter.css'

class HelloWorldList extends Component {
  constructor (props) {
    super(props)
    this.state = { people: ['Jim', 'Sally', 'Moheet'] }
    this.addGreeting = this.addGreeting.bind(this)
    this.removeGreeting = this.removeGreeting.bind(this)
  }

  addGreeting (newName) {
    var nameAlreadyExists = this.state.people.indexOf(newName) >= 0
    if (!nameAlreadyExists) {
      this.setState({ people: [...this.state.people, newName] })
    }
  }

  renderGreetings () {
    return this.state.people.map(name => (
      <HelloWorld
        key={name}
        name={name}
        removeGreeting={this.removeGreeting} />
    ))
  }

  removeGreeting (removeName) {
    const filteredGreetings = this.state.people.filter(name => {
      return name !== removeName
    })
    this.setState({ people: filteredGreetings })
  }

  render () {
    return (
      <div className='HelloWorldList'>
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    )
  }
}

export default HelloWorldList
