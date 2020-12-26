import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    border : 1px solid white;
    border-radius : 10px;
    padding : 4vw;
    color : white;
    background-color : rgb(17, 108, 245);
    transition : 0.5s ease;
    cursor : pointer;

    &:hover {
        background-color : white;
        color : black;
    }
`;

function card({text}) {
    return (
        <Card>
            {text}
        </Card>
    )
}


export default card;
