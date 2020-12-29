import React from 'react'
import styled from 'styled-components'

import Header from '../../components/header'
import Content from '../../components/content'
import Body from '../../components/body'

import IntroduceContent from './introduceContent'
import OpenSourceContent from './openSourceContent'
import SkillContent from './skillContent'
import ActivityContent from './activityContent'

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
                    <ActivityContent />
                </Content>
            </Body>
        </Main>
    )
}

export default main;
