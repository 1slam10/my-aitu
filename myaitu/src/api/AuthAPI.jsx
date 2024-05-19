import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
    try {
        return signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
        alert(err);
    }
};