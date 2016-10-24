import React, { Component } from 'react';
import { TweetContainer } from '../containers/TweetContainer.js';
import FlipMove from 'react-flip-move';

export class TweetList extends Component {
  render() {
    return (
				<section className="tweets">
					<FlipMove staggerDelayBy={40} staggerDurationBy={40}>
						{this.props.result.map(tweet => 
						<TweetContainer key={tweet} id={tweet}/>
						)}
					</FlipMove>
				</section>
    );
  }
}