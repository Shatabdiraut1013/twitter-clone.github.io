import firebase from 'firebase';
// import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBMiDqBHir84rEQEfCgb9hfEbVB6wKym-Y',
	authDomain: 'twitter-clone-ae15c.firebaseapp.com',
	databaseURL: 'https://twitter-clone-ae15c.firebaseio.com',
	projectId: 'twitter-clone-ae15c',
	storageBucket: 'twitter-clone-ae15c.appspot.com',
	messagingSenderId: '858558664414',
	appId: '1:858558664414:web:54a8398a497abc45e43c4f',
	measurementId: 'G-M0GEZ7XDTL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
