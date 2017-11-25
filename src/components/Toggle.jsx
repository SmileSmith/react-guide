import React, { PureComponent } from 'react';

// 不推荐的写法，每次render都会产生新的回调函数，如果在这个handClick中有传递props到子组件的行为，可能会导致子组件不必要的重绘
export class Toggle1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      // 不推荐的写法，每次render都会产生新的回调函数，如果在这个handClick中有传递props到子组件的行为，可能会导致子组件不必要的重绘
      <button onClick={(e) => this.handleClick(e)}>
        Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// eslint-disable-next-line
class Toggle2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 推荐的写法，使用硬绑定函数，在构造阶段确保handleClick的this指向
    this.handleClick = this.handleClick.bind(this);
  }

  // 类字段，试验性语法
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


// eslint-disable-next-line
class Toggle3 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  // 类字段，试验性语法
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}



export default class Toggle5 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 推荐的写法，使用硬绑定函数，在构造阶段确保handleClick的this指向
    // this.handleClick = this.handleClick.bind(this);
  }

  // 类字段，试验性语法
  handleClick(isToggleOn, e) {
    debugger;
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, this.state.isToggleOn)}>
        Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
