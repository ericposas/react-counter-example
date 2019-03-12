import React from 'react';

export class Counter extends React.Component {

  render(){
    let textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: 'bold'
    }
    return(
      <div style={textStyle}>
        {this.props.display}
      </div>
    )
  }

}
