import React, { Component } from 'react';

export class CharacterCounter extends Component {
  render() {
    return (
      <div className="tweetbox__counter">{ this.props.remainingCharacters }</div>
    );
  }
}