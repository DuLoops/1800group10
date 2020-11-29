
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


//ratings
  const stars = {
    0: "<i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i>",
    1: "<i class = 'fas fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i> ",
    2: "<i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i> ",
    3: "<i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'far fa-star' ></i><i class = 'far fa-star' ></i> ",
    4: "<i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'far fa-star' ></i> ",
    5: "<i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i><i class = 'fas fa-star' ></i> "
  }
  
  function getStars(ratings){
    return stars[ratings].toString();
  }
  var stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };