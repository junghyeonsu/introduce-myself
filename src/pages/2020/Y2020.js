import React from 'react'
import Body from '../../components/body'
import YearHeader from '../../components/yearHeader'
import YearContent from '../../components/yearContent'


function Y2020() {
    return (
        <Body>
            <YearHeader text={"2020"} />
            <YearContent title={"프로젝트1"} term={"2020/2/3 ~ 2020/2/6"} content={"내용1"} />
        </Body>
    )
}

export default Y2020;
