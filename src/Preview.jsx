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

function Preview(props) {
    const personalInfo = props.personalInfo;
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
        </div>
    );
}

export { Preview };
