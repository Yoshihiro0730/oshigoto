import {
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    signOut,
} from 'firebase/auth';
import { auth } from "./firebase";


export const login = async(): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    });
    const signInPopup = signInWithPopup(auth, provider);
    return signInPopup
};

export const logout = (): Promise<void> => {
    return signOut(auth);
};