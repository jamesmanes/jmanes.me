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
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 20px;
        margin-top: 20px;
        @media (max-width: 525px) {
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 40px;
        }
    `

    return(
        <ButtonContainer>
            <Button href="mailto:contact@jmanes.email" 
                    angle={randomAngle()}>E-mail</Button>
            <Button href="https://jmanes.blog/" 
                    angle={randomAngle()}>Blog</Button>
        </ButtonContainer>
    );
}

export default Navigation;