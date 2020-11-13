import React, { Component } from 'react';

import classes from './App.module.css';
import Employee from './Containers/Employee/Employee';
import InputField from './Components/UI/Input/Input';

class App extends Component {
  state = {
    employees: [],
    tempName: "",
    tempId: 0,
    tempEmail: "",
    tempPhone: "",
    tempDesignation: "",
    showEdit: false
  }

  inputChangeHandler = (event, type) => {
    if (type === "name") {
      this.setState({ tempName: event.target.value });
      // console.log(this.state.tempName);
    }
    if (type === "email") {
      this.setState({ tempEmail: event.target.value });
    }
    if (type === "phone") {
      this.setState({ tempPhone: event.target.value });
    }
    if (type === "designation") {
      this.setState({ tempDesignation: event.target.value });
    }

  }

  addEmployeeHandler = () => {
    const employees = [...this.state.employees];
    employees.push({ id: Number(this.state.tempId + 1), name: this.state.tempName, email: this.state.tempEmail, phone: this.state.tempPhone, designation: this.state.tempDesignation });
    this.setState({ employees: employees, tempId: Number(this.state.tempId + 1) });
    console.log(this.state.employees);
  }

  editNameHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].name = event.target.value;
    this.setState({ employees: employees });
    // console.log(this.state.employees[i].name);
  }

  editEmailHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].email = event.target.value;
    this.setState({ employees: employees });
    // console.log(this.state.employees[i].name);
  }

  editPhoneHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].phone = event.target.value;
    this.setState({ employees: employees });
    // console.log(this.state.employees[i].name);
  }

  editDesignationHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].designation = event.target.value;
    this.setState({ employees: employees });
    // console.log(this.state.employees[i].name);
  }

  deleteHandler = (i) => {
    let employees = [...this.state.employees];
    employees.splice(i, 1);
    this.setState({ employees: employees });
  }

  render() {
    let employees = null;
    if (this.state.employees.length !== 0) {
      employees = this.state.employees.map((el, index) => {
        return <Employee
          changeName={(event) => this.editNameHandler(event, index)}
          changePhone={(event) => this.editPhoneHandler(event, index)}
          changeEmail={(event) => this.editEmailHandler(event, index)}
          changeDesignation={(event) => this.editDesignationHandler(event, index)}
          key={this.state.employees[index].id}
          name={this.state.employees[index].name}
          email={this.state.employees[index].email}
          phone={this.state.employees[index].phone}
          designation={this.state.employees[index].designation}
          deleteEmployee={() => this.deleteHandler(index)}
        />
      })
    }

    return (
      <div className={classes.Main}>
        <div className={classes.MainContainer}>
          <h1>Employee List</h1>
          <InputField changed={(event) => this.inputChangeHandler(event, "name")} inputType="text" placeholderVal="Enter Name" />
          <InputField changed={(event) => this.inputChangeHandler(event, "email")} inputType="email" placeholderVal="Enter Email" />
          <InputField changed={(event) => this.inputChangeHandler(event, "phone")} inputType="number" placeholderVal="Enter Phone Number" />
          <InputField changed={(event) => this.inputChangeHandler(event, "designation")} inputType="text" placeholderVal="Enter Designation" />
          <button onClick={this.addEmployeeHandler}>Add Employee</button>
          {employees}
        </div>
      </div>
    );
  }
}

export default App;