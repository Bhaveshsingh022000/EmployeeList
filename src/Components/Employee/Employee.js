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
                    {this.state.showEdit ? <InputField changed={(event)=>this.props.changeEdit(event,this.props.inputIndex)} val={this.props.name} /> : this.props.name}
                    <span><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>
                    {this.state.showEdit ? <span><FontAwesomeIcon icon={faSave} color="green" onClick={this.toggleEdit} /></span> : <span onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit} color="blue" /></span>}
                </p>
            </div>
        );
    }

}

export default Employee;