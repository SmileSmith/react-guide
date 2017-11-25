import React, { PureComponent } from 'react';


export default class Clock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.clockId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div>
        <FormattedDate {...this.state}></FormattedDate>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h3>It is {props.time.toLocaleTimeString()}.</h3>;
}
