import React from "react";

/* 
jsx(JavaScript XML) 문법
확장형 js 문법으로 html과 비슷한 문법으로 사용하는데는 난이도가 낮다
일반 스크립트 문법이 아니기 때문에 babel로 변환하는 작업이 필요
    * babel: 버전이 안맞는 스크립트에서 하위버전으로 문법을 변환시켜주는 것

jsx 문법의 규칙
1. 부모 태그 필요
 - 컴포넌트 안에 있는 여러 개의 요소들은 반드시 하나의 부모 태그로 감싸야 한다 
 - react에서 virtual DOM(가상의 돔)이 컴포넌트를 감지할 때 하나의 객체만 감지하도록 되어 있기 때문
 - 보통은 div 태그로 감싸지만 빈 태그(fragment)도 가능

2. js 표현식 사용 가능 (return 밖에서)
3. if문 대신 삼항 연산자 사용 (A? B : C = A라는 조건이 맞으면 B 실행, 아니면 C 실행)
4. class 대신 className으로 사용해야 함
5. 싱글 태그도 무조건 닫혀 있어야한다 ex) <img />
6. 주석 기호 //를 사용하지 않고 사용할 땐 중괄호로 묶어서 사용(단축키는 동일)
7. 인라인 스타일 적용할 때 객체처럼 입력해야 함
 - key 값에는 "="을 사용할 수 없기 때문에 카멜 기법으로 작성해야 함 
   ex) font-size -> fontSize
8. AND 조건문 (&&)

*/
export default function Grammar() {/* 파일명 그대로 작성하기, 맨 밑줄에 export default Grammar;를 안쓰게 합쳐서 쓴 것  */

    const name = 'anna'; 
    const item = {
        background : 'coral',
        fontSize : '30px'
    }

    return (/* return할 수 있는 요소는 1개밖에 안됨 */

        <div>
            <p style={item}>안녕하세요</p>
            <p>리액트입니다.</p>
            <p >{name }님 반갑습니다.</p>
            {name === 'do'? <p>YEEEES!</p>:<p>NOPE.</p>}
            <div className="item">class는 className으로 클래스명 입력</div>
            {/*  */}
            {name === 'anna' && <p>{name}</p>} {/* 일치하면 name값 출력 없으면 null값이라 아무것도 나오지 x */}
        </div>
    )
}