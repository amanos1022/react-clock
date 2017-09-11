import React, { Component } from 'react';
import ClockFace from './Components/ClockElements';

export default class Clock extends Component {
  constructor( props ) {
    super(props);
    this.state = { time : 'Setting time...', secondsCount : 1 };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime( time, seconds, minutes, hours ) {
    let extra = 0;

    if ( seconds === 0 ) {
      this.setState({ secondsCount : this.state.secondsCount + 1 })
    }

    if ( this.state.secondsCount > 0 ) {
      extra = 360 * this.state.secondsCount;
    }

    let secondsRotation = (seconds * 6) + extra;
    let minuteRotation  = minutes * 6;
    let hourRotation    = hours * 30;

    this.setState({
                    time,
                    secondsRotation,
                    minuteRotation,
                    hourRotation
                  });
  }

  componentDidMount() {
    let _this = this;
    setInterval(function () {
      let currentDate = new Date();
      let display     = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
      let seconds     = currentDate.getSeconds();
      let minutes     = currentDate.getMinutes() + (seconds / 60);
      let hours       = currentDate.getHours() + (minutes / 60);

      _this.updateTime(display, seconds, minutes, hours);
    }, 1000)
  }

  render() {
    let styles = {
      container : {
        width : '100%',
        height : '100%',
        position : 'relative',
      },
      secondHand : {
        transformOrigin : 'bottom',
        transform : 'rotate(' + this.state.secondsRotation + 'deg)',
        background : 'black',
        width : '1px',
        height : '45%',
        position : 'absolute',
        left : '50%',
        bottom : '50%',
        transition : 'transform 300ms ease-in'
      },
      minuteHand : {
        transformOrigin : 'bottom',
        position : 'absolute',
        left : '50%',
        bottom : '50%',
        transition : 'transform 300ms ease-in'
      },
      hourHand : {
        transformOrigin : 'bottom',
        position : 'absolute',
        left : '50%',
        bottom : '50%',
        transition : 'transform 300ms ease-in'
      }
    };

    return (
      <div style={styles.container}>
        <div style={styles.secondHand}>
        </div>
        <ClockFace
          hourStyle={styles.hourHand}
          minuteStyle={styles.minuteHand}
          minuteRotation={this.state.minuteRotation}
          hourRotation={this.state.hourRotation}
          style={{ width : '100%', height : '100%' }}/>
        {/*{ this.state.time }*/}
      </div>
    );
  }
}


