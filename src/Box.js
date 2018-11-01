import React, { Component } from 'react';

class Box extends Component {

  render() {
    const { height,width,color } = this.props;
    const styleObj = {
      backgroundColor: color,
      height:+height,
      width:+width,
      display: 'inline-block'
    }

    return (
      <div className="Box" style={styleObj}>
      <button onClick={this.props.removeMe}>X</button>
      </div>
    )
  }
}

export default Box;