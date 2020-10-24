import React from "react"
import GroceryItem from "./GroceryItem"
import GroceryForm from "./GroceryForm"
import { connect } from 'react-redux'
import { addGrocery, removeGrocery, changeStatus } from '../../redux/grocery_list/actions'

const GroceryList = ({ grocery, addGrocery, removeGrocery, changeStatus }) => {

    const addGroceryToList = ({ grocery, priority }) => {
        addGrocery({
            grocery: grocery,
            status: false,
            priority: priority
        });
    }

    const removeGroceryToList = (index) => {
        removeGrocery(index);
    }

    const changeStatusToItem = (index) => {
        changeStatus(index);
    }

    const initialValues = {
        priority: 0
    }

    return (
        <div className="grocery_list_wrapper">
            <div>
                <GroceryForm onSubmit={(data) => addGroceryToList(data)} initialValues={initialValues} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Product</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {grocery.grocery.map((item, index) =>
                        <GroceryItem item={item} index={index} key={index} removeGroceryToList={removeGroceryToList} changeStatusToItem={changeStatusToItem} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({ grocery }) => {
    return { grocery }
}

const mapDispatchToProps = {
    addGrocery,
    removeGrocery,
    changeStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);