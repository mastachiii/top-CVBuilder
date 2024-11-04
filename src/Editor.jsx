import { useState } from 'react';

function Input({ type = 'text', text, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange}></input>;
}

function Personal({ handlers }) {
    return (
        <>
            <Input text='First Name' onChange={handlers.firstName} />
            <Input text='Last Name' onChange={handlers.lastName} />
            <Input text='Email' onChange={handlers.email} />
            <Input text='Phone' onChange={handlers.phone} />
            <Input text='Github' onChange={handlers.gitHub} />
            <Input text='Linked In' onChange={handlers.linkedIn} />
        </>
    );
}

function Editor({ personalHandlers }) {
    return (
        <div>
            <Personal handlers={personalHandlers} />
        </div>
    );
}

export { Editor };
