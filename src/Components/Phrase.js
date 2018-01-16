import React, { Component } from 'react';
import '../App.css';

class Phrase extends Component {
  render() {
    return (
      <div >

        <p>Question {this.props.number}: {this.props.question} </p>
        

      </div>
    );
  }
}

export default Phrase;
