import React from 'react';

const inputField = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change} />
        </div>
    );
}
export default inputField;