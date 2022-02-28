import React from 'react';
import styled from 'styled-components';

const Button = ({ children, angle, href }) => {
    const OuterButton = styled.a`
        border-radius: 10px;
        display: inline-block;
        background: rgba(240, 0, 20, 0.4);
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        min-width: 100px;
        margin-left: 20px;
        user-select: none;
        color: white;
        transform: rotate(${props => props.angle}deg);
        transition: transform .2s;
        :first-child {
            margin-left: 0;
        }
        :hover {
            text-decoration: underline;
            transform: scale(1.2);
            cursor: pointer;
        }
        :focus {
            outline: 4px solid rgba(0, 0, 0, 0.3);
        }
    `
    const InnerButton = styled.div`
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.3);
        margin: 6px;
        transform: rotate(-${props => props.angle}deg);
    `

    return (
        <OuterButton angle={angle} href={href} rel="noopener noreferrer" target="_blank">
            <InnerButton angle={angle}>
                {children}
            </InnerButton>
        </OuterButton>
    )
}

export default Button;