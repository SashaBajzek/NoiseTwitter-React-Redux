import React, { Component } from 'react';

export class SubmitTweetForm extends Component {
  render() {
		const {fields: {tweetText}, handleSubmit} = this.props;
		
		//Disables the submit button until all fields are valid
		const canSubmit = () => {
			return (tweetText.error) 
		}
		
		return (
			<form  name="createTweetForm"  className="tweetbox" onSubmit={ handleSubmit }>
				<textarea name="tweet_content" className="tweetbox__field" placeholder="Compose new Tweet..." {...tweetText}></textarea>
				<div className="tweetbox__actions">
					<div className="tweetbox__counter">{this.props.maxCharacters - tweetText.value.length}</div>
					<input className="tweetbox__button" disabled={canSubmit()} type="submit" value="Tweet"/>
				</div>
			</form>	
		);
  }
}