import React from 'react';
/* 
리액트에서 이벤트 처리하기
기존 이벤트명 앞에 on을 붙여서 사용
onClick = 클릭이벤트
onChange = 컨텐츠에 있는 내용 변경될 경우 (input)
onSubmit = 폼에 있는 데이터 전송
onFocus = 포커스 인 이벤트
onBlur = 포커스 아웃 이벤트
onMouseMove = 마우스가 움직이는 이벤트

1.이벤트문법에는 카멜 기법을 사용한다
onClick = {clickEvent}(o) / {clickevent}(x)

2.문자열이 아닌 함수형으로 이벤트를 전달
onClick = {clickEvent} (o)
onClick = clickEvent() (x)

* 리액트는 직접적으로 DOM을 수정하는 방식을 선호하지 않는다(jquery 사용x, querySelector를 잡는 방식x)

3. 리액트에서는 요소의 기본 이벤트를 막기 위해 return false를 사용할 수 없다
기본 이벤트를 막기 위해서는 e.preventDefault를 적용해야 한다
*/

const clickEvent = () => {
    console.log('11');
}

function Event(props) {
    return (
        <div>
            <button onClick={clickEvent}>click!</button>
            <button onClick={()=>{console.log('22');}}>클릭!</button> {/* 즉시실행함수로 표현 */}
        </div>
    );
}

export default Event;