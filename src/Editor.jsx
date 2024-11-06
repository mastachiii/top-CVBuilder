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
        <div>
            <Input text='First Name' onChange={handleFirstName} />
            <Input text='Last Name' onChange={handleLastName} />
            <Input text='Email' onChange={handleEmail} />
            <Input text='Phone' onChange={handlePhone} />
            <Input text='Github' onChange={handleGitHub} />
            <Input text='Linked In' onChange={handleLinkedIn} />
        </div>
    );
}

function Education({ handlers, index, activeIndex, activeHandler }) {
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
    const handleDetailsDelete = () => {
        const detailCopy = { ...details };
        detailCopy.list.pop();
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };
    const handleDetailsSubmit = () => {
        const detailCopy = { ...details };
        detailCopy.list.push(detailCopy.text);
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };
    const handleDelete = () => handlers.pop(index);

    if (activeIndex === index) {
        return (
            <div>
                <Input text='Address' onChange={handleAddress} />
                <Input text='School Name' onChange={handleSchoolName} />
                <Input text='Start Date' onChange={handleStartDate} />
                <Input text='End Date' onChange={handleEndDate} />
                <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                <Button text='Add' onClick={handleDetailsSubmit} />
                <Button text='Delete' onClick={handleDetailsDelete} />
                <Button text='Done' onClick={activeHandler(null)} />
            </div>
        );
    } else {
        return (
            <div style={{ display: 'flex' }}>
                <p onClick={activeHandler(index)}>Education {index + 1}</p>
                <Button text='Delete' onClick={handleDelete} />
            </div>
        );
    }
}

function Employment({ handlers, index, activeIndex, activeHandler }) {
    const [details, setDetails] = useState({
        text: '',
        list: [],
    });
    const handlePosition = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'position' });
    const handleCompany = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'company' });
    const handleStartDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'startDate' });
    const handleEndDate = (e) =>
        handlers.edit({ value: e.target.value, index: index, key: 'endDate' });
    const handleDetailsChange = (e) => setDetails({ ...details, text: e.target.value });
    const handleDetailsDelete = () => {
        const detailCopy = { ...details };
        detailCopy.list.pop();
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };
    const handleDetailsSubmit = () => {
        const detailCopy = { ...details };
        detailCopy.list.push(detailCopy.text);
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };

    if (index === activeIndex) {
        return (
            <div>
                <Input text='Position' onChange={handlePosition} />
                <Input text='Company' onChange={handleCompany} />
                <Input text='Start Date' onChange={handleStartDate} />
                <Input text='End Date' onChange={handleEndDate} />
                <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                <Button text='Add' onClick={handleDetailsSubmit} />
                <Button text='Delete' onClick={handleDetailsDelete} />
            </div>
        );
    } else {
        return <p onClick={activeHandler(index)}>Employment {index + 1}</p>;
    }
}

function Project({ handlers, index, activeIndex, activeHandler }) {
    const [details, setDetails] = useState({
        text: '',
        list: [],
    });
    const handleName = (e) => handlers.edit({ value: e.target.value, index: index, key: 'name' });
    const handleLink = (e) => handlers.edit({ value: e.target.value, index: index, key: 'link' });
    const handleDetailsChange = (e) => setDetails({ ...details, text: e.target.value });
    const handleDetailsDelete = () => {
        const detailCopy = { ...details };
        detailCopy.list.pop();
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };
    const handleDetailsSubmit = () => {
        const detailCopy = { ...details };
        detailCopy.list.push(detailCopy.text);
        detailCopy.text = '';
        handlers.edit({ value: detailCopy.list, index: index, key: 'details' });
        setDetails(detailCopy);
    };

    if (index === activeIndex) {
        return (
            <div>
                <Input text='Name' onChange={handleName} />
                <Input text='Link' onChange={handleLink} />
                <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                <Button text='Add' onClick={handleDetailsSubmit} />
                <Button text='Delete' onClick={handleDetailsDelete} />
            </div>
        );
    } else {
        return <p onClick={activeHandler(index)}>Project {index + 1}</p>;
    }
}

function Technical({ handlers }) {
    const [details, setDetails] = useState({
        language: '',
        framework: '',
        tools: '',
    });
    const handleLanguageChange = (e) => {
        setDetails({ ...details, language: e.target.value });
    };
    const handleLanguageSubmit = () => {
        handlers.edit({ key: 'languages', value: details.language });
    };
    const handleFrameworkChange = (e) => {
        setDetails({ ...details, framework: e.target.value });
    };
    const handleFrameworkSubmit = () => {
        handlers.edit({ key: 'frameworks', value: details.framework });
    };
    const handleToolsChange = (e) => {
        setDetails({ ...details, tools: e.target.value });
    };
    const handleToolsSubmit = (key) => (key) => {
        setDetails({ ...details, [key]: '' });
        handlers.edit({ key: 'tools', value: details.tools });
    };

    return (
        <div>
            <Input text='Languages' onChange={handleLanguageChange} value={details.language} />
            <Button text='add' onClick={handleLanguageSubmit} />
            <Input
                text='Frameworks and Libraries'
                onChange={handleFrameworkChange}
                value={details.framework}
            />
            <Button text='add' onClick={handleFrameworkSubmit} />
            <Input text='Tools' onChange={handleToolsChange} value={details.tools} />
            <Button text='add' onClick={handleToolsSubmit} />
        </div>
    );
}

function Editor({
    personalHandlers,
    educationHandlers,
    employmentHandlers,
    projectHandlers,
    technicalHandlers,
}) {
    const [generalIndex, setGeneralIndex] = useState(null);
    const [educationIndex, setEducationIndex] = useState(null);
    const [employmentIndex, setEmploymentIndex] = useState(null);
    const [projectIndex, setProjectIndex] = useState(null);
    const handleGeneralIndex = (index) => () => setGeneralIndex(index);
    const handleEducationIndex = (index) => () => setEducationIndex(index);
    const handleEmploymentIndex = (index) => () => setEmploymentIndex(index);
    const handleProjectIndex = (index) => () => setProjectIndex(index);
    const makeForm = ({ handlers, Component, activeIndex, activeHandler }) => {
        const form = [];

        for (let i = 0; i < handlers.numberOfItems; i++) {
            form.push(
                <Fragment key={i}>
                    <Component
                        handlers={handlers}
                        index={i}
                        activeIndex={activeIndex}
                        activeHandler={activeHandler}
                    />
                </Fragment>
            );
        }

        return form;
    };

    return (
        <div className='editor'>
            <h3 onClick={handleGeneralIndex(0)}>
                Personal Information:{' '}
                {generalIndex === 0 && <Personal handlers={personalHandlers} />}
            </h3>
            <h3 onClick={handleGeneralIndex(1)}>
                Education:
                {generalIndex === 1 &&
                    makeForm({
                        handlers: educationHandlers,
                        Component: Education,
                        text: 'Education',
                        activeIndex: educationIndex,
                        activeHandler: handleEducationIndex,
                    })}
                {generalIndex === 1 && (
                    <Button text='Add Education' onClick={educationHandlers.add} />
                )}
            </h3>
            <h3 onClick={handleGeneralIndex(2)}>
                Employment:
                {generalIndex === 2 &&
                    makeForm({
                        handlers: employmentHandlers,
                        Component: Employment,
                        text: 'Employment',
                        activeIndex: employmentIndex,
                        activeHandler: handleEmploymentIndex,
                    })}
                {generalIndex === 2 && (
                    <Button text='Add Employment' onClick={employmentHandlers.add} />
                )}
            </h3>
            <h3 onClick={handleGeneralIndex(3)}>
                Projects:
                {generalIndex === 3 &&
                    makeForm({
                        handlers: projectHandlers,
                        Component: Project,
                        text: 'Project',
                        activeIndex: projectIndex,
                        activeHandler: handleProjectIndex,
                    })}
                {generalIndex === 3 && <Button text='Add Project' onClick={projectHandlers.add} />}
            </h3>
            <h3 onClick={handleGeneralIndex(4)}>
                Technical Skill:
                {generalIndex === 4 && <Technical handlers={technicalHandlers} />}
            </h3>
        </div>
    );
}

export { Editor };
