import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
    text-align : left;
    margin : 30px;
`;

const Title = styled.div`

`;

const Content = styled.div`

`;

function content({title, content}) {
    return (
        <Body>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Body>
    )
}

export default content
