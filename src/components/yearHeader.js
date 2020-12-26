import React from 'react'
import styled from 'styled-components';
import TodayIcon from '@material-ui/icons/Today';
import KeyboardBackspaceTwoToneIcon from '@material-ui/icons/KeyboardBackspaceTwoTone';
import { useHistory } from "react-router-dom";

const Container = styled.div`
    margin : 20px;
    display: flex;
    font-size: 3vw;
    justify-content: space-between;
    align-items: center;
`;

function YearHeader({text}) {

    var history = useHistory();

    return (
        <Container>
            <span>
                <TodayIcon style={{ fontSize: "3vw", color: "#f76154" }} />
                {text}
            </span>
            <KeyboardBackspaceTwoToneIcon 
            style={{ fontSize: "3.5vw", color: "#f76154", cursor: "pointer" }} 
            onClick={() => {history.push("/")}}
            />
        </Container>
    )
}

export default YearHeader
