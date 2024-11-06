import { useState } from 'react';
import './styles.css';
import { personalInfo as info } from './data';
import { Editor } from './editor';
import { Preview } from './Preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);
    const [educationInfo, setEducationInfo] = useState([]);
    const [employmentInfo, setEmploymentInfo] = useState([]);
    const [projectsInfo, setProjectsInfo] = useState([]);
    const [technicalInfo, setTechnicalInfo] = useState({
        languages: [],
        frameworks: [],
        tools: [],
    });
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
        pop: (targetIndex) => {
            educationHandlers.copy = educationHandlers.copy.filter(
                (item, index) => index !== targetIndex
            );
            console.log(educationHandlers.copy);
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
        pop: (targetIndex) => {
            employmentHandlers.copy = employmentHandlers.copy.filter(
                (item, index) => index !== targetIndex
            );
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
        },
        pop: (targetIndex) => {
            projectHandlers.copy = projectHandlers.copy.filter(
                (item, index) => index !== targetIndex
            );
            projectHandlers.update();
        },
    };
    const technicalHandlers = {
        copy: { ...technicalInfo },
        numberOfItems: 1,
        update: () => setTechnicalInfo(technicalHandlers.copy),
        edit: ({ key, value }) => {
            technicalHandlers.copy[key].push(value);
            technicalHandlers.update();
        },
    };

    return (
        <>
            <Editor
                personalHandlers={personalHandlers}
                educationHandlers={educationHandlers}
                employmentHandlers={employmentHandlers}
                projectHandlers={projectHandlers}
                technicalHandlers={technicalHandlers}
            />
            <Preview
                personalInfo={personalInfo}
                educationInfo={educationInfo}
                employmentInfo={employmentInfo}
                projectsInfo={projectsInfo}
                technicalInfo={technicalInfo}
            />
        </>
    );
}

export default App;
