import React from 'react';

const inputField = (props) => {
    return (
        <React.Fragment>
            <input type="text" value={props.val} onChange={props.changed} />
        </React.Fragment>
    );
}
export default inputField;