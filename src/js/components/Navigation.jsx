import React from 'react';
import styled from 'styled-components';
import Button from './Button';

/**
 * Navigation bar component.
 *
 * @author James Manes (admin@jmanes.com)
 */
const Navigation = () => {

    const randomAngle = () => {
        return Math.floor((Math.random() * 4) + 1);
    }

    const ButtonContainer = styled.div`
        margin-top: 20px;
        @media (max-width: 525px) {
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 40px;
            a:last-child {
                margin-top: 20px;
                margin-left: 0;
            }
        }
    `

    return(
        <ButtonContainer>
            <Button href="http://stackoverflow.com/story/jmanes" 
                    angle={randomAngle()}>History</Button>
            <Button href="https://www.linkedin.com/in/jamesmanes" 
                    angle={randomAngle()}>LinkedIn</Button>
            <Button href="https://jmanes.blog" 
                    angle={randomAngle()}>Blog</Button>
        </ButtonContainer>
    );
}

export default Navigation;