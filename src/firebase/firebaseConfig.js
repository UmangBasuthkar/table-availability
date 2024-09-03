import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBhgPxpcicLu-76pvdZKrAexn1TNZHwRBw",
    authDomain: "tables-cfd63.firebaseapp.com",
    databaseURL: "https://tables-cfd63-default-rtdb.firebaseio.com",
    projectId: "tables-cfd63",
    storageBucket: "tables-cfd63.appspot.com",
    messagingSenderId: "903337862636",
    appId: "1:903337862636:web:1fff32b6cb7a6aea038cc9",
    measurementId: "G-1DBV0PFB89"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };