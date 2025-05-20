//@@viewOn:imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//@@viewOff:imports

//@@viewOn:constants
const firebaseConfig = {
  apiKey: "AIzaSyBMmZdylK45bprET8_bW9pe9Xg8jGwhQ4g",
  authDomain: "goods-ledger-app.firebaseapp.com",
  projectId: "goods-ledger-app",
  storageBucket: "goods-ledger-app.appspot.com",
  messagingSenderId: "264427019140",
  appId: "1:264427019140:web:e835d162c936171b255bd1",
  measurementId: "G-4YNH8QEBF1"
};
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
