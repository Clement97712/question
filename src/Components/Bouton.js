import React, { Component } from 'react';
import '../App.css';

class Bouton extends Component {
  render() {
    return (
      

        <button className="bouton" onClick={this.props.fonction} value={this.props.value}>{this.props.text}</button>
    );
  }
}

export default Bouton;
