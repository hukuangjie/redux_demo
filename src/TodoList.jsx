import React, { Component } from 'react';
import store from './store/'
import { changeInputAction, addInputAction, deleteInputAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState()
        store.subscribe(this.storeChange) //订阅模式
    }
    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn = () => {
        const action = addInputAction()
        store.dispatch(action)
    }
    removeBtn = (index) => {
        const action = deleteInputAction(index)
        store.dispatch(action)
    }
    storeChange = () => {
        this.setState(store.getState())
    }

    render() {
        return (
            <TodoListUI />
        );
    }
}

export default TodoList;