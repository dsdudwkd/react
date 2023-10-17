import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail(props) {

    /* 
    useParams() = 리액트 라우터를 사용할 때 다른 곳에 있는 파라미터 정보를 활용해야 할 때 사용하는 리액트 라우터 훅

    */
    const {id} = useParams();

    const item = {id : id, name : `item${id}`};

    return (
        <div>
            <h1>item detail</h1>
            <p>{item.id}</p>
            <p>{item.name}</p>
        </div>
    );
}

export default ItemDetail;