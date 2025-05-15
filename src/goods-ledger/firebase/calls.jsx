//@@viewOn:imports
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
//@@viewOff:imports

//@@viewOn:constants
const COLLECTION_NAME = "goods";
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

export async function createItem(itemData) {
  const colRef = collection(db, COLLECTION_NAME);
  await addDoc(colRef, itemData);
}

export async function getAllItems() {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
}

export async function deleteItem(id) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}

export async function getItem(id) {
  const docRef = doc(db, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
}

export async function updateItem(id, updatedData) {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, updatedData);
}
