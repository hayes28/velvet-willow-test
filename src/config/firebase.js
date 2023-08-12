// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage } from "firebase/storage";
// eslint-disable-next-line
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABqHximBaL6M1sBnHENryip1QyC6qgaV4",
    authDomain: "velvet-willow.firebaseapp.com",
    projectId: "velvet-willow",
    storageBucket: "velvet-willow.appspot.com",
    messagingSenderId: "256830007264",
    appId: "1:256830007264:web:2b7af5b9f6cb6f1474ed85",
    measurementId: "G-74GN5QMSZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export { app, storage as default };
