import React from 'react';
import Container from './Container';
import AboutPane from './AboutPane';
import Navigation from './Navigation';
import BackgroundGrid from './BackgroundGrid';

const App = () => {

    return (
        <Container>
            <AboutPane/>
            <Navigation/>
        </Container>
    )
}

export default App;