import React from 'react'
import styled from 'styled-components'
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

const Container = styled.div`
    font-size: 1.3vw;
    display: flex;
    a {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        color: #969696;
        text-decoration: none;
    }
    a:hover {
        color: rgb(252,255,11);
    }
`;

function Hyperlink({href, children}) {
    return (
        <Container>
            <LinkRoundedIcon style={{ fontSize: "2vw", color: "#b7b7b7" }} />
            <a href={href} target="_blank">{children}</a>
        </Container>
    )
}

export default Hyperlink
