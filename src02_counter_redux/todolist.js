import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

const data = [
    'test1',
    'test2']

class  TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        placeholder='please write something' 
                        style={{ width:'150px', height:'20px', marginRight:'10px'}}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margi:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.item>{item}</List.item>)}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoList ;
