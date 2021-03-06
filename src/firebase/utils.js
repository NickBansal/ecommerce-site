import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAL7NhpOCKT_6lphuSyk8Qq7_JZh2VXKIA',
	authDomain: 'e-commerce-db174.firebaseapp.com',
	databaseURL: 'https://e-commerce-db174.firebaseio.com',
	projectId: 'e-commerce-db174',
	storageBucket: 'e-commerce-db174.appspot.com',
	messagingSenderId: '291078944075',
	appId: '1:291078944075:web:b86252f5ef0c3d2898e4ce',
	measurementId: 'G-B6M06QD5TP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
