import React from 'react'
import Body from '../components/body'
import YearHeader from '../components/yearHeader'
import YearContent from '../components/yearContent'


function Y2021() {
    return (
        <Body>
            <YearHeader text={"2021"} />
            <YearContent title={"프로젝트1(예정)"} term={"2020/2/3 ~ 2020/2/6"} content={"내용1"} />
        </Body>
    )
}

export default Y2021;
