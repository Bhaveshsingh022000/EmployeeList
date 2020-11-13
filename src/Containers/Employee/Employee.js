import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
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
            <div>
                <p>  {this.state.showEdit ? <InputField changed={this.props.changeName} val={this.props.name} /> : this.props.name}</p>
                <p>  {this.state.showEdit ? <InputField changed={this.props.changeEmail} val={this.props.email} /> : this.props.email}</p>
                <p>  {this.state.showEdit ? <InputField changed={this.props.changePhone} val={this.props.phone} /> : this.props.phone}</p>
                <p>  {this.state.showEdit ? <InputField changed={this.props.changeDesignation} val={this.props.designation} /> : this.props.designation}</p>


                <p>    <span onClick={this.props.deleteEmployee}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>
                    {this.state.showEdit ? <span onClick={this.toggleEdit} ><FontAwesomeIcon icon={faSave} color="green" /></span> : <span onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} color="blue" /></span>}
                </p>
            </div>
        );
    }

}

export default Employee;