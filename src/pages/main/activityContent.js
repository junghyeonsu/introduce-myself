import React from 'react'
import styled from 'styled-components'
import Hyperlink from '../../components/hyperlink'

const Container = styled.div`
    margin: 10px;
`;

function ActivityContent() {
    return (
        <div>
            아래 링크에서 확인할 수 있습니다!
            <Container>
                <Hyperlink href="https://junghyeonsu.tistory.com/40">2019 & 2020</Hyperlink>
                <Hyperlink href="https://junghyeonsu.tistory.com/83">2021 계획</Hyperlink>
            </Container>
        </div>
    )
}

export default ActivityContent
