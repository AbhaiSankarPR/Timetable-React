import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrgdWlI10a2zC6yBRyvw2YttXv81WMFRU",
  authDomain: "timetable-react.firebaseapp.com",
  databaseURL: "https://timetable-react-default-rtdb.firebaseio.com",
  projectId: "timetable-react",
  storageBucket: "timetable-react.firebasestorage.app",
  messagingSenderId: "781063761197",
  appId: "1:781063761197:web:f8f07bf7615f896e0977a4",
  measurementId: "G-SZ9KQHTRXK"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();