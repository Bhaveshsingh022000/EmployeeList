import React, { Component } from 'react';

import Employees from './Components/Employees/Employees';
import InputField from './Components/UI/Input/Input';

class App extends Component {
  state = {
    employees:[],
    tempName: "",
    tempId: 0
  }

  inputChangeHandler = (event)=>{
    // const name = event.target.value;
    // const e = [...this.state.employees];
    // e[0].name = name;
    // this.setState({employees: e});
    // console.log(this.state.tempName);
    this.setState({tempName: event.target.value});
  }

  addEmployeeHandler = ()=>{
    const employee = [...this.state.employees];
    employee.push({id: Number(this.state.tempId + 1) , name: this.state.tempName});
    this.setState({employees: employee, tempId:Number(this.state.tempId + 1)});
  }

  render() {
    let employee = null;
    if(this.state.employees.length !== 0){
      employee = this.state.employees.map((el,index) =>{
        return <Employees key={this.state.employees[index].id} name={this.state.employees[index].name} />
      })
    }
    
    return (
      <div>
        <InputField change={this.inputChangeHandler}  /> <button onClick={this.addEmployeeHandler}>Add Employee</button>
        {employee}
      </div>
    );
  }
}

export default App;