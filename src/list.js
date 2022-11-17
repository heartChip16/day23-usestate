import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function List() {
    const getItems = () => {
        console.log(" getItems called. ", "color:teal");
        return Array(50).fill(0);
    }
    // const [items, setItems] = useState(getItems());  //dont use this; always calls the function when used
    const [items, setItems] = useState(getItems); //use this to avoid calling function again
    // const [items, setItems] = useState(() => getItems()); //alternative

    return (
        <div class="w-100 p-3 text-success">
            <button onClick={() => setItems([...items, 0])}>Add item</button>

            <ul class="d-flex flex-row list-group flex-wrap container">
                {items.map((items, index) => <li class="list-group-item">   {index + 1}   </li>)}
            </ul>
        </div>
    )
}

export default List