import { useState } from 'react';
import { person as personInfo } from './person';

function Input({ type = 'text', text, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange}></input>;
}

function Editor() {
    const [person, setPerson] = useState(personInfo);
    const handleFirstName = (e) => {
        setPerson({ ...person, firstName: e.target.value });
    };
    const handleLastName = (e) => {
        setPerson({ ...person, lastName: e.target.value });
    };

    return (
        <div>
            <Input text='First Name' onChange={handleFirstName} />
            <Input text='Last Name' onChange={handleLastName} />
        </div>
    );
}

export { Editor };
