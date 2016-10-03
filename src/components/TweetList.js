import React, { Component } from 'react';
import { TweetContainer } from '../containers/TweetContainer.js';

export class TweetList extends Component {
  render() {
    return (
			<div>
				<section className="tweets">
					{this.props.tweetsList.toJS().reverse().map(tweet => <TweetContainer 
								key={tweet.id}
								avatar={tweet.avatar}
								author={tweet.author}
								time={tweet.time}
								tweetText={tweet.tweetText}
								retweeted={tweet.retweeted}
								liked={tweet.liked}
								id={tweet.id}/>)}
				</section>
			</div>
    );
  }
}

