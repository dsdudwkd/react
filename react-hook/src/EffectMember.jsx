import React, { useEffect, useState } from 'react';

function EffectMember(props) {

    const [item, setItem] = useState([]);
    const [check, setCheck] = useState(false); //멤버의 체크 여부(회원, 비회원 구분위해)

    const onChange = () => {
        setCheck((prev) => !prev) //체크여부가 계속 바뀌므로 prev라는 변수로 받아오기, check로 바로 작성하면 한 번밖에 실행히 안됨
        console.log(check);
    }
    useEffect(() => {
        //비동기 데이터를 처리하는 메서드(json같은 문서 파일을 가져오는 것을 api 처리한다 함)
        fetch(`data/${check ? 'non-' : ''}member.json`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            })
    })
    return (
        <div>
            <input type="checkbox" onChange={onChange} />비회원
            
            <ul>
                {item.map((item)=>(
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </li>
                ))}    
            </ul>
        </div>
    );
}

export default EffectMember;