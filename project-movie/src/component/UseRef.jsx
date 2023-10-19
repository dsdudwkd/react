import React from 'react';
import { useRef } from 'react';

/* 
useRef()
DOM 요소에 직접적으로 접근해서 참조하거나 값을 변경하기 위해서 사용하는 hook
script에서 사용하는 querySelector, document.getElement.. 같은 요소들은 리액트에서의 사용을 권장하지 않는다
리액트는 DOM요소에 직접적으로 접근하는 것을 금지

방법
useRef()를 가져와서 값을 초기화 하고 시작
*/

const useRef = useRef(); //ref 사용하기 전에 초기화

function UseRef(props) {
    return (
        <div>
            <input type='text' ref={useRef} />
        </div>
    );
}

export default UseRef;