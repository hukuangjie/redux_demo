import React, { Component } from 'react';
import store from './store'
import {getMyListAction, changeInputAction, addInputAction, deleteInputAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props);
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
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                removeBtn={this.removeBtn}
            />
        );
    }
}

export default TodoList;