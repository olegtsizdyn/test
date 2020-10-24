import { ADD_GROCERY } from './actions'
import { REMOVE_GROCERY } from './actions'
import { CHANGE_STATUS } from './actions'

const INIT_STATE = {
    grocery: [
        {
            grocery: 'test',
            status: false,
            priority: '0'
        }
    ]
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_GROCERY:
            return { ...state, grocery: state.grocery.concat(action.payload) };
        case CHANGE_STATUS:
            return {
                ...state, grocery: state.grocery.map((item, index) => {
                    if (index === action.payload) {
                        return Object.assign({}, item, {
                            status: !item.status
                        })
                    }
                    return item
                })
            }
        case REMOVE_GROCERY:
            return { ...state, grocery: state.grocery.filter((item, index) => index !== action.payload) };
        default:
            return { ...state };
    }
}