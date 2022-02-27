import React from 'react';
import styled from 'styled-components';

/**
 * Represents the about view which displays a photo and biography.
 *
 * @author James Manes
 */
const AboutPane = () => {

    const About = styled.div`
        
    `
    const Link = styled.a`
        color: white;
    `

    return(
        <About>
            <div id="photo"></div>
            <h1>James Manes</h1>
            <div id="biography">
                <p>
                Software Engineer with a passion for clean code and concise
                documentation. Proficient with React JS, HTML/CSS and Java.
                </p>
                <p>
                Master of Science from <Link rel="noopener noreferrer" 
                href="https://ucmo.edu" target="_blank">UCM</Link>.
                <br/>
                Currently employed at <Link rel="noopener noreferrer" 
                href="https://www.cerner.com/" target="_blank">Cerner 
                Corporation</Link>.
                </p>
            </div>
        </About>
    );
}

export default AboutPane;