import React from 'react';

const inputField = (props) => {
    return (
        <React.Fragment>
            <input type={props.inputType} value={props.val} onChange={props.changed} placeholder={props.placeholderVal} />
        </React.Fragment>
    );
}
export default inputField;