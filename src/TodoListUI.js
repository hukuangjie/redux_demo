import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

export default TodoListUI;