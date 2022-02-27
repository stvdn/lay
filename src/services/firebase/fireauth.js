import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUserEmail = (data) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, data.email, data.password);
};

export const signInWithEmail = (data) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, data.email, data.password);
};
