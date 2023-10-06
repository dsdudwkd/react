import React, { useEffect, useState } from 'react';
/* 
useEffect : 페이지가 렌더링 될 때 특정 작업을 시행하는 hook
컴포넌트가 처음 나타났을 때(Mount), 사라질 때(unMount), 업데이트가 돼서 리렌더링이 될 때(props로 값이 바뀔 때)를 말한다

useEffect(()=>{
    //실행 함수
}, 특정 배열값)

effect의 구동 방식은 특정한 값이 변경이 되면 배열에 값을 담아서 변경해주는 방식
배열의 특정 값(변경할 값)을 넣게 되면 그 값이 변경될 때에만 작동
빈 배열을 넣게 되면 최초 마운트 시에만 작동
기본값은 모든 조건에서 실행

useEffect 실행 시 값이 두 번 찍히는 현상은 index.js 파일의 React.StrictMode 때문이다
StrictMode = 리액트 자체에서 import하고 있는 파일의 코드 분석해서 오류를 미리 잡아주는 검사 도구
React.StrictMode에서 렌더링을 한 번, 컴포넌트 자체에서 렌더링을 한 번 => 총 두 번을 최초 실행하기 때문에
console에서 값이 2번 출력됨
https://velog.io/@jay/you-might-need-useEffect-diet
*/
function Effect(props) {

    const [num, setNum] = useState(2);

    const onClick = () => {
        setNum(num * 2);
        // console.log(num);
    }
    useEffect(() => {
        console.log(num);
    },[num])
    return (
        <div>
            <p>{num}</p>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default Effect;