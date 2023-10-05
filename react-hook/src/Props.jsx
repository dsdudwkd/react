import React from 'react';
/* 
props = property의 약자
상위 컴포넌트가 하위 컴포넌트에게 값을 전달할 때 사용하는 값(값을 주고 받는게 아니고 전달만 가능)
매개변수(props)로 전달받은 값이기 때문에 수정할 수 없다
숫자를 작성할 때에는 ''와 {}를 구분할 것
ex) '40'은 문자열 => 연산 불가능, {40}은 숫자이기 때문에 연산 가능
* 문자열 이외에는 무조건 {} 사용해야 함
*/
function Props(props) {
    return (
        <div>
            <h1>안녕하세요 저는 {props.name} 입니다</h1>
            <p>저는 {props.local}에 살고 있습니다</p>
            <p>배우는 과목은  {props.content}입니다</p>
            <p>나이는 {props.age}입니다</p>
        </div>
    );
}

export default Props;