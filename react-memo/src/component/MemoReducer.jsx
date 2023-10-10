// import React from 'react'; //리액트를 사용하지 않아서 import 할 필요 없음

export const init = { //useState에서 잡는 기본값을 init으로 설정
    memo: '',
    saveMemo: [],
    itemIndex : -1
}

export function MemoReducer(state, action) {
    //action: 업데이트를 위한 정보를 가지고 있는 변수
    //state: 컴포넌트에서 사용할 수 있는 상태를 가진 변수
    //dispatch: action을 발생시키는 함수
    //useReducer에서 값을 switch문으로 작성 (case는 항상 대문자로만 작성해야 함)
    switch (action.type) { //type은 저장, 수정, 삭제 중에 어떤 것인지 
        case 'SET_MEMO':
            return { ...state, memo: action.load };

        case 'SAVE_MEMO':
            return { ...state, saveMemo: [...state.saveMemo, state.memo], memo: '' };
        
        case 'DELETE_MEMO':
            return {...state, saveMemo: state.saveMemo.filter((memo, index)=>index !== action.load)}

        case 'EDIT_MEMO':
            return {...state, memo : state.saveMemo[action.load], itemIndex:action.load};
        
        case 'SAVE_EDIT_MEMO':
            //수정된 메모를 다시 배열에 저장하는 작업
            const editMemo = [...state.saveMemo];
            editMemo[state.itemIndex] = state.memo;
            return {...state, saveMemo : editMemo, memo:'', itemIndex:-1};
    }
}
