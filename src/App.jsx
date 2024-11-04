import { useState } from 'react';
import { personalInfo as info } from './data';
import { Editor } from './editor';
import { Preview } from './preview';

function App() {
    const [personalInfo, setPersonalInfo] = useState(info);

    function handleFirstName(e) {
        setPersonalInfo({ ...personalInfo, firstName: e.target.value });
    }

    function handleLastName(e) {
        setPersonalInfo({ ...personalInfo, lastName: e.target.value });
    }

    return (
        <>
            <Editor
                handleFirstName={handleFirstName}
                handleLastName={handleLastName}
            />
            <Preview personalInfo = {personalInfo} />
        </>
    );
}

export default App;
