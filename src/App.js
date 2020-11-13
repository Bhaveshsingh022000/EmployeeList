import React, { Component } from 'react';

import Employee from './Components/Employee/Employee';
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
    const employees = [...this.state.employees];
    employees.push({id: Number(this.state.tempId + 1) , name: this.state.tempName});
    this.setState({employees: employees, tempId:Number(this.state.tempId + 1)});
  }

  render() {
    let employees = null;
    if(this.state.employees.length !== 0){
      employees = this.state.employees.map((el,index) =>{
        return <Employee key={this.state.employees[index].id} name={this.state.employees[index].name} />
      })
    }
    
    return (
      <div>
        <InputField change={this.inputChangeHandler}  /> <button onClick={this.addEmployeeHandler}>Add Employee</button>
        {employees}
      </div>
    );
  }
}

export default App;