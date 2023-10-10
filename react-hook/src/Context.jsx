import React, { createContext, useContext } from 'react';
import ContextChild from './ContextChild';

/* 
기존에는 값을 전달하려면 props를 사용해서 전달했었으나
단점은 부모 자식 관계에서만 값을 전달받을 수 있다는 단점이 있다.
여러 컴포넌트에서(전역으로) 값을 관리하기에는 복잡해지는 문제가 있다
redux라는 걸 사용했었으나 context를 새로 만들어서 전역으로 값을 관리하기 편하게 만들었다

props는 바로 아래의 하위에만 값을 전달할 수 있어 자손 객체에게 값을 한 번에 전달할 수 없다

context는 props로 값을 넘기지 않아도 전역으로 값을 공유받을 수 있다

*/

export const Text = createContext(); //import 아래에 export를 해야함

function Context(props) {

    return (
        <Text.Provider value={'강남 it 학원'}>
            <ContextChild />
        </Text.Provider>
    );
}

export default Context;