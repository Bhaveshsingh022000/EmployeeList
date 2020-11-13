import React from 'react';

const inputField = (props) => {
    return (
        <React.Fragment>
            <input ref={props.refer} type={props.inputType} value={props.val} onChange={props.changed} placeholder={props.placeholderVal} />
        </React.Fragment>
    );
}
export default inputField;