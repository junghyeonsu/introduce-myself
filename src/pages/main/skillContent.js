import React from 'react'
import styled from 'styled-components'
import CardContainer from '../../components/cardContainer'
import ImageCard from '../../components/imageCard'
import Hyperlink from '../../components/hyperlink'

import ReactImg from '../../images/react.png'
import JavascriptImg from '../../images/javascript.png'
import CssImg from '../../images/css.svg'
import FirebaseImg from '../../images/firebase.png'
import DockerImg from '../../images/docker.png'
import GraphqlImg from '../../images/graphql.png'
import HtmlImg from '../../images/html.png'
import JavaImg from '../../images/java.png'
import KubernetesImg from '../../images/kubernetes.png'
import MongodbImg from '../../images/mongodb.png'
import MysqlImg from '../../images/mysql.png'
import NestjsImg from '../../images/nestjs.svg'
import NodejsImg from '../../images/nodejs.jpg'
import PhpImg from '../../images/php.png'
import PythonImg from '../../images/python.png'
import TypescriptImg from '../../images/typescript.png'

const ExplainText = styled.p`
    text-align: center;
    font-size: 1.2vw;
`;

function SkillContent() {
    return (
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

export default SkillContent
