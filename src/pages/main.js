import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Card from '../components/card'
import Header from '../components/header'
import Content from '../components/content'
import Body from '../components/body'
import ImageCard from '../components/imageCard'
import Hyperlink from '../components/hyperlink'

import ReactImg from '../images/react.png'
import JavascriptImg from '../images/javascript.png'
import CssImg from '../images/css.svg'
import FirebaseImg from '../images/firebase.png'
import DockerImg from '../images/docker.png'
import GraphqlImg from '../images/graphql.png'
import HtmlImg from '../images/html.png'
import JavaImg from '../images/java.png'
import KubernetesImg from '../images/kubernetes.png'
import MongodbImg from '../images/mongodb.png'
import MysqlImg from '../images/mysql.png'
import NestjsImg from '../images/nestjs.svg'
import NodejsImg from '../images/nodejs.jpg'
import PhpImg from '../images/php.png'
import PythonImg from '../images/python.png'
import ReactnativeImg from '../images/reactnative.png'
import TypescriptImg from '../images/typescript.png'

const Main = styled.div`
    display: flex;
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;
`;

const ExplainText = styled.p`
    text-align: center;
    font-size: 1.2vw;
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
            <p>👉학교에서 배움(학부생 수준)</p>
            <CardContainer>
                <ImageCard text={"Java"} image={JavaImg} />
                <ImageCard text={"Python"} image={PythonImg} />
                <ImageCard text={"html"} image={HtmlImg} />
                <ImageCard text={"css"} image={CssImg} />
                <ImageCard text={"javascript"} image={JavascriptImg} />
                <ImageCard text={"php"} image={PhpImg} />
            </CardContainer>
            
            <p>💪개인적으로 공부</p>
            <CardContainer>
                <ImageCard text={"react"} image={ReactImg} />
            </CardContainer>
            <ExplainText>Class Component ▶ Function Component 전환 중</ExplainText>
            
            <p>👍프로젝트 때 사용 경험</p>
            <CardContainer>
                <ImageCard text={"mongo db"} image={MongodbImg} />
                <ImageCard text={"mysql"} image={MysqlImg} />
                <ImageCard text={"firebase"} image={FirebaseImg} />
            </CardContainer>
            
            <p>✌️인턴 때 사용 경험</p>
            <CardContainer>
                <ImageCard text={"docker"} image={DockerImg} />
                <ImageCard text={"kubernetes"} image={KubernetesImg} />
            </CardContainer>
            <ExplainText><Hyperlink href="https://junghyeonsu.tistory.com/60">2020 하계 인턴 때 올린 블로그 포스트들 정리</Hyperlink></ExplainText>

            <p>👊관심있는 것들</p>
            <CardContainer>
                <ImageCard text={"react native"} image={ReactImg} />
                <ImageCard text={"typescript"} image={TypescriptImg} />
                <ImageCard text={"node js"} image={NodejsImg} />
                <ImageCard text={"nest js"} image={NestjsImg} />
                <ImageCard text={"graph ql"} image={GraphqlImg} />
            </CardContainer>
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
