import React from 'react'
import styled from 'styled-components'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Hyperlink from './hyperlink'

const Container = styled.div`
    margin: 10px;
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

const HeaderText = styled.span`
    font-size: 2.2vw;
`;

const SubHeaderText = styled.span`
    font-size: 1.4vw;
    color: #ffaf37;
`;

const GitLinkContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
`;

const Explain = styled.div`
    margin: 10px;
    font-size: 1.3vw;
`;

function OpenSourceContentItem({headerText, headerImgSrc, subHeaderText, gitLink, prLink, explain}) {
    return (
        <Container>
            <StarRoundedIcon style={{ fontSize: "2.5vw", color: "#fff53d" }} />
            <Header>
                <HeaderText>
                   {headerText}
                </HeaderText>
                <HeaderImage src={headerImgSrc} />
            </Header>
            <SubHeaderText>{subHeaderText}</SubHeaderText>
            <GitLinkContainer>
                <Hyperlink href={gitLink}>해당 레파지토리</Hyperlink>
                <Hyperlink href={prLink}>Pull Request</Hyperlink>
            </GitLinkContainer>
            <Explain>
                {explain}
            </Explain>
        </Container>
    )
}

export default OpenSourceContentItem
