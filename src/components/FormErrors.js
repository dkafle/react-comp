import React, { Component } from 'react';

class FormErrors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    var formErrors =this.props.formErrors;
    return(
      <div className='formErrors panel panel-default'>
        {Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName].length > 0){
            return (
              <p key={i}>{fieldName} {formErrors[fieldName]}</p>
            );    
          } else {
            return '';
          }
        })}
      </div>
    );
  }
}

export default FormErrors;