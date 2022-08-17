
import { getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDp-aRdL1QRweCKQ-GEETto51zZ65qVaVo",
  authDomain: "restaurantapp-9ced3.firebaseapp.com",
  databaseURL: "https://restaurantapp-9ced3-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9ced3",
  storageBucket: "restaurantapp-9ced3.appspot.com",
  messagingSenderId: "238928345336",
  appId: "1:238928345336:web:c1639a7f1e549d2862230d"
};


const app = getApps.length > 0 ? getApp()  : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};