import React from 'react';
import { useState } from 'react';
/* 
메모장 제작

1. 내용의 변경사항을 저장할 수 있는 변수 값 있어야함 (초기에는 아무 내용도 없다가 작성을 하기 때문)
2. 메모의 리스트를 저장할 수 있는 배열 형태의 변수값 필요(메모의 갯수가 늘어나면 리스트 형태로 만들어지기 때문)
3. 
*/
function MemoApp(props) {

    const [memo, setMemo] = useState('');
    const [updateMemo, setUpdateMemo] = useState([]);
    const onChange = (e) => {
        setMemo(e.target.value);
        // console.log(e.target.value);
    }

    const saveMemo = () => {
        setUpdateMemo([...updateMemo, memo]);
        setMemo('');
    }

    return (
        <div>
            <h1>메모장 app</h1>
            <input type="text" value={memo} onChange={onChange} />
            <button onClick={saveMemo}>저장하기</button>

            <h2>메모장 리스트</h2>
            <ul>
                {updateMemo.map((memo, index)=>(
                    <li key={index}>{index+1}. {memo}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoApp;