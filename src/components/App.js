import React, { Component } from 'react';
import { SubmitTweetFormContainer } from '../containers/SubmitTweetFormContainer.js';
import { TweetListContainer } from '../containers/TweetListContainer.js';

export class App extends Component {
  render() {
    return (
      <div>
				<SubmitTweetFormContainer onSubmit={(this.props.mySubmitHandler)}/>
				<TweetListContainer />
      </div>
    );
  }
}