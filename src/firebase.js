import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1RcxDRuCqAurlDQGf0e2FOqBoZl0jBWE",
  authDomain: "realtor-92b76.firebaseapp.com",
  projectId: "realtor-92b76",
  storageBucket: "realtor-92b76.appspot.com",
  messagingSenderId: "149989535153",
  appId: "1:149989535153:web:69a2b29f6cef67c4862190"
};

// Initialize Firebase
initializeApp(firebaseConfig);

 export const db = getFirestore()