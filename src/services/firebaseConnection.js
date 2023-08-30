
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZR4LlkcfSKADNiloAIUVTdHA7dn8sYcQ",
  authDomain: "notas-7adc8.firebaseapp.com",
  projectId: "notas-7adc8",
  storageBucket: "notas-7adc8.appspot.com",
  messagingSenderId: "371267822771",
  appId: "1:371267822771:web:d07c6746725e3c2d65bcc6"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };