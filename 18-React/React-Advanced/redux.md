### Redux 使用

* 基本概念
* 单项数据流
* react-redux
* 异步action
* 中间件

### 单项数据流

* dispatch(action)
* reducer  ——> newState
* subscribe 触发通知

### React-redux

* <Provider> connect
* connect
* mapStateToProps  mapDispatchToProps
* createStore 传递 reducer

### 异步action

**同步action**

```jsx
export const addTodo = text => {
    // 返回action 对象
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
```

**异步action**

```jsx
export const addTodoAsync = text => {
    // 返回函数, 其中有dispatch参数
    return (dispatch) => {
        // ajax异步获取数据
        fetch(url).then(res => {
            // 执行异步action
            dispatch(addTodo(res.text));
        })
    }
}
```

**异步action需要传入中间件**

```jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';

// 创建store时，作为中间件引入 redux-thunk
const store = createStore(rootReducer, applyMiddleware(thunk));
```

### 中间件

* redux-thunk
* redux-promise
* redux-saga







