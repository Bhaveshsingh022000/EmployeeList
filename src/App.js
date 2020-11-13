import React, { Component } from 'react';

import Employees from './Components/Employees/Employees';
import InputField from './Components/UI/Input/Input';

class App extends Component {
  state = {
    employees:[
      {id:"1", name:"bahvesh"}
    ],
    tempName: ""
  }

  inputChangeHandler = (event)=>{
    const name = event.target.value;
    const e = [...this.state.employees];
    e[0].name = name;
    this.setState({employees: e});
    // console.log(this.state.tempName);
  }

  render() {
    let employee = this.state.employees.map((el,index) =>{
      return <Employees key={this.state.employees[index].id} name={this.state.employees[index].name} />
    })
    return (
      <div>
        <InputField change={this.inputChangeHandler}  /> <button>Add Employee</button>
        {employee}
      </div>
    );
  }
}

export default App;