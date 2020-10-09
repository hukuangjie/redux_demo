import {
    takeEvery, put
} from 'redux-saga/effects'
import axios from 'axios'
import { getListAction } from './actionCreators'
import {
    GET_MY_LIST
} from './actionTypes'


function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // axios.get('https://www.fastmock.site/mock/f54236b7fb320bac2fd44a599897c2f4/redux/api/getlist')
    //     .then(res => {
    //         const data = res.data
    //         const action = getListAction(data)
    //         put(action)
    //     })
    const res = yield axios.get('https://www.fastmock.site/mock/f54236b7fb320bac2fd44a599897c2f4/redux/api/getlist')
    const action = getListAction(res.data)
    yield put(action)
}
export default mySaga