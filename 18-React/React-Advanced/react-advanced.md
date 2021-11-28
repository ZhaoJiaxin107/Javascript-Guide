### React高级特性
* 函数组件
* 非受控组件
* Portals
* context
* 异步组件
* 性能优化
* 高阶组件HOC
* Render Props

#### 函数组件
* 纯函数, 输入props, 输出jsx
* 没有实例, 没有生命周期，没有state
* 不能扩展其他方法


#### 非受控组件
* ref
* defaultValue defaultChecked
* 手动操作DOM元素
* 表单数据将交由 DOM 节点来处理

**使用场景**
* 必须手动操作DOM元素, setState实现不了
* 文件上传 <input type="file" />
* 富文本编辑器，需要传入DOM

#### 性能优化

* shouldComponentUpdate(简称SCU)
* PureComponent和React.memo
* 不可变值 immutable.js

#### SCU基本用法

我们可以通过shouldComponentUpdate生命周期函数来来判断当前组件所在的props、state和context发生改变时，当前组件还是否需要进行更新操作(可以认为为当前组件自定义一个diff算法)，以达到性能的最大优化。

```js
shouldComponentUpdate(nextProps, nextState) {
    if(nextState.count !== this.state.count) {
        return true // 可以渲染
    }
    return false // 不重复渲染
}
```

#### 高阶组件

![image-20211127165410569](C:\Users\zjx_n\AppData\Roaming\Typora\typora-user-images\image-20211127165410569.png)

![image-20211127172745145](C:\Users\zjx_n\AppData\Roaming\Typora\typora-user-images\image-20211127172745145.png)





