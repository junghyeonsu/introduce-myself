import React from 'react'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
    0% {
        opacity:0
    }
    100% {
        opacity:1
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 450px;
    margin: 20px auto;
    padding-bottom: 35px;
    background-color: white;
    animation: ${fadeIn} 1s ease;
    box-shadow: 7px 7px #505653;
`;

function Body({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Body
