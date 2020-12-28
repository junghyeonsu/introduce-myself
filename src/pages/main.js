import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Card from '../components/card'
import Header from '../components/header'
import Content from '../components/content'
import Body from '../components/body'
import ImageCard from '../components/imageCard'

import ReactImg from '../images/react.png'

const Main = styled.div`
    display: flex;
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
`;

function content1(){
    return(
        <div>
            저는 현재 충남대학교 학생입니다. <br />
            무언가를 만드는 것을 굉장히 좋아하고, <br />
            예쁘게 꾸미고 보기 좋게 만드는 것을 좋아합니다. <br />
            항상 배우고 발전하는 개발자가 되고 싶습니다.
        </div>
    )
}

function content2(){
    return(
        <div>
            <ImageCard image={ReactImg} />
        </div>
    )
}

function content3(){
    return(
        <div>
            content3
        </div>
    )
}

function main() {
    return (
        <Main>
            <Body>
                <Header />
                <Content title={"안녕하세요"}>
                    {content1()}
                </Content>
                <Content title={"저의 기술 스택은"}>
                    {content2()}    
                </Content>
                <Content title={"저의 오픈소스 이력은"}>
                    {content3()}    
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
