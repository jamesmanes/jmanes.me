import React from 'react';
import styled from 'styled-components';
import About from './About';
import Navigation from './Navigation';
import Avatar from './Avatar';

/**
 * Main application component.
 */
const App = () => {
    const Container = styled.div`
        background-color: rgba(255, 255, 255, 0.1);
        font-family: "Raleway", sans-serif;
        border-radius: 14px;
        font-size: 11pt;
        width: 350px;
        color: white;
        padding: 20px;
        margin: 20px;
    `
    const OuterContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `

    return (
        <OuterContainer>
            <Avatar/>
            <Container>
                <About/>
                <Navigation/>
            </Container>
        </OuterContainer>
    )
}

export default App;