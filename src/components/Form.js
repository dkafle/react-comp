import React, { Component } from 'react';
import FormErrors from './FormErrors';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: ''},
      hasValidEmail: false,
      hasValidPassword: false,
      isFormValid: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value) }
    );
  }
  
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    console.log(fieldName, value);
  }
  
  render() {
    return (
      <div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <form className="frm">
          <h2>Sign up</h2>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" 
              className="form-control" 
              value={this.state.email}
              onChange={this.handleUserInput}
              name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Passwordl</label> 
            <input type="password" 
              className="form-control" 
              value={this.state.password} 
              onChange={this.handleUserInput}
              name="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Form;