import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import groceryReducer from "./grocery_list/reducers"

export default combineReducers({
    grocery: groceryReducer,
    form: formReducer
})