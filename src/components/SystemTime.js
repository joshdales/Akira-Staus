import React from 'react';

class SystemTime extends React.Component {
  constructor(){
    super();
    this.renderMinHand = this.renderMinHand.bind(this);
    this.renderHourHand = this.renderHourHand.bind(this);
  };

  renderMinHand() {
    const min = this.props.time.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    const divStyle = {transform: `rotate(${minDeg}deg)`};

    return <div className="hand min-hand" style={divStyle}></div>;
  };

  renderHourHand() {
    const hour = this.props.time.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    const divStyle = {transform: `rotate(${hourDeg}deg)`};

    return <div className="hand hour-hand" style={divStyle}></div>;
  }

  render() {
    return (
      <div className="clock">
          {this.renderMinHand()}
          {this.renderHourHand()}
      </div>
    );
  };
};

export default SystemTime;
