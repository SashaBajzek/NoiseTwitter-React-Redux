import React, { Component } from 'react';
import { SubmitTweetFormContainer } from '../containers/SubmitTweetFormContainer.js';
import { TweetListContainer } from '../containers/TweetListContainer.js';
import { Castle } from './Castle';
import { Coconut } from './Coconut';
import { Crab } from './Crab';
import { Drink } from './Drink';
import { Palm } from './Palm';

export class App extends Component {
  render() {
    return (
      <div>
				<SubmitTweetFormContainer onSubmit={(this.props.mySubmitHandler)}/>
				<TweetListContainer />
				<Castle />
				<Coconut />
				<Crab />
				<Palm />
      </div>
    );
  }
}