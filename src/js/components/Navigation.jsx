import React from 'react';
import styled, { keyframes} from 'styled-components';

/**
 * Represents the navigation bar.
 *
 * @author James Manes (admin@jmanes.com)
 */
const Navigation = () => {

    const randomAngle = () => {
        return Math.floor((Math.random() * 3) + 1);
    }

    const angle1 = randomAngle();
    const angle2 = randomAngle();

    const Button = styled.a`
        border-radius: 10px;
        display: inline-block;
        background: rgba(240, 0, 20, 0.4);
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        min-width: 100px;
        margin-right: 8px;
        margin-left: 8px;
        user-select: none;
        color: white;
        transform: rotate(${props => props.angle}deg);
    `
    const InnerButton = styled.div`
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.3);
        margin: 6px;
        transform: rotate(-${props => props.angle}deg);

    `

    return(
        <div id="navigation">
            <Button href="http://stackoverflow.com/story/jmanes" 
                    rel="noopener noreferrer" target="_blank"
                    className="navigation-item"
                    angle={angle1}>
                <InnerButton angle={angle1}>History</InnerButton>
            </Button>
            <Button href="https://www.linkedin.com/in/jamesmanes" 
                    rel="noopener noreferrer" target="_blank" 
                    className="navigation-item"
                    angle={angle2}>
                <InnerButton angle={angle2}>LinkedIn</InnerButton>
            </Button>
        </div>
    );
}

export default Navigation;