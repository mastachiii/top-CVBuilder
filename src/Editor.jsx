function Input({ type = 'text', text, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange}></input>;
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
    const handleAddress = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'address' });
    const handleSchoolName = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'schoolName' });
    const handleStartDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'startDate' });
    const handleEndDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'endDate' });

    return (
        <div>
            <Input text='Address' onChange={handleAddress} />
            <Input text='School Name' onChange={handleSchoolName} />
            <Input text='Start Date' onChange={handleStartDate} />
            <Input text='End Date' onChange={handleEndDate} />
        </div>
    );
}

function Editor({ personalHandlers, educationHandlers }) {
    const educationForm = (() => {
        const form = [];

        for (let i = 0; i < educationHandlers.numberOfItems; i++) {
            form.push(<Education handlers={educationHandlers} index={i} />);
        }

        return form;
    })();

    return (
        <div>
            <Button text='Add' onClick={educationHandlers.add} />
            <h3>
                Personal Information: <Personal handlers={personalHandlers} />
            </h3>
            {educationForm}
        </div>
    );
}

export { Editor };
