import React, { Component } from 'react';
import { TweetContainer } from '../containers/TweetContainer.js';

export class TweetList extends Component {
  render() {
    return (
			<div>
				<section className="tweets">
					{this.props.result.toJS().reverse().map(tweet => 
						<TweetContainer key={tweet} id={tweet}/>
					)}
				</section>
			</div>
    );
  }
}


//NEXT ITERATION:  Need to figure out how to eliminate the .reverse() or move it elsewhere