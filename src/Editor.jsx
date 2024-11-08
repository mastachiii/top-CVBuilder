import { useState } from 'react';
import { activateForm, disableForm } from './data';
import { Fragment } from 'react';

function Input({ type = 'text', text, value, onChange }) {
    return <input type={type} placeholder={text} onChange={onChange} value={value}></input>;
}

function Button({ type = 'button', text, onClick, className }) {
    return (
        <button type={type} onClick={onClick} className={className}>
            {' '}
            {text}
        </button>
    );
}

function Personal({ handlers }) {
    const handleFullName = (e) => handlers.edit({ key: 'fullName', value: e.target.value });
    const handleEmail = (e) => handlers.edit({ key: 'email', value: e.target.value });
    const handlePhone = (e) => handlers.edit({ key: 'phone', value: e.target.value });
    const handleGitHub = (e) => handlers.edit({ key: 'gitHub', value: e.target.value });
    const handleLinkedIn = (e) => handlers.edit({ key: 'linkedIn', value: e.target.value });

    return (
        <div className='editor-personal'>
            <Input text='Full Name' onChange={handleFullName} value={handlers.copy.fullName} />
            <Input text='Email' onChange={handleEmail} value={handlers.copy.email} />
            <Input text='Phone' onChange={handlePhone} value={handlers.copy.phone} />
            <Input text='GitHub' onChange={handleGitHub} value={handlers.copy.gitHub} />
            <Input text='LinkedIn' onChange={handleLinkedIn} value={handlers.copy.linkedIn} />
        </div>
    );
}

function Education({ handlers, index, activeIndex, activeHandler }) {
    console.log(handlers.copy);
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
            <div className='editor-education'>
                <Input
                    text='Address'
                    onChange={handleAddress}
                    value={handlers.copy[index].address}
                />
                <Input
                    text='School Name'
                    onChange={handleSchoolName}
                    value={handlers.copy[index].schoolName}
                />
                <div>
                    <Input
                        text='Start Date'
                        onChange={handleStartDate}
                        value={handlers.copy[index].startDate}
                    />
                    <Input
                        text='End Date'
                        onChange={handleEndDate}
                        value={handlers.copy[index].endDate}
                    />
                </div>
                <div>
                    <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                    <Button text='Add' className='detail-add' onClick={handleDetailsSubmit} />
                    <Button text='Delete' className='detail-delete' onClick={handleDetailsDelete} />
                </div>
                <Button text='Done' className='form-done' onClick={activeHandler(null)} />
            </div>
        );
    } else {
        return (
            <div className='editor-education-unfocus'>
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
    1;
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

    if (index === activeIndex) {
        return (
            <div className='editor-employment'>
                <Input
                    text='Position'
                    onChange={handlePosition}
                    value={handlers.copy[index].position}
                />
                <Input
                    text='Company'
                    onChange={handleCompany}
                    value={handlers.copy[index].company}
                />
                <div>
                    <Input
                        text='Start Date'
                        onChange={handleStartDate}
                        value={handlers.copy[index].startDate}
                    />
                    <Input
                        text='End Date'
                        onChange={handleEndDate}
                        value={handlers.copy[index].endDate}
                    />
                </div>
                <div>
                    <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                    <Button text='Add' className='detail-add' onClick={handleDetailsSubmit} />
                    <Button text='Delete' className='detail-delete' onClick={handleDetailsDelete} />
                </div>
                <Button text='Done' className='form-done' onClick={activeHandler(null)} />
            </div>
        );
    } else {
        return (
            <div className='editor-employment-unfocus'>
                <p onClick={activeHandler(index)}>Employment {index + 1}</p>
                <Button text='Delete' onClick={handleDelete} />
            </div>
        );
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
    const handleDelete = () => handlers.pop(index);

    if (index === activeIndex) {
        return (
            <div className='editor-project'>
                <Input text='Name' onChange={handleName} value={handlers.copy[index].name} />
                <Input text='Link' onChange={handleLink} value={handlers.copy[index].link} />
                <div>
                    <Input text='Details' onChange={handleDetailsChange} value={details.text} />
                    <Button text='Add' className='detail-add' onClick={handleDetailsSubmit} />
                    <Button text='Delete' className='detail-delete' onClick={handleDetailsDelete} />
                </div>
                <Button text='Done' className='form-done' onClick={activeHandler(null)} />
            </div>
        );
    } else {
        return (
            <div className='editor-project-unfocus'>
                <p onClick={activeHandler(index)}>Project {index + 1}</p>
                <Button text='Delete' onClick={handleDelete} />
            </div>
        );
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
        setDetails({ ...details, language: '' });
        handlers.edit({ key: 'languages', value: details.language });
    };
    const handleFrameworkChange = (e) => {
        setDetails({ ...details, framework: e.target.value });
    };
    const handleFrameworkSubmit = () => {
        setDetails({ ...details, framework: '' });
        handlers.edit({ key: 'frameworks', value: details.framework });
    };
    const handleToolsChange = (e) => {
        setDetails({ ...details, tools: e.target.value });
    };
    const handleToolsSubmit = () => {
        setDetails({ ...details, tools: '' });
        handlers.edit({ key: 'tools', value: details.tools });
    };
    const handleDetailsDelete = (key) => () => handlers.pop(key);

    return (
        <div className='editor-technical'>
            <div>
                <Input text='Languages' onChange={handleLanguageChange} value={details.language} />
                <Button text='add' className='detail-add' onClick={handleLanguageSubmit} />
                <Button
                    text='delete'
                    className='detail-delete'
                    onClick={handleDetailsDelete('languages')}
                />
            </div>
            <div>
                <Input
                    text='Frameworks and Libraries'
                    onChange={handleFrameworkChange}
                    value={details.framework}
                />
                <Button text='add' className='detail-add' onClick={handleFrameworkSubmit} />
                <Button
                    text='delete'
                    className='detail-delete'
                    onClick={handleDetailsDelete('frameworks')}
                />
            </div>
            <div>
                <Input text='Tools' onChange={handleToolsChange} value={details.tools} />
                <Button text='add' className='detail-add' onClick={handleToolsSubmit} />
                <Button
                    text='delete'
                    className='detail-delete'
                    onClick={handleDetailsDelete('tools')}
                />
            </div>
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
    const handleGeneralIndex = (index) => () =>
        generalIndex === index ? setGeneralIndex(null) : setGeneralIndex(index);
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
            <div className='title icon-personal'>
                <img src='public/personal-information/personal-information.svg' className='icon' />
                <h3
                    onClick={activateForm({
                        callback: handleGeneralIndex(0),
                        className: 'title',
                        targetClass: 'active',
                        targetIndex: 0,
                    })}
                >
                    Personal Information
                </h3>
            </div>
            {generalIndex === 0 && <Personal handlers={personalHandlers} />}
            <div className='title icon-education'>
                <img src='public/education/education.svg' className='icon' />
                <h3
                    onClick={activateForm({
                        callback: handleGeneralIndex(1),
                        className: 'title',
                        targetClass: 'active',
                        targetIndex: 1,
                    })}
                >
                    Education
                </h3>
            </div>
            {generalIndex === 1 &&
                makeForm({
                    handlers: educationHandlers,
                    Component: Education,
                    text: 'Education',
                    activeIndex: educationIndex,
                    activeHandler: handleEducationIndex,
                })}
            {generalIndex === 1 && (
                <Button className='add-button' onClick={educationHandlers.add} />
            )}
            <div className='title icon-employment'>
                <img src='public/employment/employment.svg' className='icon' />
                <h3
                    onClick={activateForm({
                        callback: handleGeneralIndex(2),
                        className: 'title',
                        targetClass: 'active',
                        targetIndex: 2,
                    })}
                >
                    Employment
                </h3>
            </div>
            {generalIndex === 2 &&
                makeForm({
                    handlers: employmentHandlers,
                    Component: Employment,
                    text: 'Employment',
                    activeIndex: employmentIndex,
                    activeHandler: handleEmploymentIndex,
                })}
            {generalIndex === 2 && (
                <Button className='add-button' onClick={employmentHandlers.add} />
            )}
            <div className='title icon-project'>
                <img src='public/project.svg' className='icon' />
                <h3
                    onClick={activateForm({
                        callback: handleGeneralIndex(3),
                        className: 'title',
                        targetClass: 'active',
                        targetIndex: 3,
                    })}
                >
                    Projects
                </h3>
            </div>
            {generalIndex === 3 &&
                makeForm({
                    handlers: projectHandlers,
                    Component: Project,
                    text: 'Project',
                    activeIndex: projectIndex,
                    activeHandler: handleProjectIndex,
                })}
            {generalIndex === 3 && <Button className='add-button' onClick={projectHandlers.add} />}
            <div className='title icon-technical'>
                <img src='public/technical.svg' className='icon' />
                <h3
                    onClick={activateForm({
                        callback: handleGeneralIndex(4),
                        className: 'title',
                        targetClass: 'active',
                        targetIndex: 4,
                    })}
                >
                    Technical Skill
                </h3>
            </div>
            {generalIndex === 4 && <Technical handlers={technicalHandlers} />}
            <Button
                text=''
                onClick={disableForm({
                    callback: handleGeneralIndex(null),
                    className: 'title',
                    targetClass: 'active',
                })}
                className={'back-button'}
            />
        </div>
    );
}

export { Editor };
