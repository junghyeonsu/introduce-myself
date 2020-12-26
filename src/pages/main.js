import React from 'react'
import { Link } from "react-router-dom"
import styled, {keyframes} from 'styled-components'
import Card from '../components/card'
import Header from '../components/header'
import Content from '../components/content'
import Body from '../components/body'

const Main = styled.div`
    display: flex;
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
`;

function main() {
    return (
        <Main>
            <Body>
                <Header />
                <Content title={"타이틀1"} content={"컨텐츠1"} />
                <Content title={"타이틀2"} content={"컨텐츠2"} />
                <Content title={"타이틀3"} />
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
