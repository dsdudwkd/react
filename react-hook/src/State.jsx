import React from 'react';
/* 
Hook : 
리액트는 클래스형과 함수형 컴포넌트로 구분한다
옛날 버전에서는 함수형을 메인으로 사용하면서 값의 변경, 라이프사이클을 사용할 때에는
클래스형 컴포넌트를 구분해서 사용해야 했다

클래스형 컴포넌트의 단점은 코드가 너무 복잡하고 한 번 만든 로직은 재활용이 불가능
이러한 단점을 보완해서 만든게 Hook

함수형 컴포넌트에 클래스형 컴포넌트의 기능을 사용할 수 있게 해주는 일종의 확장 기능이다
대표적으로 useState, useEffect, useReducer

1. useState
props의 단점은 컴포넌트 내부에서 값을 변경할 수 없다
값을 바꿔야 하는 경우에는 props 대신에 state로 사용한다

값을 저장하거나 변경해야 하는 객체에 주로 사용하며, 이벤트 요소와 함께 사용할 수도 있다

컴포넌트에서 받아온 값을 state라고 한다
*/
function State(props) {

    let name = 'Do';

    const clickEvent=()=>{
        name = name === 'Do' ?  '응만' : 'dsdudwkd';
        console.log(name)
        document.getElementById('name').innerText = name;
    
    }
    return (
        <div>
            <p id="name">{name}</p>
            <button onClick={clickEvent}>클릭!</button>
        </div>
    );
}

export default State;