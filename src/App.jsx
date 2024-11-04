import { useState } from 'react';
import { personalInfo as info } from './data';
import { Editor } from './editor';
import { Preview } from './preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);
    const personalHandlers = {
        firstName: (e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value }),
        lastName: (e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value }),
        email: (e) => setPersonalInfo({ ...personalInfo, email: e.target.value }),
        phone: (e) => setPersonalInfo({ ...personalInfo, phone: e.target.value }),
        gitHub: (e) => setPersonalInfo({ ...personalInfo, gitHub: e.target.value }),
        linkedIn: (e) => setPersonalInfo({ ...personalInfo, linkedIn: e.target.value }),
    };

    return (
        <>
            <Editor personalHandlers={personalHandlers} />
            <Preview personalInfo={personalInfo} />
        </>
    );
}

export default App;
