import React, { Component } from 'react';

export class HourHand extends Component {
  render() {
    return (
        <svg style={this.props.style} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 11 66">
          <g>
            <path id="path3946" d="m3.749425,12.597448c1.189531,-3.895435 0.964906,-7.869298 1.623544,-12.094001c0.694616,4.170602 0.504066,8.1462 1.726948,12.031545c1.376833,4.37444 7.738756,8.50503 -1.545429,14.409155c-9.334257,-5.777799 -3.144337,-9.960892 -1.805063,-14.346699z"/>
            <path id="path3028" d="m3.929682,65.507062l1.500677,-58.59943l0.667037,58.594111l-2.167714,0.005319z"/>
          </g>
        </svg>
    )
  }
}

export class MinuteHand extends Component {
  render() {
    return (
      <svg style={this.props.style} viewBox="0 0 11 91" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-1, 0)">
          <title>Layer 1</title>
          <path d="m5.071839,12.772784c1.201934,-3.91713 0.997474,-7.919923 1.672883,-12.171132c0.671044,4.20312 0.462481,8.205694 1.660406,12.124071c1.348723,4.411611 7.657685,8.601219 -1.606213,14.502907c-9.257881,-5.862398 -3.080288,-10.045599 -1.727037,-14.455842l-0.00004,-0.000004z"/>
          <path d="m5.238072,90.661829l1.599697,-80.732211l1.472671,80.737651l-3.072369,-0.00544z"/>
        </g>
      </svg>
    )
  }
}

export class MiddleCircle extends Component {
  render() {
    return (
      <svg style={this.props.style} perserveAspectRation="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-1, -10)">
          <title>Layer 1</title>
          <ellipse ry="17.5" rx="17.5" id="svg_1" cy="89.5" cx="67" stroke-width="1.5" stroke="#000" fill="#000000"/>
        </g>
      </svg>
    )
  }
}