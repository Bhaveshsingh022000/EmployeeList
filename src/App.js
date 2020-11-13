import React, { Component } from 'react';

import Employee from './Containers/Employee/Employee';
import InputField from './Components/UI/Input/Input';

class App extends Component {
  state = {
    employees: [],
    tempName: "",
    tempId: 0,
    showEdit: false
  }

  inputChangeHandler = (event) => {
    this.setState({ tempName: event.target.value });
    // console.log(this.state.tempName);
  }

  addEmployeeHandler = () => {
    const employees = [...this.state.employees];
    employees.push({ id: Number(this.state.tempId + 1), name: this.state.tempName });
    this.setState({ employees: employees, tempId: Number(this.state.tempId + 1) });
  }

  inputEditHandler = (event,i) =>{
    const employees = [...this.state.employees];
    employees[i].name = event.target.value;
    this.setState({employees: employees});
    // console.log(this.state.employees[i].name);
  }

  deleteHandler = (i)=>{
    let employees = [...this.state.employees];
    employees.splice(i,1);
    this.setState({employees: employees});
  }

  render() {
    let employees = null;
    if (this.state.employees.length !== 0) {
      employees = this.state.employees.map((el, index) => {
        return <Employee
          changeEdit={(event)=>this.inputEditHandler(event,index)}
          key={this.state.employees[index].id}
          name={this.state.employees[index].name}
          deleteEmployee = {()=>this.deleteHandler(index)}
        />
      })
    }

    return (
      <div>
        <InputField changed={this.inputChangeHandler} /> 
        <button onClick={this.addEmployeeHandler}>Add Employee</button>
        {employees}
      </div>
    );
  }
}

export default App;