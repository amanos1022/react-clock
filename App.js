import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time : 'Setting time...' };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(time) {
    this.setState({
      time
    });
  }

  componentDidMount() {
    let _this = this;
    setInterval(function(){
      let currentDate = new Date();
      let time = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

      _this.updateTime(time);
    }, 1000)
  }
  render() {
    return (
      <div>
        { this.state.time }
      </div>
    );
  }
}


