import React from 'react'
import styled from 'styled-components';
import RoomIcon from '@material-ui/icons/Room';

const Container = styled.span`
    font-size: 3.5vw;
    margin: 40px 40px 0px 40px;
    display: flex;
    align-items: baseline;
`;

const Name = styled.span`
    color: #f76154;
`;

function Header() {
    return (
        <Container>
            <RoomIcon style={{ fontSize: "3.5vw", color: "#f76154" }} />
            <span>제 이름은 <Name>정현수</Name>입니다.</span>
        </Container>
    )
}

export default Header
