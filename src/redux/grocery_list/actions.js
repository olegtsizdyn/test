export const ADD_GROCERY = 'ADD_GROCERY';
export const REMOVE_GROCERY = 'REMOVE_GROCERY';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const addGrocery = (item) => ({
    type: ADD_GROCERY,
    payload: item
});

export const changeStatus = (index) => ({
    type: CHANGE_STATUS,
    payload: index
});

export const removeGrocery = (item) => ({
    type: REMOVE_GROCERY,
    payload: item
});