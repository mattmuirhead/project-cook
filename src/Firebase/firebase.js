import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Init Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBndsnNAsNLw3x2WLGUaZIMoarTQWT5fPg",
  authDomain: "project-cook-8f3f9.firebaseapp.com",
  databaseURL: "https://project-cook-8f3f9.firebaseio.com",
  projectId: "project-cook-8f3f9",
  storageBucket: "project-cook-8f3f9.appspot.com",
  messagingSenderId: "96018211772",
  appId: "1:96018211772:web:ec3a13a21d5ddb0d8f41b9",
  measurementId: "G-X8SZQKZEKR"
}
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

// Sign in with email and password
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { email, firstName, lastName } = user
    try {
      await userRef.set({
        email,
        firstName,
        lastName,
        ...additionalData
      })
    } catch (error) {
      console.error('Error creating user document', error)
    }
  }
  return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()
    return {
      uid,
      ...userDocument.data()
    }
  } catch (error) {
    console.error('Error fetching user', error)
  }
}