import React, { Component } from 'react';

import classes from './Employee.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave, faPhone } from '@fortawesome/free-solid-svg-icons';
import InputField from '../../Components/UI/Input/Input';

class Employee extends Component {
    state = {
        showEdit: false
    }
    toggleEdit = () => {
        this.setState((prevState, nextProps) => { return ({ showEdit: !prevState.showEdit }) })
    }
    render() {
        return (
            <div className={classes.Main}>
                {this.state.showEdit ? <span className={classes.EditBtn} onClick={this.toggleEdit} ><FontAwesomeIcon icon={faSave} color="green" /></span> : <span className={classes.EditBtn} onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} color="blue" /></span>}
                
                 <span>ID - {this.props.id}</span><br />
                <span>Name - {this.state.showEdit ? <InputField changed={this.props.changeName} val={this.props.name} /> : this.props.name}</span><br />
                <span>Email - {this.state.showEdit ? <InputField changed={this.props.changeEmail} val={this.props.email} /> : this.props.email}</span><br />
                <span>Phone - {this.state.showEdit ? <InputField changed={this.props.changePhone} val={this.props.phone} /> : this.props.phone}</span><br />
                <span>Designation - {this.state.showEdit ? <InputField changed={this.props.changeDesignation} val={this.props.designation} /> : this.props.designation}</span>
                
                <span className={classes.DeleteBtn} onClick={this.props.deleteEmployee}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>
               
            </div>
        );
    }

}

export default Employee;