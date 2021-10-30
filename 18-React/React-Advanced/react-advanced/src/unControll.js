import React, { Component } from "react";

class unControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jiaxin",
      flag: true,
    };
    this.nameInputRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  render() {
    return (
      <>
        <div>
          {/* 使用 defaultValue而不是value, 使用 ref */}
          <input defaultValue={this.state.name} ref={this.nameInputRef} />
          {/* state 并不会随着改变 */}
          <span>state.name: {this.state.name}</span>
          <br />
          <button onClick={this.alertName}>alert name</button>
        </div>
        <div>
          <input type="checkbox" defaultChecked={this.state.flag} />
        </div>
        <div>
          <input type="file" ref={this.fileInputRef} />
          <button onClick={this.alertFile}>alert File</button>
        </div>
      </>
    );
  }

  alertName = () => {
    const elem = this.nameInputRef.current; // 通过 ref 获取 DOM 节点
    alert(elem.value); // 不是 this.state.name
  };
  alertFile = () => {
    const elem = this.fileInputRef.current; // 通过 ref 获取 DOM 节点
    alert(elem.files[0].name);
  };
}

export default unControlled;
