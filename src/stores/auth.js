import { defineStore } from 'pinia'
import { auth, db, googleProvider } from '../firebase'
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        role: 'guest',
        ready: false,
        error: null
    }),
    getters: {
        isLogged: (s) => !!s.user,
        isAdmin: (s) => s.role === 'admin'
    },
    actions: {
        init() {
            if (this._inited) return
            this._inited = true
            onAuthStateChanged(auth, async (u) => {
                this.user = u
                this.error = null
                if (u) {
                    const ref = doc(db, 'roles', u.uid)
                    const snap = await getDoc(ref)
                    this.role = snap.exists() ? (snap.data().role || 'user') : 'user'
                } else {
                    this.role = 'guest'
                }
                this.ready = true
            })
        },
        async loginEmail(email, password) {
            this.error = null
            await signInWithEmailAndPassword(auth, email, password)
        },
        async registerEmail(email, password) {
            this.error = null
            const cred = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'roles', cred.user.uid), { role: 'user' }, { merge: true })
        },
        async loginGoogle() {
            this.error = null
            const res = await signInWithPopup(auth, googleProvider)
            await setDoc(doc(db, 'roles', res.user.uid), { role: 'user' }, { merge: true })
        },
        async logout() {
            await signOut(auth)
        },
        async setRole(uid, role) {
            await setDoc(doc(db, 'roles', uid), { role }, { merge: true })
            if (this.user && this.user.uid === uid) this.role = role
        }
    }
})
