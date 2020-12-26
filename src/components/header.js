import React from 'react'
import styled from 'styled-components';

const Header = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
    font-size: 4vw;
    margin: 40px;
    font-family: 'Noto Serif KR', serif;
`;

const Name = styled.span`
    font-size: 6vw;
    font-weight: 700;
`;

function header() {
    return (
        <Header>
            제 이름은 <Name>정현수</Name> 입니다.
        </Header>
    )
}

export default header
