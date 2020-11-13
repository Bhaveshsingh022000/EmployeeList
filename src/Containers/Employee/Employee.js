import React, { Component } from 'react';

import classes from './Employee.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave, faPhone } from '@fortawesome/free-solid-svg-icons';
import InputField from '../../Components/UI/Input/Input';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.nameRef = React.createRef();
        this.designationRef = React.createRef();
    }


    state = {
        showEdit: false
    }


    openEdit = () => {
        this.setState((prevState, nextProps) => { return ({ showEdit: !prevState.showEdit }) });
    }

    closeEdit = ()=>{
        if(this.validate()){
            this.setState((prevState, nextProps) => { return ({ showEdit: !prevState.showEdit }) });
        }
    }


    validate = () => {
        if (this.nameRef.current.value === "") {
            alert("Name Cannot Be Empty");
            this.nameRef.current.focus();
            return false;
        }
        if (!this.emailRef.current.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            alert("Invalid Email");
            this.emailRef.current.focus();
            return false;
        }
        if (this.phoneRef.current.value.length !== 10) {
            alert(`Phone Number Should be of 10 digits, You have entered ${this.phoneRef.current.value.length} digits`);
            this.phoneRef.current.focus();
            return false;
        }
        if (this.designationRef.current.value === "") {
            alert("Designation Cannot Be Empty");
            this.designationRef.current.focus();
            return false;
        }
        return true;
    }


    render() {
        let id = this.props.id;
        if (id < 10) {
            id = "0" + id;
        }
        return (
            <div className={classes.Main}>
                {this.state.showEdit ? <span className={classes.EditBtn} onClick={this.closeEdit} ><FontAwesomeIcon icon={faSave} color="green" /></span> : <span className={classes.EditBtn} onClick={this.openEdit}><FontAwesomeIcon icon={faEdit} color="blue" /></span>}

                <span>ID - {id}</span><br />
                <span>Name - {this.state.showEdit ? <InputField refer={this.nameRef} inputType="text" changed={this.props.changeName} val={this.props.name} /> : this.props.name}</span><br />
                <span>Email - {this.state.showEdit ? <InputField refer={this.emailRef} inputType="email" changed={this.props.changeEmail} val={this.props.email} /> : this.props.email}</span><br />
                <span>Phone - {this.state.showEdit ? <InputField refer={this.phoneRef} inputType="number" changed={this.props.changePhone} val={this.props.phone} /> : this.props.phone}</span><br />
                <span>Designation - {this.state.showEdit ? <InputField refer={this.designationRef} inputType="text" changed={this.props.changeDesignation} val={this.props.designation} /> : this.props.designation}</span>

                <span className={classes.DeleteBtn} onClick={this.props.deleteEmployee}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>

            </div>
        );
    }

}

export default Employee;