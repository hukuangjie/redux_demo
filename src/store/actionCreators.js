import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST,
    GET_MY_LIST
} from './actionTypes'
import axios from 'axios'

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
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/f54236b7fb320bac2fd44a599897c2f4/redux/api/getlist')
            .then(res => {
                const data = res.data
                console.log(data);
                const action = getListAction(data)
                dispatch(action)
            })
    }
}
export const getMyListAction = () => ({
    type: GET_MY_LIST
})