import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;
`;

function CardContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default CardContainer
