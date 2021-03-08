import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'


// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAefMoOQWvuTZDL-HFz7x1gIvEo48V5Vqg",
  authDomain: "advancedwebdevelopment-c911b.firebaseapp.com",
  projectId: "advancedwebdevelopment-c911b",
  storageBucket: "advancedwebdevelopment-c911b.appspot.com",
  messagingSenderId: "933953792190",
  appId: "1:933953792190:web:e92bbc7254b17ae1d0d6ef",
  measurementId: "G-48KMZGNFNJ"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const userCollection = db.collection('userCollection')
const defaultMutations: object[] = [];
const defaultCollection = db.collection("mutationsCollection")
defaultCollection.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    const mutation = {
      "title": doc.id,
      "data": doc.data()
    };
    defaultMutations.push(mutation)
  })
  console.log(defaultMutations)
})


// export utils/refs
export {
  db,
  auth,
  usersCollection,
  userCollection,
  defaultMutations,
  defaultCollection
}
