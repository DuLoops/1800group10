
//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyDS-4j8buAMAR_OryTcFUBowPZGW2ZhzkI",
  authDomain: "fitmaps.firebaseapp.com",
  databaseURL: "https://fitmaps.firebaseio.com",
  projectId: "fitmaps",
  storageBucket: "fitmaps.appspot.com",
  messagingSenderId: "420488455324",
  appId: "1:420488455324:web:b775c32b92578215d67959"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();