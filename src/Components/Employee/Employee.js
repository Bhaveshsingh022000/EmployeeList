import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import InputField from '../UI/Input/Input';

class Employee extends Component {
    state = {
        showEdit: false
    }
    toggleEdit = ()=>{
        this.setState((prevState, nextProps) => { return ({ showEdit: !prevState.showEdit }) })
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.showEdit ? <InputField changed={this.props.changeEdit} val={this.props.name} /> : this.props.name}
                    <span onClick={this.props.deleteEmployee}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>
                    {this.state.showEdit ? <span onClick={this.toggleEdit} ><FontAwesomeIcon icon={faSave} color="green"/></span> : <span onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} color="blue" /></span>}
                </p>
            </div>
        );
    }

}

export default Employee;