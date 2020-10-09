import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM
} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addInputAction = () => ({
    type: ADD_ITEM,
})
export const deleteInputAction = (index) => ({
    type: DELETE_ITEM,
    index
})