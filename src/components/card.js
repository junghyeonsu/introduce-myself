import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 4vw;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    background-color: #f4a15a;
    color: white;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

function Card({text}) {
    return (
        <Container>
            {text}
        </Container>
    )
}


export default Card;
