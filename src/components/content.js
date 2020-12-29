import React from 'react'
import styled from 'styled-components'
import LabelIcon from '@material-ui/icons/Label';

const Body = styled.div`
    margin : 40px 40px 0px 40px;
    text-align: left;
`;

const Title = styled.div`
    font-size: 3vw;
`;

const Content = styled.div`
    font-size: 1.5vw;
    font-weight: 200;
`;

function content({title, children}) {
    return (
        <Body>
            <LabelIcon style={{ fontSize: "3vw", color: "#8dddc7" }} />
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Body>
    )
}

export default content
