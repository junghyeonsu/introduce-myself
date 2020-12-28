import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    a {
        color: #267af7;
        text-decoration: underline;
    }
    &:hover {
        transform: scale(1.05);
    }
`;

function Hyperlink({href, children}) {
    return (
        <Container>
            <a href={href} target="_blank">{children}</a>
        </Container>
    )
}

export default Hyperlink
