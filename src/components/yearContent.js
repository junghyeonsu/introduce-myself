import React from 'react'
import styled from 'styled-components';
import BookIcon from '@material-ui/icons/Book';

const Body = styled.div`
    margin : 20px;
    text-align: left;
`;

const Title = styled.div`
    font-size: 3vw;
`;

const Term = styled.div`
    font-size: 1.3vw;
    color: #ff5041;
`;

const Content = styled.div`
    font-size: 1.7vw;
    margin-top: 10px;
`;

function YearContent({title, content, term}) {
    return (
        <Body>
            <BookIcon style={{ fontSize: "2vw", color: "#8dddc7" }} />
            <Title>{title}</Title>
            <Term>{term}</Term>
            <Content>{content}</Content>
        </Body>
    )
}

export default YearContent
