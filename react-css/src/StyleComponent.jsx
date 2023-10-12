import React from 'react';
import styled, {css, keyframes} from 'styled-components'; /* 스타일 컴포넌트를 사용하기 위해 import 해야 함 */

//animation을 사용할 때에는 추가로 keyframes를 import 해야 함
const CircleAni = keyframes`
    25%{
        background-color : light-coral;
    }
    50%{
        background-color : light-cyan;
    }
    75%{
        background-color : skyblue;
    }
    100%{
        background-color : beige;
    }
`

const Container = styled.div`
    display : flex;
    padding : 12px;
    background : lightgray;
    color : #ffffff;
    font-size : 50px;
` //Container라는 컴포넌트를 만들어서 div태그에 이름을 클래스명 대신 사용

const BtnItem = styled.button`
    background : aqua;
    width : 200px;
    height : 50px;
    color : #ffffff;
    color : ${(props) => props.fontColor}; 
    border : 1px solid black;
    cursor : pointer;
    opacity : 0.5;
    transition : 0.5s;

    ${(props) => props.sub && css` background : pink; `};
    &:hover{
        opacity : 1;
    }
` //sub이라는 클래스명이 있으면 css를 이렇게 바꿔라


const Box = styled.div`
    width : 200px;
    height : 200px;
    background : ${(props) => props.bgColor};
`
//background : ${(props) => props.bgColor}; 이 방법을 이용하면서 추가하는 방식
const Circle = styled(Box)`
    border-radius : 100%;
    animation : ${CircleAni} 3000ms infinite;
`

function StyleComponent(props) {
    return (
        <Container>
            설치!
            <BtnItem sub>버튼입니다</BtnItem>
            <BtnItem fontColor={'red'}>버튼입니다</BtnItem>
            <BtnItem>버튼입니다</BtnItem>
            <BtnItem>버튼입니다</BtnItem>
            <BtnItem>버튼입니다</BtnItem>

            <Box bgColor={'brown'}></Box>
            <Circle bgColor={'blue'}></Circle>
        </Container>
    );
}

export default StyleComponent;