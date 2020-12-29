import React from 'react'
import styled from 'styled-components'
import Item from '../../components/openSourceContentItem'

import GitKubernetes from '../../images/gitKubernetes.png'
import GitRecharts from '../../images/gitRecharts.png'
import GitReact from '../../images/gitReact.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const items = [
    {
        headerText : "kubernetes/website",
        headerImgSrc : GitKubernetes,
        subHeaderText : "쿠버네티스 공식 문서",
        gitLink : "https://github.com/kubernetes/website",
        prLink : "https://github.com/kubernetes/website/pull/23690",
        explain : "첫 오픈소스 기여를 해본 repo 입니다. 인턴 때 도커와 쿠버네티스를 배우면서" +
                  "시간이 조금 남아서 공식 문서 번역을 진행 해보았습니다. 쿠버네티스 스케줄링 정책에 대한 내용이었는데" + 
                  "쿠버네티스가 익숙치 않아서 피드백도 여러 번 받고 수정도 많이 했습니다. 오픈소스에 기여를 어떻게 하는지," + 
                  "어떤 방식으로 하는지 정확하게 알게 된 계기가 되었습니다."
    },
    {
        headerText : "recharts/recharts.org",
        headerImgSrc : GitRecharts,
        subHeaderText : "React 라이브러리 Recharts 공식 문서 수정",
        gitLink : "https://github.com/recharts/recharts.org",
        prLink : "https://github.com/recharts/recharts.org/pull/145",
        explain : "리액트로 프로젝트를 진행하는 도중 차트 라이브러리를 사용할 일이 있어서 사용을 했습니다." + 
                  "차트의 X축의 글씨의 각도를 바꿀 상황이 생겨서, 공식 문서를 찾아보았는데 angle에 대한 attribute 설명은 없었습니다."+
                  "하지만 angle API가 사용 가능하다고 구글에서 찾아서 제가 공식 문서에 angle에 대한 설명을 추가하였습니다."
    },
    {
        headerText : "reactjs/ko.reactjs.org",
        headerImgSrc : GitReact,
        subHeaderText : "React 공식 문서 한글화",
        gitLink : "https://github.com/reactjs/ko.reactjs.org",
        prLink : "https://github.com/reactjs/ko.reactjs.org/pull/268",
        explain : "리액트 공식 문서를 살펴보다가 한글화가 진행되지 않은 페이지가 존재해서 한글화를 진행하였습니다." + 
                  "처음에 prettier를 사용해보지 못해서 고민하다가 관리자분께 질문을 드려서 해결을 하였습니다."
    },
];

function OpenSourceContent() {
    return (
        <Container>
            {items.map((item) => {
                return(
                    <Item
                        headerText={item.headerText}
                        headerImgSrc={item.headerImgSrc}
                        subHeaderText={item.subHeaderText}
                        gitLink={item.gitLink}
                        prLink={item.prLink}
                        explain={item.explain}
                    />
                )
            })}
        </Container>
    )
}

export default OpenSourceContent
