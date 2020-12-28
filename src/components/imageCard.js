import React from 'react'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 10vw;
    height: 8vw;

    &:hover {
        img {
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            transform: scale(0.5);
            opacity: 0;
        }

        p {
            transition: all 0.5s cubic-bezier(.25,.8,.25,1);
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    object-fit: scale-down;
    width: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

const Text = styled.p`
    position: absolute;		
    top: 30%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    opacity: 0;
`;

function ImageCard({image, text}) {
    return (
        <Container>
            <Image src={image} />
            <Text>{text}</Text>
        </Container>
    )
}

export default ImageCard
