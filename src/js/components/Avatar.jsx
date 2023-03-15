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
    border-radius: 100%;
    margin-right: 20px;
    margin-left: 20px;
    width: 150px;
    height: 150px;
    position: relative;
    :after {
        animation: ${rotate} 60s linear infinite;
        postion: absolute;
        display: block;
        margin-top: -14px;
        margin-left: -14px;
        border: 4px dotted rgba(255,255,255,0.1);
        border-radius: 100%;
        width: 170px;
        height: 170px;
        content: '';
    }
    @media (max-width: 640px) {
        display: none;
    }
`

export default Avatar;