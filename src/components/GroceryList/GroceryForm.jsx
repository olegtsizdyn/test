import React from "react"
import { Field, reduxForm, reset } from 'redux-form'
// import { resetForm } from "../../redux/services/resetForm"

const GroceryForm = ({ handleSubmit, initialValues }) => {

    const resetFormAndSendResult = (data) => {
        handleSubmit(data);
        // resetForm("add_grocery_form")
    }

    return (
        <form className="form_add_grocery" onSubmit={(data) => resetFormAndSendResult(data)}>
            <label>Add grocery: </label>
            <Field
                name="grocery"
                component="input"
                type="text"
                placeholder="Add grocery"
            />
            <label>Add priority: </label>
            <Field
                name="priority"
                component="input"
                type="number"
                placeholder="Add priority"
            />
            <button>Add grocery</button>
        </form>
    )
}

export default reduxForm({
    form: 'add_grocery_form',
    enableReinitialize: true
})(GroceryForm)