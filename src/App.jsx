import { useState } from 'react';
import { personalInfo as info } from './data';
import { Editor } from './Editor';
import { Preview } from './Preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);
    const [educationInfo, setEducationInfo] = useState([]);
    const personalHandlers = {
        copy: { ...personalInfo },
        update: () => setPersonalInfo(personalHandlers.copy),
        edit: ({ key, value }) => {
            personalHandlers.copy[key] = value;
            personalHandlers.update();
        },
    };
    const educationHandlers = {
        copy: Array.from(educationInfo),
        numberOfItems: educationInfo.length,
        update: () => setEducationInfo(educationHandlers.copy),
        add: () => {
            educationHandlers.copy.push({
                address: '',
                schoolName: '',
                startDate: '',
                endDate: '',
                details: '',
            });
            educationHandlers.update();
        },
        edit: ({ key, value, index }) => {
            educationHandlers.copy[index][key] = value;
            educationHandlers.update();
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
