import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const employee = (props) => {
    return (
        <div>
            <p>
                {props.name}
                <span><FontAwesomeIcon icon={faTrashAlt} color="red" /></span>
                <span><FontAwesomeIcon icon={faEdit} color="blue" /></span>
            </p>
        </div>
    );
}

export default employee;