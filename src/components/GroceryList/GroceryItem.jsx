import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const GroceryItem = ({ item, index, key, removeGroceryToList, changeStatusToItem }) => {
    const [statusState, setStatusState] = useState(false)

    const changeStatus = (index, status) => {
        setStatusState(status);
        changeStatusToItem(index, status);
    }

    return (
        <tr kay={key}>
            <th>{index}</th>
            <th>{item.priority}</th>
            <td>{item.grocery}</td>
            <td><input type="checkbox" onChange={(e) => changeStatus(index, e.target.checked)} />{statusState ? 'have' : 'ran out'}</td>
            <td><button onClick={() => removeGroceryToList(index)}>Remove</button></td>
            <td><button><Link to={`/product/${index}`}>Details</Link></button></td>
        </tr>
    )
}

export default GroceryItem;