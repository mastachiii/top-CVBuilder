function Person({ firstName, lastName, email, phone, gitHub, linkedIn }) {
    return (
        <>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <h3>{firstName + ' ' + lastName}</h3>
            <p>GitHub: {gitHub}</p>
            <p>LinkedIn: {linkedIn}</p>
        </>
    );
}

function Education({ address, schoolName, startDate, endDate, details }) {
    return (
        <>
            <p>{address}</p>
            <p>{schoolName}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

function Employment({ position, company, startDate, endDate, details }) {
    return (
        <>
            <p>{position}</p>
            <p>{company}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

function Project({ name, link, details }) {
    return (
        <>
            <p>{name}</p>
            <a href={link}>{link}</a>
            <ul>
                {details.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

function Preview(props) {
    const personalInfo = props.personalInfo;
    const educationInfo = props.educationInfo;
    const employmentInfo = props.employmentInfo;
    const projectsInfo = props.projectsInfo;

    return (
        <div>
            <h1>Personal Information</h1>
            <Person
                firstName={personalInfo.firstName}
                lastName={personalInfo.lastName}
                email={personalInfo.email}
                phone={personalInfo.phone}
                gitHub={personalInfo.gitHub}
                linkedIn={personalInfo.linkedIn}
            />
            <h1>Education</h1>
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
            {projectsInfo.map((item, index) => {
                return <Project name={item.name} link={item.link} details={item.details} />;
            })}
        </div>
    );
}

export { Preview };
