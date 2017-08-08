import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state={
      timesClicked: 0
    }
  }

  incrementClicker = () => {
    let i = this.state.timesClicked
    i += 1
    this.setState({timesClicked: i})
  }

  render(){
    return(
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
