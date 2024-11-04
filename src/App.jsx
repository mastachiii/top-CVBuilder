import { useState } from 'react';
import { person } from './person';

function App() {
    return <>{person.firstName + person.lastName}</>;
}

export default App;
