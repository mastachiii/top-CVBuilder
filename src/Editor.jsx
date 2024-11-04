import { useState } from 'react';

function Input({ type = 'text', text, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange}></input>;
}

function Personal({handleFirstName, handleLastName}) {
    return (
        <>
            <Input text='First Name' onChange={handleFirstName} />
            <Input text='Last Name' onChange={handleLastName} />
        </>
    );
}

function Editor(props) {
    return (
        <div>
            <Personal
                handleFirstName={props.handleFirstName}
                handleLastName={props.handleLastName}
            />
        </div>
    );
}

export { Editor };
