import React, { Component } from 'react';

import Employees from './Components/Employees';

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
        {employee}
      </div>
    );
  }
}

export default App;