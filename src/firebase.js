import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBu7b6U_bg8y1IFwu6s6a2EQ7laPfn_3GU',
  authDomain: 'livecode-react.firebaseapp.com',
  databaseURL: 'https://livecode-react.firebaseio.com',
  projectId: 'livecode-react',
  storageBucket: 'livecode-react.appspot.com',
  messagingSenderId: '941346556384'
}
firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
