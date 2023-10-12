import React from 'react';
import './Item.css';
import Button from './component/Button';
import Button2 from './component/Button2';

function Item(props) {

    const text = {
        color : 'coral',
        backgroundColor : 'skyBlue', 
        fontSize : '150px'
    }
    return (
        <div className='containder'>
            <h1 className='title'>리액트 기본 css 작성 방식</h1>

            <p style={{
                fontSize : '60px',
                backgroundColor : 'pink'
            }}>
                안녕하세용 인라인(직접) 스타일 방식 입니다용
            </p>

            <span style={text}>변수로 선언하는 방식</span>
            <Button />
            <Button2 />
        </div>

    );


}

export default Item;