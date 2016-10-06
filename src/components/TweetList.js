import React, { Component } from 'react';
import { TweetContainer } from '../containers/TweetContainer.js';

export class TweetList extends Component {
  render() {
    return (
			<div>
				<section className="tweets">
					{this.props.result.map(tweet => 
						<TweetContainer key={tweet} id={tweet}/>
					)}
				</section>
			</div>
    );
  }
}