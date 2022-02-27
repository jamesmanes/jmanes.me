import React from 'react';
import styled from 'styled-components';

/**
 * A component that displays a name and biography.
 *
 * @author James Manes (admin@jmanes.com)
 */
const About = () => {

    const About = styled.div`
        
    `
    const Link = styled.a`
        color: white;
    `
    const Header = styled.h1`
        margin: 0;
    `

    const Biography = styled.p`
    `

    const Paragraph = styled.p`
        margin-bottom: 4px;
        :last-child {
            margin-top: 2px;
        }
    `

    return(
        <About>
            <Header>James Manes</Header>
            <div>
                <Biography>
                    Senior Software Engineer passionate about clean code and concise
                    documentation.
                </Biography>
                <Paragraph>
                🎓 Bachelor & Master of Science from <Link rel="noopener noreferrer" 
                        href="https://ucmo.edu" target="_blank">UCM</Link>.
                </Paragraph>
                <Paragraph>
                💼 Currently employed at <Link rel="noopener noreferrer" 
                        href="https://www.cerner.com/" target="_blank">Cerner Corporation</Link>.
                </Paragraph>
            </div>
        </About>
    );
}

export default About;