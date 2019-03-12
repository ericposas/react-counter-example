import React from 'react';
import {Counter} from './Counter.jsx';

export class CounterParent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
  }

  increase(e){
    let current_count = this.state.count;
    if(e.shiftKey) current_count+=10
    else current_count+=1
    this.setState({
      count: current_count
    })
  }

  render(){
    let backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    }
    let buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: '3px'
    }
    return(
      <div style={backgroundStyle}>
        <Counter display={this.state.count}/>
        <button onClick={this.increase} style={buttonStyle}>+</button>
      </div>
    )
  }

}
