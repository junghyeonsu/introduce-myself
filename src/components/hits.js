import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 10px;
`;

function Hits() {
    return (
        <Container>
            <a href="https://hits.seeyoufarm.com">
                <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjunghyeonsu.github.io%2Fintroduce-myself%2F&count_bg=%23FF7676&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true"/>
            </a>
        </Container>
    );
}

export default Hits
