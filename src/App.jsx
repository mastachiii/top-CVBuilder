import { useState } from 'react';
import { personalInfo as info } from './data';
import { Editor } from './editor';
import { Preview } from './preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);
    const [educationInfo, setEducationInfo] = useState([]);
    const personalHandlers = {
        firstName: (e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value }),
        lastName: (e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value }),
        email: (e) => setPersonalInfo({ ...personalInfo, email: e.target.value }),
        phone: (e) => setPersonalInfo({ ...personalInfo, phone: e.target.value }),
        gitHub: (e) => setPersonalInfo({ ...personalInfo, gitHub: e.target.value }),
        linkedIn: (e) => setPersonalInfo({ ...personalInfo, linkedIn: e.target.value }),
    };
    const educationHandlers = {
        copy: Array.from(educationInfo),
        numberOfItems: educationInfo.length,
        add: () => {
            educationHandlers.copy.push({
                address: '',
                schoolName: '',
                startDate: '',
                endDate: '',
            });

            setEducationInfo(educationHandlers.copy);
        },
    };

    return (
        <>
            <Editor personalHandlers={personalHandlers} educationHandlers={educationHandlers} />
            <Preview personalInfo={personalInfo} />
        </>
    );
}

export default App;
