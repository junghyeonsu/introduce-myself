import React from 'react'
import styled from 'styled-components'
import ContactsIcon from '@material-ui/icons/Contacts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Contact = styled.div`
    margin-top: 15px;
    display: flex;
    color: #000000;

    span {
        font-size: 2vw;
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5vw;

    a {
        color: #3894ff;
        margin-left: 5px;
    }
`;


function IntroduceContent() {
    return (
        <div>
            저는 현재 충남대학교 학생입니다. <br />
            무언가를 만드는 것을 굉장히 좋아하고, <br />
            예쁘게 꾸미고 보기 좋게 만드는 것을 좋아합니다. <br />
            항상 배우고 발전하는 개발자가 되고 싶습니다.<br />
            <Contact>
                <ContactsIcon style={{ fontSize: "2vw", color: "#2d81ff" }} />
                <span>Contact</span>
            </Contact>
            <ContactItem>
                <FiberManualRecordIcon style={{ fontSize: "1.5vw", color: "#2d81ff" }} />
                <span>블로그 :</span>
                <a href="https://junghyeonsu.tistory.com/">https://junghyeonsu.tistory.com/</a>
            </ContactItem>
            <ContactItem>
                <FiberManualRecordIcon style={{ fontSize: "1.5vw", color: "#2d81ff" }} />
                <span>깃허브 :</span>
                <a href="https://github.com/junghyeonsu">https://github.com/junghyeonsu</a>
            </ContactItem>
            <ContactItem>
                <FiberManualRecordIcon style={{ fontSize: "1.5vw", color: "#2d81ff" }} />
                <span>이메일 :</span>
                <a>jung660317@naver.com</a>
            </ContactItem>
        </div>
    )
}

export default IntroduceContent
