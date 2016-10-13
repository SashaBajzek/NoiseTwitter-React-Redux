import React, { Component } from 'react';
import { Field } from 'redux-form';

/*
Made a separate render field per Redux-Forms instruction:  Notice the reused stateless function component used to render each field. It is important that this not be defined inline (in the render() function), because it will be created anew on every render and trigger a rerender for the field, because the component prop will have changed.
*/


// how does meta: { touched, error } work?  is this a redux-form thing?
const renderField = ({ input, type, meta: { touched, error } }) => (
	<div>
		<textArea {...input} placeholder="Compose new Tweet..." type={type} className="tweetbox__field"></textArea>
		{ touched && error && <span>{ error }</span> }
	</div>
)

export class SubmitTweetForm extends Component {
  render() {
		const { handleSubmit, tweetTextValue, valid } = this.props;
		
		return (
			<form className="tweetbox" onSubmit={ handleSubmit }>
				<Field name="tweetText" component={renderField} type="text" />
				<div className="tweetbox__actions">
					<div className="tweetbox__counter">{ (tweetTextValue && (this.props.maxCharacters  - tweetTextValue.length)) || 140 }</div>
					<input className="tweetbox__button"  disabled={ !valid }  type="submit" />
				</div>
			</form>	
		);
  }
}