import React from 'react'
import './page.css'
import { Link } from "react-router-dom"
import Card from '../components/card'
import Header from '../components/header'
import Content from '../components/content'

function main() {
    return (
        <div className="main">
            <div className="main__container">
                <Header />
                <Content title={"타이틀1"} content={"컨텐츠1"} />
                <Content title={"타이틀2"} content={"컨텐츠2"} />
                <div className="card__container">
                    <Card text={"2016"}/>
                    <Card text={"2017"}/>
                    <Card text={"2018"}/>
                </div>
                <div className="card__container">
                    <Card text={"2019"}/>
                    <Card text={"2020"}/>
                    <Card text={"2021"}/>
                </div>
            </div>
        </div>
    )
}

export default main;
