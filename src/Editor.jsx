import { useState } from 'react';
import { Fragment } from 'react';

function Input({ type = 'text', text, value, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange} value={value}></input>;
}

function Button({ type = 'button', text, onClick }) {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
}

function Personal({ handlers }) {
    const handleFirstName = (e) => handlers.edit({ key: 'firstName', value: e.target.value });
    const handleLastName = (e) => handlers.edit({ key: 'lastName', value: e.target.value });
    const handleEmail = (e) => handlers.edit({ key: 'email', value: e.target.value });
    const handlePhone = (e) => handlers.edit({ key: 'phone', value: e.target.value });
    const handleGitHub = (e) => handlers.edit({ key: 'gitHub', value: e.target.value });
    const handleLinkedIn = (e) => handlers.edit({ key: 'linkedIn', value: e.target.value });

    return (
        <>
            <Input text='First Name' onChange={handleFirstName} />
            <Input text='Last Name' onChange={handleLastName} />
            <Input text='Email' onChange={handleEmail} />
            <Input text='Phone' onChange={handlePhone} />
            <Input text='Github' onChange={handleGitHub} />
            <Input text='Linked In' onChange={handleLinkedIn} />
        </>
    );
}

function Education({ handlers, index }) {
    const [details, setDetails] = useState({
        text: '',
        list: [],
    });
    const handleAddress = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'address' });
    const handleSchoolName = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'schoolName' });
    const handleStartDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'startDate' });
    const handleEndDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'endDate' });
    const handleDetailsChange = (e) => setDetails({ ...details, text: e.target.value });
    const handleDetailsSubmit = (e) => {
        const detailCopy = { ...details };
        detailCopy.list.push(detailCopy.text);
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };

    return (
        <div>
            <Input text='Address' onChange={handleAddress} />
            <Input text='School Name' onChange={handleSchoolName} />
            <Input text='Start Date' onChange={handleStartDate} />
            <Input text='End Date' onChange={handleEndDate} />
            <Input text='Details' onChange={handleDetailsChange} value={details.text} />
            <Button text='Add' onClick={handleDetailsSubmit} />
        </div>
    );
}

function Employment({ handlers, index }) {
    return (
        <div>
            <Input text='Position' onChange={null} />
            <Input text='Company' onChange={null} />
            <Input text='Start Date' onChange={null} />
            <Input text='End Date' onChange={null} />
            <Input text='Details' onChange={null} />
        </div>
    );
}

function Editor({ personalHandlers, educationHandlers, employmentHandlers }) {
    const makeForm = ({ handlers, Component }) => {
        const form = [];

        for (let i = 0; i < handlers.numberOfItems; i++) {
            form.push(
                <Fragment key={i}>
                    <h3>
                        Education:
                        <Component handlers={handlers} index={i} />
                    </h3>
                </Fragment>
            );
        }

        return form;
    };
    
    return (
        <div>
            <Button text='Add Education' onClick={educationHandlers.add} />
            <Button text='Add Employment' onClick={employmentHandlers.add} />
            <h3>
                Personal Information: <Personal handlers={personalHandlers} />
            </h3>
            {makeForm({ handlers: educationHandlers, Component: Education })}
            {makeForm({ handlers: employmentHandlers, Component: Employment })}
        </div>
    );
}

export { Editor };
