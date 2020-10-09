import React, { Component } from 'react'; //imrc
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store/'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

import { changeInputAction } from './store/actionCreators'
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
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        style={{ width: '250px', marginRight: '10px' }}
                        placeholder={this.state.inputValue}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={() => { this.removeBtn(index) }}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;