import React, { Component } from 'react';

import Employees from './Components/Employees/Employees';
import InputField from './Components/UI/Input/Input';

class App extends Component {
  state = {
    name:["Bhavesh","Test naame"]
  }

  

  render() {
    let employee = this.state.name.map(el =>{
      return <Employees name={el} />
    })
    return (
      <div>
        <InputField /> 
        {employee}
      </div>
    );
  }
}

export default App;