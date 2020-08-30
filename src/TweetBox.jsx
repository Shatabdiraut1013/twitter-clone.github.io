import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			displayName: 'Shatabdi Raut',
			username: 'smshatabdi',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://avatars.dicebear.com/api/avataaars/example.svg',
		});

		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox_input'>
					<Avatar src='https://avatars.dicebear.com/api/avataaars/example.svg' />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="what's happening?"
						type='text'
					/>
				</div>

				<input
					className='tweetBox_imageInput'
					onChange={(e) => setTweetImage(e.target.value)}
					value={tweetImage}
					placeholder='enter your favourite Image URL'
					type='text'
				/>
				<Button onClick={sendTweet} type='submit' className='tweet_btn'>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
