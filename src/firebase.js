import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCHjVhy34Fd_zjX3ANPVa8hQatltFxltSE",
    authDomain: "altivolo-novo-auth.firebaseapp.com",
    projectId: "altivolo-novo-auth",
    storageBucket: "altivolo-novo-auth.firebasestorage.app",
    messagingSenderId: "465583694600",
    appId: "1:465583694600:web:675c13b721bb506a4902bd"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
