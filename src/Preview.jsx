function Person({ fullName, email, phone, gitHub, linkedIn }) {
    return (
        <div className='preview-personal'>
            <div>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <h2>{fullName}</h2>
            <div>
                <p>GitHub: {gitHub}</p>
                <p>LinkedIn: {linkedIn}</p>
            </div>
        </div>
    );
}

function Education({ address, schoolName, startDate, endDate, details }) {
    return (
        <div className='preview-education'>
            <div>
                <p>{address}</p>
                <p>{schoolName}</p>
                <p>
                    {startDate} - {endDate}
                </p>
            </div>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function Employment({ position, company, startDate, endDate, details }) {
    return (
        <div className='preview-employment'>
            <div>
                <p>{position}</p>
                <p>{company}</p>
                <p>
                    {startDate} - {endDate}
                </p>
            </div>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function Project({ name, link, details }) {
    return (
        <div className='preview-projects'>
            <p>{name}</p>
            <a href={link}>{link}</a>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function Technical({ languages, frameworks, tools }) {
    return (
        <div className='preview-technical'>
            <ul>
                <li>Languages: {languages.join(', ')}</li>
                <li>Frameworks and Libraries: {frameworks.join(', ')}</li>
                <li>Tools: {tools.join(', ')}</li>
            </ul>
        </div>
    );
}

function Preview(props) {
    const personalInfo = props.personalInfo;
    const educationInfo = props.educationInfo;
    const employmentInfo = props.employmentInfo;
    const projectsInfo = props.projectsInfo;
    const technicalInfo = props.technicalInfo;

    return (
        <div className='preview' ref={props.innerRef}>
            <Person
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phone={personalInfo.phone}
                gitHub={personalInfo.gitHub}
                linkedIn={personalInfo.linkedIn}
            />
            <h4>Education</h4>
            {educationInfo.map((item, index) => {
                return (
                    <Education
                        address={item.address}
                        schoolName={item.schoolName}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        details={item.details}
                        key={index}
                    />
                );
            })}
            <h4>Employment</h4>
            {employmentInfo.map((item, index) => {
                return (
                    <Employment
                        position={item.position}
                        company={item.company}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        details={item.details}
                        key={index}
                    />
                );
            })}
            <h4>Projects</h4>
            {projectsInfo.map((item, index) => {
                return (
                    <Project name={item.name} link={item.link} details={item.details} key={index} />
                );
            })}
            <h4>Technical Info</h4>
            <Technical
                languages={technicalInfo.languages}
                frameworks={technicalInfo.frameworks}
                tools={technicalInfo.tools}
            />
        </div>
    );
}

export { Preview };
