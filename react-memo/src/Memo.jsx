import React from 'react';
import { useReducer } from 'react';
import { MemoReducer, init } from './component/MemoReducer';
/* 
useReducer

상태값을 분리해서 따로 관리하는 hook
state같은 경우는 페이지 내에서만 관리가 가능하다는 단점을 가지고 있다
reducer를 사용하면 다일 파일에서 상태값을 분리해서 사용할 수 있다


*/

function Memo(props) {

    const [state, dispatch] = useReducer(MemoReducer, init);
    
    const onChange = (e) => {
        dispatch({type : 'SET_MEMO', load : e.target.value});
    }

    const updateMemo = () => {
        // dispatch({type : 'SAVE_MEMO'});
        //index값에 따라 새 메모를 저장하거나 기존 메모를 수정하는 데 사용
        //index가 -1이면 saveMemo를 실행
        if(state.itemIndex === -1){
            dispatch({type:'SAVE_MEMO'})
        } else {
            dispatch({type: 'SAVE_EDIT_MEMO'});
        }
    }
    const onDelete = (index) => {
        dispatch({type : 'DELETE_MEMO', load : index});
    }
    const onEdit = (index) => {
        dispatch({type : 'EDIT_MEMO', load : index}); //load는 값을 불러오는 속성
    }

    
    return (
        <div>
            <h1>메모장</h1>
            <input type="text" value={state.memo} onChange={onChange} />
            <button onClick={updateMemo}>저장하기</button>

            <h2>메모 리스트</h2>
            <ul>
                {state.saveMemo.map((memo, index)=>(
                    <li key={index}>{index+1}. {memo}
                    <button onClick={()=>onEdit(index)}>수정하기</button>
                    <button onClick={()=>onDelete(index)}>삭제하기</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Memo;