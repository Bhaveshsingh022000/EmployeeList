import React, { Component } from 'react';

import classes from './App.module.css';
import Employee from './Containers/Employee/Employee';
import InputField from './Components/UI/Input/Input';

class App extends Component {

  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.nameRef = React.createRef();
    this.designationRef = React.createRef();
  }
  state = {
    employees: [],
    tempName: "",
    tempId: 0,
    tempEmail: "",
    tempPhone: "",
    tempDesignation: "",
    showEdit: false,
  }

  inputChangeHandler = (event, type) => {
    if (type === "name") {
      this.setState({ tempName: event.target.value });
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

  validate = () => {
    if (this.state.tempName.length === 0) {
      alert("Name Cannot Be Empty");
      this.nameRef.current.focus();
      return false;
    }
    if (!this.state.tempEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      alert("Invalid Email");
      this.emailRef.current.focus();
      return false;
    }
    if (this.state.tempPhone.length !== 10) {
      alert(`Phone Number Should be of 10 digits, You have entered ${this.state.tempPhone.length} digits`);
      this.phoneRef.current.focus();
      return false;
    }
    if (this.state.tempDesignation.length === 0) {
      alert("Designation Cannot Be Empty");
      this.designationRef.current.focus();
      return false;
    }
    return true;
  }

  addEmployeeHandler = () => {
    if (this.validate()) {
      const employees = [...this.state.employees];
      employees.push({ id: Number(this.state.tempId + 1), name: this.state.tempName, email: this.state.tempEmail, phone: this.state.tempPhone, designation: this.state.tempDesignation });
      this.setState({ employees: employees, tempId: Number(this.state.tempId + 1)});
      this.emailRef.current.value = "";
      this.nameRef.current.value = "";
      this.designationRef.current.value = "";
      this.phoneRef.current.value = "";
    }
  }

  editNameHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].name = event.target.value;
    this.setState({ employees: employees });
  }

  editEmailHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].email = event.target.value;
    this.setState({ employees: employees });
  }

  editPhoneHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].phone = event.target.value;
    this.setState({ employees: employees });
  }

  editDesignationHandler = (event, i) => {
    const employees = [...this.state.employees];
    employees[i].designation = event.target.value;
    this.setState({ employees: employees });
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
          id={this.state.employees[index].id}
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
          <InputField refer={this.nameRef} changed={(event) => this.inputChangeHandler(event, "name")} inputType="text" placeholderVal="Enter Name" />
          <InputField refer={this.emailRef} changed={(event) => this.inputChangeHandler(event, "email")} inputType="email" placeholderVal="Enter Email" />
          <InputField refer={this.phoneRef} changed={(event) => this.inputChangeHandler(event, "phone")} inputType="number" placeholderVal="Enter Phone Number" />
          <InputField refer={this.designationRef} changed={(event) => this.inputChangeHandler(event, "designation")} inputType="text" placeholderVal="Enter Designation" />
          <button className={classes.AddBtn} onClick={this.addEmployeeHandler}>Add Employee</button>
          {employees}
        </div>
      </div>
    );
  }
}

export default App;