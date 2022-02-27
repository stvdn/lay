import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  addDoc,
  collection,
  updateDoc,
} from "firebase/firestore";

export const addDocWithId = async (collection, id, data) => {
  const db = getFirestore();
  return await setDoc(doc(db, collection, id), data);
};

export const addDocWithoutId = async (collectionName, data) => {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

export const getDocById = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, "users", id);
  return await getDoc(docRef);
};

export const updateDocById = async (collection, id, data) => {
  const db = getFirestore();
  const docRef = doc(db, collection, id);
  return await updateDoc(docRef, data);
};
