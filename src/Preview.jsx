function Person({ firstName, lastName }) {
    return <h1>{firstName + ' ' + lastName}</h1>;
}

function Preview(props) {
    const personalInfo = props.personalInfo;
    return (
        <div>
            <Person
                firstName={personalInfo.firstName}
                lastName={personalInfo.lastName}
            />
        </div>
    );
}

export { Preview };
