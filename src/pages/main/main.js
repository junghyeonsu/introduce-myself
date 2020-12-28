import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

import Card from '../../components/card'
import Header from '../../components/header'
import Content from '../../components/content'
import Body from '../../components/body'
import CardContainer from '../../components/cardContainer'
import IntroduceContent from './introduceContent'
import OpenSourceContent from './openSourceContent'
import SkillContent from './skillContent'

const Main = styled.div`
    display: flex;
    text-align: center;
`;

function main() {
    return (
        <Main>
            <Body>
                <Header />
                <Content title={"안녕하세요"}>
                    <IntroduceContent />
                </Content>
                <Content title={"저의 기술 스택은"}>
                    <SkillContent />   
                </Content>
                <Content title={"저의 오픈소스 기여 이력은"}>
                    <OpenSourceContent /> 
                </Content>
                <Content title={"저의 연도별 활동 이력은"}>
                    아래 카드를 클릭하면 볼 수 있습니다!
                </Content>
                <CardContainer>
                    <Link style={{ textDecoration: 'none' }} to="/2019"><Card text={"2019"}/></Link>
                    <Link style={{ textDecoration: 'none' }} to="/2020"><Card text={"2020"}/></Link>
                    <Link style={{ textDecoration: 'none' }} to="/2021"><Card text={"2021"}/></Link>
                </CardContainer>
            </Body>
        </Main>
    )
}

export default main;
