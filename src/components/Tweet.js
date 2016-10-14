import React, { Component } from 'react';

export class Tweet extends Component {
	retweeted () {
		if(this.props.tweet.get('retweeted')) {
			return " retweeted";
		} else {
			return "";
		}
	}
	
	liked () {
			if(this.props.tweet.get('liked')) {
				return " liked";
			} else {
				return "";
			}
		}
	
  render() {
		const { tweet, id, retweetTweet, likeTweet } = this.props;
    return (
			<article className={`tweet${this.retweeted()+this.liked()}`}>
				<a href={`http://twitter.com/${tweet.get('author')}`} className="tweet__avatar">
					<img src={`./${tweet.get('avatar')}`} alt={tweet.get('author')}/>
				</a>
				<div className="tweet__details">
					<div className="tweet__metadata">
						<a href={`http://twitter.com/${tweet.get('author')}`} className="tweet__author">{tweet.get('author')}</a>
						<small className="tweet__time">{tweet.get('time')}</small>
					</div>
					<p className="tweet__content">{tweet.get('tweetText')}</p>
					<button className="retweet" onClick={() => retweetTweet(id, tweet.get('retweeted'))} >Retweet</button>
					<button className="like" onClick={() => likeTweet(id, tweet.get('liked'))}>Like</button>
				</div>
			</article>
    );
  }
}