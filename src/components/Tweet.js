import React, { Component } from 'react';

export class Tweet extends Component {
	retweeted () {
		if(this.props.retweeted) {
			return " retweeted";
		} else {
			return "";
		}
	}
	
	liked () {
			if(this.props.liked) {
				return " liked";
			} else {
				return "";
			}
		}
	
  render() {
    return (
			<article className=	{`tweet${this.retweeted()+this.liked()}`}>
				<a href={`http://twitter.com/${this.props.author}`} className="tweet__avatar">
					<img src={`./${this.props.avatar}`} alt={this.props.author}/>
				</a>
				<div className="tweet__details">
					<div className="tweet__metadata">
						<a href={`http://twitter.com/${this.props.author}`} className="tweet__author">{this.props.author}</a>
						<small className="tweet__time">{this.props.time}</small>
					</div>
					<p className="tweet__content">{this.props.tweetText}</p>
					<button className="retweet" onClick={() => this.props.retweetTweet(this.props.id, this.props.retweeted)} >Retweet</button>
					<button className="like" onClick={() => this.props.likeTweet(this.props.id, this.props.liked)}>Like</button>
				</div>
			</article>
    );
  }
}