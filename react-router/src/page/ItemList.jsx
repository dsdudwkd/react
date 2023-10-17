import React from 'react';
import { Link } from 'react-router-dom';

function ItemList(props) {

    const item = [
        {id : 1, name : 'item1'},
        {id : 2, name : 'item2'},
        {id : 3, name : 'item3'}
    ]

    return (
        <div>
            <h1>itemList</h1>
            <ul>
                {item.map((items)=>(
                    <li key={items.id}>
                        <Link to={`/items/${items.id}`}>{items.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;