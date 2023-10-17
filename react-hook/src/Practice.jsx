import React, { useEffect, useState } from 'react';

function Practice(props) {

    const [name, setName] = useState('');

    useEffect(()=>{
        console.log('업데이트시 실행');
    })

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <p>{name}</p>
            <input type="text" onChange={onChange} />
        </div>
    );
}

export default Practice;