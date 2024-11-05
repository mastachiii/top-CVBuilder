import { useState } from 'react';
import { personalInfo as info } from './data';
import { Editor } from './Editor';
import { Preview } from './Preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);
    const [educationInfo, setEducationInfo] = useState([]);
    const [employmentInfo, setEmploymentInfo] = useState([]);
    const [projectsInfo, setProjectsInfo] = useState([]);
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
                details: [],
            });
            educationHandlers.update();
        },
        edit: ({ key, value, index }) => {
            educationHandlers.copy[index][key] = value;
            educationHandlers.update();
        },
    };
    const employmentHandlers = {
        copy: Array.from(employmentInfo),
        numberOfItems: employmentInfo.length,
        update: () => setEmploymentInfo(employmentHandlers.copy),
        add: () => {
            employmentHandlers.copy.push({
                position: '',
                company: '',
                startDate: '',
                endDate: '',
                details: [],
            });
            employmentHandlers.update();
        },
        edit: ({ key, value, index }) => {
            employmentHandlers.copy[index][key] = value;
            employmentHandlers.update();
        },
    };
    const projectHandlers = {
        copy: Array.from(projectsInfo),
        numberOfItems: projectsInfo.length,
        update: () => setProjectsInfo(projectHandlers.copy),
        add: () => {
            projectHandlers.copy.push({
                name: '',
                link: '',
                details: [],
            });
            projectHandlers.update();
        },
        edit: ({ key, value, index }) => {
            projectHandlers.copy[index][key] = value;
            projectHandlers.update();
            console.log(projectsInfo);
        },
    };

    return (
        <>
            <Editor
                personalHandlers={personalHandlers}
                educationHandlers={educationHandlers}
                employmentHandlers={employmentHandlers}
                projectHandlers={projectHandlers}
            />
            <Preview
                personalInfo={personalInfo}
                educationInfo={educationInfo}
                employmentInfo={employmentInfo}
                projectsInfo={projectsInfo}
            />
        </>
    );
}

export default App;
