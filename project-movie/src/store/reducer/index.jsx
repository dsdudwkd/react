import {combineReducers} from 'redux';
import ActionMovie from './reducerActionMovie';
/* 
redux 설치 명령어
yarn add redux
yarn add react-redux

redux
전역 상태 관리 hook
리액트는 변경되는 값들을 보통 state로 지정해서 관리를 한다
보통 관리해야 할 상태값이 적은 경우 state로 관리가 가능하지만 컴포넌트들끼리의 공유할 상태값이 많거나
복잡하게 엉키게 되면 state로 관리하는 한계가 명확하게 드러난다
props로 상태값을 관리하면 가독성이 떨어지며, 유지보수에 어려움이 생기고 불필요한 리렌더링이 계속 발생하게 된다

이러한 state의 단점을 보완해서 하나의 공간에 데이터를 모아두고 전역상태로 관리하는 hook

redux는 store라는 상태 저장소를 사용하며, 이 store에서 관리되는 상태값을 일반적으로 꺼내오거나 변경은 불가능하다 (상태값의 안정성)
store에서 저장된 상태는 자바스크립트의 객체로 표시되어 저장된다

redux에서는
action -> dispatch -> reducer -> store순으로 데이터가 진행하게 된다

action = 상태를 변경하려는 객체
dispatch는 store에서 action을 전달하기 위해서 제공하는 방법
변경될 내용이 전달되면 reducer가 코드를 처리하고 업데이트 한다
*/ 

//여러 개의 reducer를 하나의 store에서 실행할 수 있도록 해주는 메서드
//장르마다 불러올 reducer가 다르기 때문에 한 번에 관리할 수 있는 combineReducers를 사용
const rootReducer = combineReducers({
    action : ActionMovie,
})

export default rootReducer;