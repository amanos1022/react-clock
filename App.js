import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time : 'Setting time...', rotation:0};

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(time, seconds) {
    let rotation = seconds * 6;
    this.setState({
      time,
      rotation
    });
  }

  componentDidMount() {
    let _this = this;
    setInterval(function(){
      let currentDate = new Date();
      let display = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
      let seconds = currentDate.getSeconds();

      _this.updateTime(display, seconds);
    }, 1000)
  }
  render() {
    let styles = {
      default : {
        width: '33%',
        margin:'40% auto',
        color: 'white',
        background:'#111',
        textAlign:'center',
        fontSize: '3em',
        transform: 'rotate('+this.state.rotation+'deg)'

      }
    };

    return (
      <div style={styles.default}>
        { this.state.time }
      </div>
    );
  }
}


