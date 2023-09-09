import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyD7KtZPQKW8o-AoNiCVSltl5HP3l5xROEk",
  authDomain: "vue-crud-c38c5.firebaseapp.com",
  projectId: "vue-crud-c38c5",
  storageBucket: "vue-crud-c38c5.appspot.com",
  messagingSenderId: "1071161023447",
  appId: "1:1071161023447:web:f35c2bc89732e257b78992",
  measurementId: "G-457Q50Z862"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users/')

export const docId = (id) =>{
  return usersCollection.doc(id)
}

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
