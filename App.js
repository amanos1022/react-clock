import React, { Component } from 'react';
import {HourHand, MinuteHand, MiddleCircle} from './res/HourHand';
import ClockFace from './res/ClockElements';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time : 'Setting time...', secondsCount:1};

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(time, seconds, minutes, hours) {
    let extra = 0;
    if(seconds === 0){
      this.setState({secondsCount: this.state.secondsCount + 1})
    }
    if(this.state.secondsCount > 0 ){
      extra = 360 * this.state.secondsCount;
    }
    let secondsRotation = (seconds * 6) + extra;

    //secondsRotation = 360 * this.state.secondsCount;

    let minuteRotation = minutes * 6;
    let hourRotation = hours * 30;

    console.log(secondsRotation, seconds);


    this.setState({
      time,
      secondsRotation,
      minuteRotation,
      hourRotation
    });
  }

  componentDidMount() {
    let _this = this;
    setInterval(function(){
      let currentDate = new Date();
      let display = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
      let seconds = currentDate.getSeconds();
      let minutes = currentDate.getMinutes();
      let hours = currentDate.getHours();

      _this.updateTime(display, seconds, minutes, hours);
    }, 1000)
  }
  render() {
    let styles = {
      container : {
        width: '400px',
        height: '400px',
        margin:'10% auto',
        textAlign:'center',
        fontSize: '3em',
        border:'1px solid #555',
        position:'relative',
      },
      secondHand : {
        transformOrigin: 'bottom',
        transform: 'rotate('+this.state.secondsRotation+'deg)',
        background:'black',
        width:'1px',
        height:'45%',
        position:'absolute',
        left:'53%',
        bottom:'50%',
        transition: 'transform 300ms ease-in'
  },
      minuteHand : {
        transformOrigin: 'bottom',
        //transform: 'rotate('+this.state.minuteRotation+' 10)',
        width:'6%',
        height:'45%',
        position:'absolute',
        left:'50%',
        bottom:'50%',
        transition: 'transform 300ms ease-in'
      },
      hourHand : {
        transformOrigin: 'bottom',
        transform: 'rotate('+this.state.hourRotation+'deg)',
        width:'7%',
        height:'33%',
        position:'absolute',
        left:'50%',
        bottom:'50%',
        transition: 'transform 300ms ease-in'
      },
      circle : {
        width:'15%',
        height: '15%',
        position: 'absolute',
        left: '44%',
        top: '39%',
      }

    };

    return (
      <div style={styles.container}>
        {/*<div style={styles.secondHand}>*/}
        {/*</div>*/}
        <ClockFace
          hourStyle={styles.hourHand}
          minuteStyle={styles.minuteHand}
          minuteRotation={this.state.minuteRotation}
          style={{width:'100%', height:'100%'}} />
        {/*<MinuteHand style={styles.minuteHand} />*/}
        {/*<HourHand style={styles.hourHand} />*/}
        {/*<MiddleCircle style={styles.circle} />*/}
        {/*{ this.state.time }*/}
      </div>
    );
  }
}


