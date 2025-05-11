//@@viewOn:imports
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
//@@viewOff:imports

//@@viewOn:constants
const COLLECTION_NAME = "items";
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

export async function createItem(itemData) {
    console.log("createItem volán s:", itemData)
  const colRef = collection(db, "goods");
  await addDoc(colRef, itemData);
}

export async function getAllItems() {
  const colRef = collection(db, COLLECTION_NAME);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getItems() {
  const querySnapshot = await getDocs(collection(db, "goods"));
  const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log("Načteno z Firebase:", items);
  return items;
}