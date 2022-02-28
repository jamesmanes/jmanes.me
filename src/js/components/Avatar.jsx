import styled, { keyframes} from 'styled-components';
import Image from '../../img/photo.jpg';

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Avatar = styled.div`
    background-image: url(${Image});
    background-size: 100%;
    outline-offset: 10px;
    border-radius: 100%;
    margin-right: 20px;
    width: 150px;
    height: 150px;
    position: relative;
    :before {
        animation: ${rotate} 60s linear infinite;
        outline: 4px dotted rgba(255, 255, 255, 0.1);
        postion: absolute;
        display: block;
        border-radius: 100%;
        outline-offset: 10px;
        width: 150px;
        height: 150px;
        content: '';
    }
    @media (max-width: 768px) {
        display: none;
    }
`

export default Avatar;