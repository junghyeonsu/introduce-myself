import React from 'react'
import styled from 'styled-components'
import Hyperlink from '../../components/hyperlink'

import GitKubernetes from '../../images/gitKubernetes.png'

const Container = styled.div`
    display: flex;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderImage = styled.img`
    width: 2vw;
    heigth: 10px;
    object-fit: contain;
`;

const HeaderText = styled.p`
    font-size: 2vw;
`;

function OpenSourceContent() {
    return (
        <Container>
            <Header>
                <HeaderText>
                    1. kubernetes website
                </HeaderText>
                <HeaderImage src={GitKubernetes} />
            </Header>
        </Container>
    )
}

export default OpenSourceContent
