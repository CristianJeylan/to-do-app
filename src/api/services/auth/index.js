import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";


export const SignInService = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return {
    displayName: user.displayName,
    email: user.email || email,
    photoURl: user.photoURl,
    uid: user.uid,
  };
};

export const LogOutService = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Failed to sign out: ", error);
  }
};

export const CreateUserService = async ({ email, password, displayName }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
  } catch (error) {
    console.log(error);
  }
};

export const listenAuthState = (auth, onChange) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    onChange(user);
  });

  return unsubscribe;
};
