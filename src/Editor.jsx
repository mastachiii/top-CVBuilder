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

function Education({ handlers }) {
    return (
        <div>
            <Input text='Address' onClick={null} />
            <Input text='School Name' onClick={null} />
            <Input text='Start Date' onClick={null} />
            <Input text='End Date' onClick={null} />
        </div>
    );
}

function Editor({ personalHandlers, educationHandlers }) {
    const educationForm = (() => {
        const form = [];

        for (let i = 0; i < educationHandlers.numberOfItems; i++) {
            form.push(<Education />);
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
